function tagsQueryString(tags, itemid, result) {
  for (let i = 1; i <= tags.length; i++) {
    result += `($${i}, ${itemid})`;
    if (i !== tags.length) result += ",";
  }
  return (result += ";");
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text:
          "INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *;",
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
        // rows is a property of the user object and it comes from the database
        // rows contains the result of the INSERT query
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: `SELECT * FROM users WHERE users.id = $1`,
        values: [id]
      };

      try {
        const user = await postgres.query(findUserQuery);
        return user.rows[0];
      } catch (err) {
        if (err) {
          throw new Error(err);
        }
      }

      /**
       *  Refactor the following code using the error handling logic described above.
       *  When you're done here, ensure all of the resource methods in this file
       *  include a try catch, and throw appropriate errors.
       *
       *  Ex: If the user is not found from the DB throw 'User is not found'
       *  If the password is incorrect throw 'User or Password incorrect'
       */
      // -------------------------------
    },
    async getItems(idToOmit) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE ownerid != $1`,
          values: idToOmit ? [idToOmit] : []
        });
        return items.rows;
      } catch (e) {
        throw new Error(e);
      }
    },
    async getItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE items.ownerid = $1`,
          values: [id]
        });
        return items.rows;
      } catch (e) {
        throw new Error(e);
      }
    },
    async getBorrowedItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE items.borrowerid = $1 `,
          values: [id]
        });
        return items.rows;
      } catch (e) {
        throw new Error(e);
      }
    },
    async getTags() {
      try {
        const tags = await postgres.query(`select * from tags`);
        return tags.rows;
      } catch (e) {
        throw new Error(e);
      }
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * FROM tags INNER JOIN itemtags ON tags.id = itemtags.tagid WHERE itemtags.itemid = $1`, // @TODO: Advanced query Hint: use INNER JOIN
        values: [id]
      };
      try {
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (e) {
        throw new Error(e);
      }
    },
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;
              const newItemQuery = {
                text: `INSERT INTO items (title, description, ownerid) VALUES ($1, $2, $3) RETURNING *`,
                values: [title, description, user]
              };
              const insertNewItem = await postgres.query(newItemQuery);
              const itemid = insertNewItem.rows[0].id;
              const tagRelationshipQuery = {
                text: `INSERT INTO itemtags (tagid, itemid) VALUES ${tagsQueryString(
                  [...tags],
                  itemid,
                  ""
                )}`,
                values: tags.map(tag => tag.id)
              };

              await postgres.query(tagRelationshipQuery);
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                done();
                resolve(insertNewItem.rows[0]);
              });
            });
          } catch (e) {
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }

              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};

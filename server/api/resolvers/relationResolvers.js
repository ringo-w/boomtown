const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    items(root, args, { pgResource }, info) {
      return pgResource.getUserById(root.id);
      // -------------------------------
    },
    borrowed(root, args, { pgResource }, info) {
      return pgResource.getUserById(root.id);
    }
  },

  Item: {
    async itemowner(root, args, { pgResource }, info) {
      try {
        return await pgResource.getUserById(root.ownerid);
      } catch (e) {
        throw new ApolloError(e);
      }
    },

    tags(root, args, { pgResource }, info) {
      return pgResource.getTagsForItem(root.id);
    },

    borrower(root, args, { pgResource }, info) {
      return pgResource.getUserById(root.borrowerid);
    }
  }
};

module.exports = relationResolvers;

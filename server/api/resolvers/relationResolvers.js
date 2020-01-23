const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    async items(root, args, { pgResource }, info) {
      try {
        return await pgResource.getItemsForUser(root.id);
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrowed(root, args, { pgResource }, info) {
      try {
        return pgResource.getBorrowedItemsForUser(root.id);
      } catch (e) {
        throw new ApolloError(e);
      }
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

    async tags(root, args, { pgResource }, info) {
      try {
        return await pgResource.getTagsForItem(root.id);
      } catch (e) {
        throw new ApolloError(e);
      }
    },

    async borrower(root, args, { pgResource }, info) {
      try {
        return await pgResource.getUserById(root.borrowerid);
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;

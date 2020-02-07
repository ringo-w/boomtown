const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    return user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);
      return user;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async items(parent, args, { pgResource }, info) {
    try {
      return await pgResource.getItems(args.filter);
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async tags(parent, args, { pgResource }, info) {
    try {
      return await pgResource.getTags();
    } catch (e) {
      throw new ApolloError(e);
    }
  }
});

module.exports = queryResolvers;

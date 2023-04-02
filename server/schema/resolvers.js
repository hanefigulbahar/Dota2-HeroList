const resolvers = {
  Query: {
    heroes: async (_, __, { dataSources }) => {
      return dataSources.dotaHeroes.getAllHeroes();
    },
  },
};

export default resolvers;

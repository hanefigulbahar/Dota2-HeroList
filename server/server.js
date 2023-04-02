import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema/type-defs.js";
import resolvers from "./schema/resolvers.js";
import DotaHeroes from "./dota-api.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        dotaHeroes: new DotaHeroes({ cache }),
      },
    };
  },
});
console.log(`🚀 Server ready at ${url}`);

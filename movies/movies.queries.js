import client from "../client.js";

export default resolvers = {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_, { id }) => client.movie.findUnique({ where: { id } })
  }
};

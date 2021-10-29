import client from "../client.js";

export default {
  Mutation: {
    createMovie: (_, { title, year, genre }) =>
      client.movie.create({ data: { title: title, year: year, genre: genre } }),
    deleteMovie: (_, { id }) => client.movie.delete({ where: { id } }),
    updateMovie: (_, { id, year }) =>
      client.movie.update({ where: { id }, data: { year } })
  }
};

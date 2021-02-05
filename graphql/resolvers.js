import { getPersonById, persons } from './db';

const resolvers = {
  Query: {
    persons: () => persons,
    person: (_, { id }) => getPersonById(id),
  },
};

export default resolvers;

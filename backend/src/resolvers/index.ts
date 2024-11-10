import AuthenticationResolvers from './Authentication';

export default {
  Mutation: {
    ...AuthenticationResolvers.Mutation,
  },
};

import apolloClientInstance from '../../../../models/ApolloClient';

import { ISignup, ISignupDTO } from './signupTypes';
import { getSignupQuery } from './signupQueries';

const getSignup = async (props: ISignupDTO): Promise<ISignup | null> => {
  const { data } = await apolloClientInstance().query<{
    getSignup: ISignup;
  }>({
    fetchPolicy: 'no-cache',
    query: getSignupQuery,
    variables: {
      name: props.name,
      email: props.email,
      password: props.password,
    },
  });

  return data.getSignup;
};

export const signupRepository = {
  getSignup,
};

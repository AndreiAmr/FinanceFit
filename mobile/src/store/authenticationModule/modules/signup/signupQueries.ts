import { gql } from '@apollo/client';

const getSignupQuery = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password)
  }
`;

export { getSignupQuery };

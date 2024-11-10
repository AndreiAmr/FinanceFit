import { gql } from '@apollo/client';

const getLoginQuery = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      data {
        id
        name
        email
      }
    }
  }
`;

export { getLoginQuery };

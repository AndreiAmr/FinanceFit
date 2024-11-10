import { gql } from 'graphql-tag';
import fs from 'fs';
import { ApolloServer } from 'apollo-server';
import path from 'path';
import resolvers from '../resolvers';
import { GenericError } from '../models/GenericError';

const schemaPath = path.join(__dirname, './schema.graphql');
const schemaContent = fs.readFileSync(schemaPath, 'utf-8');

const typeDefs = gql`
  ${schemaContent}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    console.log({ err });

    if (err.originalError instanceof GenericError) {
      return {
        message: err.originalError.message,
        title: err.originalError.title,
        firstButton: err.originalError.firstButton, // Inclui a informação personalizada
      };
    }
    return err;
  },
});

(async () => {
  const { url } = await server.listen();
  console.log(`🚀 Server is running on ${url} `);
})();

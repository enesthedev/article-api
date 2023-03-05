import { ApolloServer } from '@apollo/server';
import { schema } from '@transportation/graphql/schema';

export const server = new ApolloServer({ schema });
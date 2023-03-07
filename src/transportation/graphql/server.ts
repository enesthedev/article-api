import { ApolloServer } from '@apollo/server';
import { schema } from '@transportation/graphql/schema';
import { AppContext } from '@transportation/graphql/AppContext';

export const server = new ApolloServer<AppContext>({ schema });

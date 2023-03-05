import cors from 'cors';

import { Application, json } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

export interface IGraphQLIntegration {}

export class GraphQLIntegration implements IGraphQLIntegration {
  private readonly app: Application;

  private readonly server: ApolloServer;

  private constructor(app: Application, server: ApolloServer) {
    this.app = app;
    this.server = server;

    this.useExpressMiddleware();
  }

  private useExpressMiddleware() {
    this.app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(this.server));
  }

  public static async create(
    app: Application,
    apolloServer: ApolloServer
  ): Promise<GraphQLIntegration> {
    return new GraphQLIntegration(app, apolloServer);
  }
}

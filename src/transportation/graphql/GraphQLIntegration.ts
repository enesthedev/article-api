import cors from 'cors';

import { Application, json } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { Container } from 'inversify';
import { TYPES } from '@project/types';
import { ArticleService } from '@domain/article';
import { AppContext } from '@transportation/graphql/AppContext';

export interface IGraphQLIntegration {}

export class GraphQLIntegration implements IGraphQLIntegration {
  private readonly app: Application;

  private readonly server: ApolloServer<AppContext>;

  private constructor(app: Application, server: ApolloServer<AppContext>, container: Container) {
    this.app = app;
    this.server = server;

    this.useExpressMiddleware(container);
  }

  private useExpressMiddleware(container: Container) {
    this.app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(this.server, {
        context: async ({ req, res }) => ({
          articleService: container.get<ArticleService>(TYPES.ArticleService),
        }),
      })
    );
  }

  public static async create(
    app: Application,
    apolloServer: ApolloServer<AppContext>,
    container: Container
  ): Promise<GraphQLIntegration> {
    return new GraphQLIntegration(app, apolloServer, container);
  }
}

import express, { Application, Router } from 'express';

import { Container } from 'inversify';
import { AuthProvider, InversifyExpressServer, RoutingConfig } from 'inversify-express-utils';

export class HttpServer extends InversifyExpressServer {
  private constructor(
    container: Container,
    customRouter?: Router | null,
    routingConfig?: RoutingConfig | null,
    customApp?: Application | null,
    authProvider?: (new () => AuthProvider) | null,
    forceControllers?: boolean
  ) {
    super(container, customRouter, routingConfig, customApp, authProvider, forceControllers);

    this.setConfig(this.config);
  }

  private config(app: Application): void {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
  }

  public static create(
    container: Container,
    customRouter?: Router | null,
    routingConfig?: RoutingConfig | null,
    customApp?: Application | null,
    authProvider?: (new () => AuthProvider) | null,
    forceControllers?: boolean
  ): HttpServer {
    const server = new HttpServer(
      container,
      customRouter,
      routingConfig,
      customApp,
      authProvider,
      forceControllers
    );

    return server;
  }
}

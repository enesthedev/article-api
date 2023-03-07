import container from '@project/container';

import { HttpServer } from '@transportation/http';
import { server as apolloServer } from '@transportation/graphql/server';
import { GraphQLIntegration } from './transportation/graphql/GraphQLIntegration';

const httpServer = HttpServer.create(container);
const app = httpServer.build();

apolloServer
  .start()
  .then(() => GraphQLIntegration.create(app, apolloServer, container))
  .then(() =>
    app.listen(3000, () => {
      console.log('listening on http://localhost:3000');
    })
  )
  .catch((reason: string) => console.error(reason));

import container from '@project/container';

import { HttpServer } from '@transportation/http/server';

const server = HttpServer.create(container);
const app = server.build();

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});

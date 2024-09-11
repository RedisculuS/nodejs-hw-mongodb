import { initMongoConnection } from './db/initMongoConnections.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongoConnection();
  startServer();
};

bootstrap();

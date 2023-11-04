import './bootstrap/module-alias';
import './bootstrap/load-env';
import 'src/models/Coins';
import { db } from './connections/db';
import { stream } from './connections/stream';
import { handleMessage } from './handlers/message';
import { handleOpen } from './handlers/open';
import { ws } from './connections/websocket';
import { handleConnection } from './handlers/connection';

async function main() {
  await db.sync();

  ws.on('open', handleConnection);

  stream.on('open', handleOpen)
  stream.on('message', handleMessage);
}

main();

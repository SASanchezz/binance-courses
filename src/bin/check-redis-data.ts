import '../bootstrap/module-alias';
import { DATA_KEY } from 'src/utils/redis';
import { getRedis } from 'src/connections/redis';
import { logRedisData } from 'src/utils/my-logger';

const redisClient = getRedis();

async function main() {
  while (true) {
    const data = await redisClient.get(DATA_KEY);
    logRedisData(JSON.stringify(JSON.parse(data!), null, 2))
    //sleep 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3 * 1000));
  }
}

main();

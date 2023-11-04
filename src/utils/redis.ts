import { getRedLock, getRedis } from 'src/connections/redis';
import { CoinData } from 'src/types.ts/ticker-24hr';

const redlock = getRedLock();
const redisClient = getRedis();

export const DATA_KEY = 'myData'; // Key with data in Redis

export function saveDataToRedis(data: CoinData[]) {
  const resource = [`lock:${DATA_KEY}`]; // Resource to lock

  // Blocking before saving data to Redis
  redlock.acquire(resource, 2000) // Time to wait for blocking (2 seconds)
    .then((lock: any) => {
      // Save data to Redis
      redisClient.set(DATA_KEY, JSON.stringify(data));

      // Unlock resource
      lock.release()
      .catch((unlockError: any) => {
        console.error('Error on unlocking: ', unlockError);
      });

    }).catch((lockError: any) => {
      console.error('Error on blocking: ', lockError);
    });
}

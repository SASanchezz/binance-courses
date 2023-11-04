import Redlock from 'redlock';
import Redis from 'ioredis';
import * as redisConfig from 'src/config/redis.json';

export function getRedis() {
  let redisClient
  if (!redisClient) {
    redisClient = new Redis({
      host: redisConfig.host,
      port: redisConfig.port,
    });
    redisClient.on('error', err => console.log('Redis Client Error', err));
  }

  while (!redisClient) {
    console.log('Waiting for Redis connection...');
  }
  return redisClient;
}


export function getRedLock() {
  return new Redlock([getRedis()], {
    driftFactor: 0.01,  // Deviation factor to avoid clock drift
    retryCount: 3,      // Number of blocking attempts
    retryDelay: 200,    // Delay between lock attempts (in milliseconds)
    retryJitter: 200,   // Random delay between lock attempts (in milliseconds)
  });
}

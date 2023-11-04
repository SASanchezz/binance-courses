import { createWriteStream } from 'fs';

const prcoessLogFile = './logs/process.txt';
const redisLogFile = './logs/redis.txt';

export function logProcess(data: string) {
  const stream = createWriteStream(prcoessLogFile, { flags: 'a' });
  stream.write(`pid: ${process.pid}\ndata: ${data}\n`);
  stream.end();
}

export function logRedisData(data: string) {
  const stream = createWriteStream(redisLogFile, { flags: 'a' });
  stream.write(`data: ${data}\n\n`);
  stream.end();
}

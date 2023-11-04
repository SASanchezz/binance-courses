import { CoinData } from 'src/types.ts/ticker-24hr';
import { miniTickerArrToCoinData } from 'src/types.ts/mini-ticker';
import { logProcess } from 'src/utils/my-logger';
import { updateDataToMysql } from 'src/utils/mysql';
import { saveDataToRedis } from 'src/utils/redis';
import * as appConfig from 'src/config/app.json';

export async function handleMessage(rawData: string) {
  let data: CoinData[] = miniTickerArrToCoinData(JSON.parse(rawData))
  data = data.filter((coin: CoinData) => appConfig.watchedTickers.includes(coin.symbol));
  
  saveDataToRedis(data);
  updateDataToMysql(data);

  logProcess('Last record of first el.c: ' + data[0].lastPrice);
} 
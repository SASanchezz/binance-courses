import * as binance from 'src/config/binance.json';


export function getTickerSteamUrl(streamType: string) {
  const url = `${binance.stream_host}/${streamType}`;
  return url;
}

export function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

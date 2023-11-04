import { CoinData, Ticker24hr } from "./ticker-24hr";

export interface MiniTicker {
  e: string,
  E: number,
  s: string,
  c: string,
  o: string,
  h: string,
  l: string,
  v: string,
  q: string,
}

export type MiniTickerArr = MiniTicker[];

export function miniTickerArrToCoinData(miniTickerArr: MiniTickerArr): CoinData[] {
  return miniTickerArr.map((item: MiniTicker) => ({
    symbol: item.s,
    lastPrice: item.c,
  }));
}

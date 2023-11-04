export interface Ticker24hr {
  id: string,
  status: number,
  result: CoinData[],
  rateLimits: object,

  error: any,
}

export interface CoinData {
  symbol: string,
  lastPrice: string,
}

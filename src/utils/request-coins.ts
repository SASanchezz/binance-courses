import { METHOD_TYPE } from "src/constants/binance";
import { BinanceRequest } from "src/utils/binance-request";
import * as appConfig from "src/config/app.json";
import { ws } from "src/connections/websocket";


export async function requestCoins(id: string) {
  const binanceRequest = new BinanceRequest(
    ws,
    id,
    METHOD_TYPE.TICKER_24HR,
    {
      type: "MINI",
      symbols: appConfig.watchedTickers,
    }
  )
  
  binanceRequest.makeWsRequest();
}

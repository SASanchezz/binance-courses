import WebSocket from 'ws';
import { getTickerSteamUrl } from 'src/utils/utils';
import { STREAM_TYPE } from 'src/constants/binance';

export const stream = new WebSocket(getTickerSteamUrl(STREAM_TYPE.MINI_TICKERS));

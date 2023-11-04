import WebSocket from 'ws';
import * as binanceConfig from 'src/config/binance.json';

export const ws = new WebSocket(binanceConfig.api_host);

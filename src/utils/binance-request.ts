import { WebSocket } from "ws";

export class BinanceRequest {
  private id: string;
  private method: string;
  private params: any;
  private wsClient: WebSocket;

  constructor(wsClient: WebSocket, id: string, method: string, params: any) {
    this.wsClient = wsClient;
    this.id = id;
    this.method = method;
    this.params = params;
    // this.params.apiKey = process.env.BINANCE_API_KEY;
    // this.params.signature = this.getSignature();
  }

  public makeWsRequest() {
    const requestJson = this.getRequestJson();
    this.wsClient.send(requestJson);
  }

  public getRequestJson(): string {
    return JSON.stringify({
      id: this.id,
      method: this.method,
      params: this.params,
    });
  }

  private getSignature(): string {
    const params = this.params;
    const keys = Object.keys(params).sort();
    const signature = keys.map(key => `${key}=${params[key]}`).join('&');
    return signature;
  }
}

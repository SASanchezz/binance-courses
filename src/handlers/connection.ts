import { randomUUID } from "crypto";
import { ws } from "src/connections/websocket";
import { Ticker24hr } from "src/types.ts/ticker-24hr";
import { saveDataToMysql } from "src/utils/mysql";
import { requestCoins } from "src/utils/request-coins";

export async function handleConnection() {
  const id = randomUUID();
  requestCoins(id);

  ws.on('message', (message: string) => {
    const data: Ticker24hr = JSON.parse(message);
    if (data.id === id) {
      saveDataToMysql(data.result);
    }
    ws.close();
  });
}

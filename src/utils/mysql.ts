import { Coins } from 'src/models/Coins';
import { CoinData } from 'src/types.ts/ticker-24hr';


export async function saveDataToMysql(data: CoinData[]) {
  const availableCoins = (await Coins.findAll()).map(coin => coin.symbol);
  const coinsToAdd: any = data.filter(coin => !availableCoins.includes(coin.symbol));

  await Coins.bulkCreate(coinsToAdd);
}

export async function updateDataToMysql(data: CoinData[]) {
  // Place for investigating
  // Probably deleting and creating new data is better
  data.forEach(async (coin: CoinData) => {
    const { symbol, lastPrice } = coin;
    await Coins.update({ lastPrice }, { where: { symbol } });
  });
}

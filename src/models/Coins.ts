import { DataTypes, Model } from 'sequelize';
import { db as sequelize } from 'src/connections/db';
import { CoinData } from 'src/types.ts/ticker-24hr';


export class Coins extends Model implements CoinData {
  public symbol!: string;
  public lastPrice!: string;
}

Coins.init(
  {
    symbol: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    lastPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Coins',
    tableName: 'coins',
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    timestamps: false,
    underscored: false,
  },
);

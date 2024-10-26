import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface GameAttributes {
  id: number;
  api_id: number;
  title: string;
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
  public id!: number;
  public api_id!: number;
  public title!: string;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
  Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      api_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'games',
      timestamps: false,
    }
  );

  return Game;
}

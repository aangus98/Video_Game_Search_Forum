import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface CompletionTimeAttributes {
  id: number;
  user_id: number;
  game_id: number;
  completion_time: string;
}

interface CompletionTimeCreationAttributes extends Optional<CompletionTimeAttributes, 'id'> {}

export class CompletionTime extends Model<CompletionTimeAttributes, CompletionTimeCreationAttributes> implements CompletionTimeAttributes {
  public id!: number;
  public user_id!: number;
  public game_id!: number;
  public completion_time!: string;
}

export function CompletionTimeFactory(sequelize: Sequelize): typeof CompletionTime {
  CompletionTime.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      game_id: {
        type: DataTypes.INTEGER,
      },
      completion_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'completion_times',
      timestamps: false,
    }
  );

  return CompletionTime;
}

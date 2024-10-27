import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface RecommendationAttributes {
  id: number;
  user_id: number;
  game_id: number;
  recommended_game_id: number;
}

interface RecommendationCreationAttributes extends Optional<RecommendationAttributes, 'id'> {}

export class Recommendation extends Model<RecommendationAttributes, RecommendationCreationAttributes> implements RecommendationAttributes {
  public id!: number;
  public user_id!: number;
  public game_id!: number;
  public recommended_game_id!: number;
}

export function RecommendationFactory(sequelize: Sequelize): typeof Recommendation {
  Recommendation.init(
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
      recommended_game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'recommendations',
      timestamps: false,
    }
  );

  return Recommendation;
}

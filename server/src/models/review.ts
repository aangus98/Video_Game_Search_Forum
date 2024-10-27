import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface ReviewAttributes {
  id: number;
  user_id: number;
  game_id: number;
  content: string;
  score: number;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'id'> {}

export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
  public id!: number;
  public user_id!: number;
  public game_id!: number;
  public content!: string;
  public score!: number;
}

export function ReviewFactory(sequelize: Sequelize): typeof Review {
  Review.init(
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
      content: {
        type: DataTypes.TEXT,
      },
      score: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 10}
      },
    },
    {
      sequelize,
      tableName: 'reviews',
      timestamps: false,
    }
  );

  return Review;
}

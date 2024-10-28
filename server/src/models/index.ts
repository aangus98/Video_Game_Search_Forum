import { sequelize } from '../config/connection.js';
import { UserFactory } from './user.js';
import { GameFactory } from './game.js';
import { ReviewFactory } from './review.js';
import { CompletionTimeFactory } from './completionTime.js';
import { RecommendationFactory } from './recommendation.js';

const User = UserFactory(sequelize);
const Game = GameFactory(sequelize);
const Review = ReviewFactory(sequelize);
const CompletionTime = CompletionTimeFactory(sequelize);
const Recommendation = RecommendationFactory(sequelize);

User.hasMany(Review, {foreignKey: 'user_id', onDelete: 'CASCADE'});
User.hasMany(CompletionTime, {foreignKey: 'user_id', onDelete: 'CASCADE'});
User.hasMany(Recommendation, {foreignKey: 'user_id', onDelete: 'CASCADE'});

Game.hasMany(Review, {foreignKey: 'game_id', onDelete: 'CASCADE'});
Game.hasMany(CompletionTime, {foreignKey: 'game_id', onDelete: 'CASCADE'});
Game.hasMany(Recommendation, {foreignKey: 'game_id', onDelete: 'CASCADE'});

Review.belongsTo(User, {foreignKey: 'user_id'});
Review.belongsTo(Game, {foreignKey: 'game_id'});

CompletionTime.belongsTo(User, {foreignKey: 'user_id'});
CompletionTime.belongsTo(Game, {foreignKey: 'game_id'});

Recommendation.belongsTo(User, {foreignKey: 'user_id'});
Recommendation.belongsTo(Game, {foreignKey: 'game_id'});
Recommendation.belongsTo(Game, {foreignKey: 'recommended_game_id'});



export { User, Game, Review, CompletionTime, Recommendation };
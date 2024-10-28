import express from 'express';
import type { Request, Response } from 'express';
import { Recommendation, Game } from '../../models/index.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = express.Router();

//Create a new recommendation
router.post('/', authenticateToken, async (req: Request, res: Response) => {
    const {api_id, title, recommended_game_api_id, recommended_game_title} = req.body;
    try {
        if (!api_id || !title || !recommended_game_api_id || !recommended_game_title) {
            res.status(400).json({error: 'All fields required'});
            return;
        } else {
        const user_id = req.user.id;
        let game = await Game.findOne({where: {api_id}});
        if (!game) {
            game = await Game.create({api_id, title})
        }
        let recommendedGame = await Game.findOne({where: {api_id: recommended_game_api_id}});
        if (!recommendedGame) {
            recommendedGame = await Game.create({api_id: recommended_game_api_id, title: recommended_game_title});
        }
        const recommendation = await Recommendation.create({user_id, game_id: game.id, recommended_game_id: recommendedGame.id});
        res.status(201).json(recommendation);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get all recommendations for a game
router.get('/game/:game_id', async (req: Request, res: Response) => {
    try {
        const recommendations = await Recommendation.findAll({where: {game_id: req.params.game_id}});
        res.status(200).json(recommendations);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Delete a recommendation by ID
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const recommendation = await Recommendation.findByPk(req.params.id);
        if (!recommendation) {
            res.status(404).json({ error: 'Recommendation not found' });
            return;
        }
        if (recommendation.user_id !== req.user.id) {
            res.status(403).json({error: "You can't delete a post that's not yours."});
            return;
        }
        await recommendation.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { router as recommendationRouter };
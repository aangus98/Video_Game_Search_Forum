import express from 'express';
import type { Request, Response } from 'express';
import { Review, Game } from '../../models/index.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = express.Router();

//Create a new review
router.post('/', authenticateToken, async (req: Request, res: Response) => {
    const {api_id, title, content, score} = req.body;
    try {
        if (!api_id || !title|| !content || !score) {
            res.status(400).json({error: 'All fields required'});
            return;
        } else {
        const user_id = req.user.id;
        let game = await Game.findOne({where: {api_id}});
        if (!game) {
            game = await Game.create({api_id, title})
        }
        const review = await Review.create({user_id, game_id: game.id, content, score});
        res.status(201).json(review);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get all reviews for a game
router.get('/game/:game_id', async (req: Request, res: Response) => {
    try {
        const reviews = await Review.findAll({where: {game_id: req.params.game_id}});
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Delete a review by ID
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (!review) {
            res.status(404).json({ error: 'Review not found' });
            return;
        }
        if (review.user_id !== req.user.id) {
            res.status(403).json({error: "You can't delete a post that's not yours."});
            return;
        }
        await review.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { router as reviewRouter };
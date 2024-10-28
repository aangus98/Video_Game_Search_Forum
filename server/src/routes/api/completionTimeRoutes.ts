import express from 'express';
import type { Request, Response } from 'express';
import { CompletionTime, Game } from '../../models/index.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = express.Router();

//Create a new completion time entry
router.post('/', async (req: Request, res: Response) => {
    const {api_id, title, completionTime} = req.body;
    try {
        if (!api_id || !title || !completionTime) {
            res.status(400).json({error: 'All fields required'});
            return;
        } else {
        const user_id = req.user.id;
        let game = await Game.findOne({where: {api_id}});
        if (!game) {
            game = await Game.create({api_id, title})
        }
        const completionTimeEntry = await CompletionTime.create({user_id, game_id: game.id, completionTime});
        res.status(201).json(completionTimeEntry);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get all completion time entries for a game
router.get('/game/:game_id', async (req: Request, res: Response) => {
    try {
        const completionTime = await CompletionTime.findAll({where: {game_id: req.params.game_id}});
        res.status(200).json(completionTime);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Delete a completion time entry by ID
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const completionTime = await CompletionTime.findByPk(req.params.id);
        if (!completionTime) {
            res.status(404).json({ error: 'CompletionTime not found' });
            return;
        }
        if (completionTime.user_id !== req.user.id) {
            res.status(403).json({error: "You can't delete a post that's not yours."});
            return;
        }
        await completionTime.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { router as completionTimeRouter };
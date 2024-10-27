import express from 'express';
import type { Request, Response } from 'express';
import { Game } from '../../models/index.js';

const router = express.Router();

//Create a new game if it doesn't exist
router.post('/games', async (req: Request, res: Response) => {
    const {api_id, title} = req.body;
    try {
        let game = await Game.findOne({where: {api_id}});
        if (!game) {
            game = await Game.create({api_id, title});
            res.status(201).json(game);
        } else {
            res.status(200).json(game);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Fetch a single game by ID
router.get('/games/:id', async (req: Request, res: Response) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) {
            res.status(404).json({ error: 'Game not found' });
            return;
        }
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { router as gameRouter };
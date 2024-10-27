import { Router, type Request, type Response } from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
        res.status(401).json({ error: 'Invalid User/Password Combo' });
        return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        res.status(401).json({ error: 'Invalid User/Password Combo' });
        return;
    }

    const secretKey = process.env.JWT_SECRET || '';

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '2h' });
    res.json({ token });
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });   
        return;
        }
});

export default router;
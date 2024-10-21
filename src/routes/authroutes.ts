import { Router, type request, type response } from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: request, res: response) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    const secertKey = process.env.JWT_SECRET || '';

    const token = jwt.sign({ id: user.id }, secertKey, { expiresIn: '30m' });
    return res.json({ token });
};

const router = Router();

router.post('/login', login);

export default router;
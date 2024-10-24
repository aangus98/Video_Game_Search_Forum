/* import { Router, type Request, type Response } from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;


    try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ error: 'Invalid User/Password Combo' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({ error: 'Invalid User/Password Combo' });
    }

    const secertKey = process.env.JWT_SECRET || '';

    const token = jwt.sign({ id: user.id }, secertKey, { expiresIn: '30m' });
    return res.json({ token });
} catch (error) {
   console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
}

};

const router = Router();

export default router; */
import UserModel from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secret = 'test';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const oldUser = await UserModel.findOne({ email });
        if (!oldUser) { return res.status(404).json({ message: 'User does not exist!' }) }
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect) { res.status(400).json({ message: 'Wrong password' }) }
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '1h' });
        res.status(200).json({ token: token });
    } catch (err) {
        res.status(500).json({ error: error });
    }
}

export const register = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const oldUser = await UserModel.findOne({ email });
        if (oldUser) { return res.status(400).json({ message: 'User already exist!' }) }
        const hasPassword = await bcrypt.hash(password, 12);
        const result = await UserModel.create({
            name: `${firstName} ${lastName}`,
            email: email,
            password: hasPassword
        });
        res.status(201).json({ message: 'User created!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}
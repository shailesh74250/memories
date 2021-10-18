import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();
        res.status(200).json({ posts: posts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new PostMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
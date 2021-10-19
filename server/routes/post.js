import express from 'express';
import { getPosts, createPost, viewPost, deletePost, updatePost } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', viewPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

export default router;


import express from 'express';
import { getPosts, createPost, viewPost, deletePost, updatePost } from '../controllers/post.js';

const router = express.Router();

import auth from '../middleware/auth.js';

router.get('/', getPosts);
router.post('/', auth, createPost);
router.get('/:id', viewPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id', auth, updatePost);

export default router;


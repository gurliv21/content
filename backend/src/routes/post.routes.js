import express from 'express'
import { createPost,showPosts } from '../controllers/post.controller.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post("/create",auth ,createPost)
router.get("/",showPosts)


export default router
import express from "express";
import { getPost } from "../controllers/postController.js";

const router = express.Router();

router.get('/', getPost);

export default router;
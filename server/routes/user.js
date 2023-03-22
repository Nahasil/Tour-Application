import express from 'express';

const router=express.Router();

import { googleSignIn, signin, signup } from "../controllers/user.js";

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/googleSignIn',googleSignIn)
export default router;
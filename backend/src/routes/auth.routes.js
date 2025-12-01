import express from 'express'
import { singUp,login } from '../controllers/auth.controller.js'


const router = express.Router()

router.post("/signup",singUp)
router.post("/login",login)
export default router
import express, { Router } from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

//api/my/user --- pass request to my user controller 
router.post("/", MyUserController.createCurrentUser)


export default router;
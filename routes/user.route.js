import express from "express";
import { clerkWebHook } from "../controller/user.controller.js";

const router = express.Router();

router.post("/user/create", clerkWebHook);

export default router;

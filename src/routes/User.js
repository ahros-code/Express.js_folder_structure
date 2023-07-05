import express from "express";
const router = express.Router();
import userController from "../controllers/UserController.js";

// GET
router.get("/", userController.getAllUsers)
router.get("/:id", userController.getSingleUser)

// POST
router.post("/", userController.addUser)

// PUT
router.put("/:id", userController.updateUser)

// DELETE
router.delete("/:id", userController.deleteUser)

export default router;
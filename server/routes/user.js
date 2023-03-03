import express from "express";

import {
  deleteUser,
  createUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

// // CREATE

router.post("/", createUser);

// // UPDATE

router.put("/:id", updateUser);

// DELETE

router.delete("/:id", deleteUser);

// // GET(one specific)

router.get("/:id", getUser);

// // GET(all)

router.get("/", getUsers);

export default router;

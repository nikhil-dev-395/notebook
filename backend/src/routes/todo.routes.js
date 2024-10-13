// routes/todo.routes.js

import { Router } from "express";
// import isLoggedIn from "../middleware/isLoggedIn.js";
// import authenticateToken from "../middleware/auth.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import {
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo.controller.js";
const router = Router();

router.get("/protected", isLoggedIn, (req, res) => {
  // console.log(req.user.userId);

  res.send("hii this is protected");
});

// isLoggedIn - this middleware will help us to authenticate the user

router.post("/todo", isLoggedIn, createTodo);
router.delete("/todo/:todo_id", isLoggedIn, deleteTodo);
router.put("/todo/:todo_id", isLoggedIn, updateTodo);

export { router as todoRouter };

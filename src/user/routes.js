const { Router } = require("express");
const userRouter = Router();
const { createUser, deleteUser, findUser, updateUser } = require("./controllers");
const { hashPassword} = require("../middleware");

userRouter.post("/user", hashPassword, createUser);
// userRouter.post("/login", unHashPass, tokenLogin);
// userRouter.get("/user", tokenCheck, tokenLogin);
userRouter.delete("/:username", deleteUser);
userRouter.get("/user", findUser);
userRouter.patch("/:username", updateUser );

module.exports = userRouter;
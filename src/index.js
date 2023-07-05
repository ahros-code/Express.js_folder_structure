import express from "express";
import user from "./routes/User.js";

const app = express();

app.use(express.json());

app.use("/users", user)

app.listen(9000, () => console.log("Server started..."))
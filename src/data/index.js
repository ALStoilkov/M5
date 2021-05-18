import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const authorsRouter = express.Router();

const indexPath = fileURLToPath(import.meta.url);
const dirPath = dirname(indexPath);
const postsJSONPath = join(dirPath, "posts.json");

authorsRouter.get("/", (req, res) => {
  // read the file
  const postsAsABuffer = fs.readFileSync(postsJSONPath);
  // send response with posts
  const posts = JSON.parse(postsAsABuffer);
  //   console.log(posts);
  res.status(200).send(posts);
});
authorsRouter.get("/:id", (req, res) => {});
authorsRouter.post("/", (req, res) => {});
authorsRouter.put("/:id", (req, res) => {});
authorsRouter.delete("/:id", (req, res) => {});

export default authorsRouter;

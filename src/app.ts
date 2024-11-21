import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send("Hello World!");
});

export default app;

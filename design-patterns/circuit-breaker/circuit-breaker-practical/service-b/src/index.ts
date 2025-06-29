import express, { Request, Response } from "express";

const app = express();
const port = 3001;

app.get("/unstable", (req: Request, res: Response) => {
  const fail = Math.random() < 0.5;
  if (fail) {
    res.status(500).json({ error: "Simulated failure" });
  } else {
    res.json({ message: "Service B success!" });
  }
});

app.listen(port, () => {
  console.log(`Service B running on http://localhost:${port}`);
});

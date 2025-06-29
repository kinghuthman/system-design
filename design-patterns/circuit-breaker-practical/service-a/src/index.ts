import axios from "axios";

import express, { Request, Response } from "express";

import CircuitBreaker from "opossum";

const app = express();
const port = 3000;

// Remote call
async function callServiceB() {
  const response = await axios.get("http://service-b:3001/unstable");
  return response.data;
}

const breaker = new CircuitBreaker(callServiceB, {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 5000,
});

breaker.on("open", () => console.log("Circuit OPEN"));
breaker.on("halfOpen", () => console.log("Circuit HALF-OPEN"));
breaker.on("close", () => console.log("Circuit CLOSED"));

app.get("/call", async (_req: Request, res: Response) => {
  try {
    const data = await breaker.fire();
    res.json({ success: true, data });
  } catch (err) {
    res.status(503).json({ success: false, error: "Circuit breaker tripped" });
  }
});

app.listen(port, () => {
  console.log(`Service A running on http://localhost:${port}`);
});

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
  timeout: 3000, // if a call takes >3s, it's a failure
  errorThresholdPercentage: 50, // >50% failure rate trips the breaker
  resetTimeout: 5000, // Wait 5s before moving to half-open
});

// Tripped - >50 requests fail (no network call is made)
breaker.on("open", () => console.log("Circuit OPEN"));
/* Test Phase
 ** after the resetTimeout, the circuit breaker tries a single test request
 ** Succeeds -> circuit goes back to `Closed`
 ** Fails -> circuit goes back to `Open` and resets the timer
 */
breaker.on("halfOpen", () => console.log("Circuit HALF-OPEN"));
// Healthy - requests are allowed through
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

# Circuit Breaker Practical

## Steps

- Open docker
- then in terminal of root of circuit-breaker-practical
- run `docker-compose up --build`
- open browser or postman
- run GET(postman) http://localhost:3000/call

## What's going on?

- Service A (client): Makes HTTP calls to Service B. It uses the circuit breaker pattern via opposum to acoid repeatedly calling a failing service
- Service B (Server): Simulates a flaky downstream service. Randomly fails or succeeds to test Service A's resilience.
- Docker Compose: Runs both services in separate containers, let's them talk via Docker DNS.

## How to Test it

- Visit http://localhost:3000/call
- Refresh repeatedly
  - Sometimes it'll return Success
  - If Service B fails too often, the circuit opens and returns:
  ```{
  "success": false,
  "error": "Circuit breaker tripped"
  }
  ```
- After 5 seconds (reset timeout), circuit goes half-open and tries again.

## Why this matters?

### Protects Downstream Services

When a dependency is unhealthy, you avoid hammering it and making things worse.

### Improve User Experience

Failing quickly lets you show a cached response or a friendly message instead of a timeout spinner

### Prevents Cascading Failures

Keeps a single failing service from taking down the whole system

## Todo

- Add a fallback to cache or return a default when breaker is open

- Add metrics to track circuit breaker events (Grafana/Prometheus)

- Add alerting on breaker state transitions (especially "open")

- Customize failure detection logic (e.g., HTTP 500s vs timeouts)

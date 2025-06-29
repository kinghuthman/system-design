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

# Circuit Breaker pattern

The Circuit Breaker pattern helps handle faults that might take varying amounts of time to recover from when an application connects to a remote service or resource. A circuit breaker temporarily blocks access to a faulty service or resource. A circuit breaker temporarily blocks access to a faulty service after it detects failures. This action prevents repeated unsuccessful attempts so that the system can recover effectively. This pattern can improve the stability and resiliency of an application

## Context and problem

In a distributed environment, calls to remote resources and services can fail because of transient faults. Transient faults include overcommitted or temporarily unavailable resources, slow network connections, or time-outs. These faults typically correct themselves after a short period of time. To help manage these faults, you should design a cloud application to use a strategy, such as the [Retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry).

Unanticipated events can

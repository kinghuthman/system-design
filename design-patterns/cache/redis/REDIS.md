https://www.geeksforgeeks.org/system-design/redis-cache/#
https://www.ibm.com/think/topics/redis

# Redis

Stores data in memory rather than a hard drive which delivers unparalleled speed, performance and reliability.

## Differentiating Capabilities

### Redis Cache Sessions

- Redis stores data in the server's main memory rather than on a hard drive or solid state drives.

- This leads to significantly faster response times when performing reads and writes.

- It also ensures high availability and scalability of services and application workloads

### Redis Queues

Redis is able of queueing tasks faster than most web clients. Redis makes it easy to handle multi process task queueing with automated python written processes that run in the background for request/responses.

## Redis vs Memcached

Redis' use of data structures offers the ability to handle storing data in a serialized form.

## Key Features that make it Distributed

- Supports master-slave replication
- Cluster mdoe for horizontal scaling
- Data partitioning
- High availability

## Use Cases

- Session management
- Real-time analytics
- Queue management
- Distributed locking
- Rate limiting

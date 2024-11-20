# Overview

Essential is the first **declarative blockchain protocol**, implementing the declarative principles in a decentralized, permissionless system. The protocol is designed around the concept of **blocks as pure state mutations**.

State mutations are introduced as **solutions** provided by solvers. A **solver** could be:
- A third-party entity competing to find optimal solutions, or
- A centralized program (such as a server, front-end app, or wallet) providing solutions for a specific application.

In contrast to solutions in an imperative system, which consist of a sequence of ordered transactions, solutions in a declarative system are merely **lists of state mutations**.

### From Solutions to State

**Validation** is the process by which solutions become state:
- A solution is considered valid if it satisfies all the contracts whose state it mutates.
- Only valid solutions are then considered for inclusion in the next block.

### Inclusion and Bidding Mechanism

Inclusion in the next block happens via an out-of-protocol mechanism where **solvers bid** for inclusion with a solution aggregator (similar to a block builder). These **bids for inclusion** are expressed as **constraints on state**. The protocol itself, however, only concerns itself with the **validity of solutions**. Optimality is driven by **auction dynamics** at both the application and solution aggregation level.

In the following section, we will explore how contracts are structured to define conditions under which their state can be mutated.

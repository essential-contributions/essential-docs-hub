# Contracts

In Essential, state belongs to **contracts** that declare it, similar to other blockchains. However, unlike traditional imperative blockchain languages (e.g., Solidity), Essential uses a **declarative approach**. 

**Imperative Smart Contracts** typically:
- Take inputs and execute a sequence of operations.
- Update state as a side-effect of these operations.

In contrast, Essential’s declarative contracts achieve **state updates without execution**. Instead of executing steps, Essential starts with a proposed **atomic state mutation** (a set of new state values). It then substitutes these values into a contract to check their **validity**. This approach reverses the typical order seen in imperative contracts.

# Applications

In Essential, **User Data** combined with the flexibility of **Pint** allows users to create complex expressions of their preferences over multiple, potentially unrelated on-chain states. This is a significant shift from platforms like the EVM, where transactions need additional smart contracts to act on behalf of users to interact with multiple contracts atomically. Essential’s approach reduces **chain bloat** by only requiring fundamental application logic to be persistently deployed on-chain. This logic is both **modular and reusable**, enabling common interaction patterns to be deployed once and utilized by everyone.

## Time-Dependent Constraints

Applications in Essential can also define **time-dependent constraints**. For instance:
- A user wanting to rebalance a portfolio of tokens can express this logic in a contract.
- Alternatively, if a user wishes to **dollar-cost-average** from one token to another over time, this can be encoded in Pint. Solvers can gradually satisfy this requirement without the user’s ongoing input.

## Implicit Composability

The **declarative approach** in Essential brings an advantage through **implicit composability**. Unlike the imperative paradigm, where applications must explicitly implement each other's interfaces, the declarative model allows any two applications that **constrain the same state** to be implicitly composable. In this case, the **solver** provides the abstraction, bridging different applications without requiring them to be aware of each other’s interfaces.

## Efficient Computation and Verification

The **declarative design** also enables greater computational efficiency:
- In imperative systems, complex on-chain business logic can be costly, as the network needs to execute this computation.
- In Essential’s declarative design, the correctness of application logic is ensured through **solution validation** on-chain, while solvers are compensated for finding valid state updates.

This model allows solvers the freedom to **choose their optimization approaches**, enabling competition in solving business logic efficiently. Essential leverages the fact that some problems are **hard to compute but easy to verify**, enabling efficient and scalable application logic validation.
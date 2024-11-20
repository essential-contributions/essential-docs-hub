# Criterion 2: State Updates Without Execution

The second core property of declarative blockchains is that they achieve **state updates without execution**.

This is an emergent property of using [constraints](https://en.wikipedia.org/wiki/Constraint_programming):  
> “Constraints differ from the common primitives of imperative programming languages in that they do not specify a step or sequence of steps to execute, but rather the properties of a solution to be found.”


In declarative blockchains, **state updates are specified directly within a block**. These updates must then pass relevant predefined constraint checks to be considered valid. This contrasts with imperative blockchains, where transactions are included in a block and then executed to compute a new state.

## Executionless State Updates

Achieving state updates without execution is a significant breakthrough in blockchain protocol design. Previously, we discussed how [in-protocol execution (i.e., processing step-by-step instructions)](../declarative-vs-imperative/imperative-pitfalls/sub-optimal-outcomes.md) is a limiting factor for imperative blockchains.

The **“executionless” property** of declarative blockchains removes the need for the most costly aspects of general-purpose blockchains—execution and the consensus needed for it—without sacrificing functionality or verifiability. This approach even makes verification of state transitions trivial, thanks to the nature of constraint-based problems: they are **hard to compute but easy to verify**.

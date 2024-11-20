# Smart Contracts

**Pint** is a language for writing "smart contracts." If you are familiar with smart contract languages like Solidity, many elements of a Pint contract will feel familiar. However, at its core, Pint is fundamentally different from imperative smart contract languages. Writing smart contracts in Pint requires a different mindset for expressing the rules that the contract must enforce.

A **Pint contract** is a collection of **predicates**. Each predicate has:
- A **name**
- A **list of typed parameters**
- A **list of constraints**

Predicates in a smart contract define the various ways state can be mutated to accomplish specific tasks (e.g., a token transfer). 

A contract may also contain a **storage declaration** that lists all storage variables owned by the contract. This **contract storage** serves as the contract’s database, where persistent state is maintained.

<ExternalContent url="https://essential-contributions.github.io/pint/book/smart_contracts/index.html" selector="main" subSelector="h3#contract-structure" />
<ExternalContent url="https://essential-contributions.github.io/pint/book/smart_contracts/index.html" selector="main" subSelector="h3#contract-interfaces" />


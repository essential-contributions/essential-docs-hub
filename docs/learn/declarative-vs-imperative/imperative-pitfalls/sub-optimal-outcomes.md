# Sub-Optimal Outcomes

To justify the need for a new paradigm, we should examine the current state of blockchain architecture and its shortcomings. Consider the fundamental differences in how the two main programming paradigms handle instructions versus outcomes:

- **Imperative**: Always follow the instructions, regardless of the outcome.
- **Declarative**: Always produce a valid outcome, without the need for specific instructions.

In imperative systems, there is an inherent tension between the network and its users. From the network's perspective, the primary goal is achieving consensus over state. A straightforward way to ensure this is to agree on a common framework (e.g., a VM) for computing network state. In an imperative model, given an initial state and a set of transactions, any node can compute the next state based on predefined rules.

However, when considering why most people use blockchains, expressing interactions as instructions instead of outcomes is clunky and unintuitive. For users, the focus is on the outcome they desire, not the steps to achieve it—yet today’s blockchains aren’t designed with this user-centric perspective in mind.

[James Prestwich](https://prestwi.ch/declarative-smart-contracts-2/) summarizes this trade-off with imperative design:

> “[Imperative] smart contracts prevent us from knowing the outcome of a transaction before it is confirmed. Its state changes are unknown before the transaction is included in a block. By signing the transaction, the user has consented to whatever state changes the contract defines, without knowledge of the outcome. When users call a contract they entrust their funds to it with no guarantee of good behavior.

> "Given that the entire point of a blockchain is to create and update a state securely, smart contracts are intuitively problematic. Users deserve to know exactly what the transaction will do before they sign it. Anything else cedes partial control of user funds to miners or other users. It dilutes the permissions set on the shared state, which diminishes the usefulness of the chain.”

## Consequences of Imperative Architectures

This uncertainty creates negative consequences for users. Many users experience anxiety while refreshing an Etherscan page, waiting to see if a trade went through. At best, a failed transaction wastes gas fees. At worst, malicious smart contracts can go unnoticed until they’ve drained a user's funds.

<img src="/images/imperative-starter-pack.png" alt="Imperative Starter Pack">

The most common UX complaints about blockchains—uncertain outcomes, failed transactions, MEV (Miner Extractable Value), high slippage—are actually symptoms of the underlying imperative architecture.

But it doesn't have to be this way. Blockchains don't need to rely on in-protocol execution to achieve consensus over state.

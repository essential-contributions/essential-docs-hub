# Criterion 1: Constraints on State

Early intent projects output transactions that are settled via imperative execution, treating **intents as constraints on state transitions**. In declarative blockchains like Essential, however, intents are not constraints on the state transition function but rather **constraints on state itself**.
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<div style="border-left: 4px solid #017acd; padding: 10px; border-radius: 4px; margin: 10px 0;">
<i class="fas fa-info-circle"/>
Leveraging constraints on state is essential for declarative blockchains, as it allows developers and users to narrow down the solution space to acceptable and optimal outcomes.
</div>

## Constraint Programming

Essential’s architecture uses [**constraint programming**](https://en.wikipedia.org/wiki/Constraint_programming), a subset of the declarative programming paradigm, to enforce constraints on state.

Constraint programming is highly ergonomic for expressing and enforcing outcomes within state machines. It’s especially effective for solving complex combinatorial problems, such as finding a series of optimal state transitions within an intricate on-chain solution space—essentially, **solving intents**.

When a user submits an intent, they are declaratively specifying a set of variables and constraints on those variables, narrowing down the feasible solution space.

### Constraint Optimization: Maximizing Utility

The constraint-based model allows users to specify an **objective utility function** that represents their preferences and preference ordering.

**Solvers** then attempt to solve a [constraint optimization problem](https://en.wikipedia.org/wiki/Constrained_optimization?ref=blog.essential.builders), maximizing the user’s utility (as defined by the objective function within the user’s intent). This means solvers are not merely trying to satisfy the user’s intent but are also aiming to maximize the user’s utility according to their objective function.

Put simply, solvers compete to answer: Given state X and objective function F, what new state Y maximizes the user’s satisfaction? The solution that yields the highest satisfaction becomes the winning solution.

## Constraints on State: Key Takeaway

Because declarative blockchains allow users to directly constrain state, **no state transition can be included if it does not achieve the user’s intended outcome**. Unlike imperative blockchains, declarative blockchains eliminate the risk of state drift causing unintended outcomes or failed transactions.

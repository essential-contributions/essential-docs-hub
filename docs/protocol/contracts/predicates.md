# Predicates

In Essential, **predicates** define the conditions under which a contract’s state can be mutated. A predicate is essentially a **pathway to validity** for a contract. For a state mutation to be valid, **one of the contract’s predicates must be satisfied**.

Predicates consist of **one or more constraints** and operate differently from functions. They aren’t "called" like functions; instead, they serve as **targets for validity**. A **solution** must explicitly identify the predicate it aims to satisfy for the mutation to occur. 

Each predicate and the contracts containing them are **content-addressed**, meaning they’re uniquely identified by their content, ensuring the integrity of each validation pathway.


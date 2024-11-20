# Solutions

A **solution** is the combination of:
1. **User Data** (the fixed constraints set by the user) and 
2. **Solver-determined values** (for the unconstrained parameters).

By defining user data, the user effectively **partially constrains** the solution, describing what they want to happen in broad terms while leaving room for optimization by the solver. 

In some cases, users may choose to **fully constrain** the solution within their user data, making only a single outcome valid. However, more commonly, they will leave some parameters unconstrained to allow solvers to fill in values. This enables flexibility, such as leaving room for **solver fees** or other dynamic conditions.

The **solver’s role** is to determine the values of these unconstrained decision variables to create a solution that satisfies all constraints (both the user's and the contract's), thereby enabling **valid and optimized state changes**.
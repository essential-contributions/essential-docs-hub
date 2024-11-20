### **Constraints**

**Constraints** are the foundational components of predicates. They are simply **boolean expressions** that need to evaluate to **True** for the predicate they’re part of to be satisfied.

Constraints can be used flexibly:
- A contract may define constraints directly for its state mutation.
- Alternatively, it can apply constraints to state mutations on other contracts, requiring **both sets of constraints** to be satisfied.

This flexibility enables **efficient code reuse**. For example, constraints governing a **token swap** can be deployed once and used across multiple applications. Additionally, users can apply **User Data** to further restrict the solution space of a predicate, which is covered in-depth in the chapter on **User Data and Solutions**.

```pint
predicate test(
    foo: int, 
    bar: bool, 
    baz: b256, 
) {
    constraint foo * foo <= 1024;

    // other constraints
}

# User Data

In Essential, **User Data** is the means by which users interact with the blockchain’s state. This is where the user **expresses their intent** for state changes. The term **user data** refers specifically to the parts of a solution that are **fully constrained by the user**.

For example, consider a token swap:
- A user with a certain amount of Token A wants to swap it for Token B.
- They can constrain specific parameters: the addresses of Token A and B, and the amount of Token A they wish to exchange.
- However, they may leave the amount of Token B to receive unconstrained, allowing the **solver** to maximize it based on market conditions.

User data is **signed by the user**, linking it directly to authentication. If any value in the user data (e.g., transfer amount, "from" or "to" addresses) is altered, the signature becomes invalid, thereby **ensuring data integrity**.


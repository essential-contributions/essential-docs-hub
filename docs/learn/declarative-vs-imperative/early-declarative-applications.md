# Early Declarative Applications: "Intents"

> If the imperative paradigm imposes so many limitations on users, developers, and networks, why aren’t we using a different approach?

This question has been asked before. As early as 2018, influential members of the web3 community began [proposing](https://medium.com/summa-technology/declarative-smart-contracts-4edaf7ec2e30) the declarative approach as an alternative. Although discussed sporadically over the years, the concept only gained significant traction in early 2023 with the introduction of the primitive known as **“intents.”**

## Intents: A Declarative Primitive

While the term has evolved, the core principle of intents is that they allow users to sign over their intended interaction in terms of **outcomes** (declarative) instead of **instructions** (imperative).

<script setup>
import Tweet from "vue-tweet";
</script>

<div style="display: flex;  solid #ddd; border-radius: 12px;  overflow: hidden; max-width: 500px; margin-left: auto; margin-right: auto; padding: 0; background-color: #fff;">

   <div style="width: 100%; margin-left: 10px; margin-right: 10px; padding: 0; line-height: 0; background-color: #fff;">
       <Tweet tweet-url="https://x.com/CannnGurel/status/1663292583550803969" />
   </div>

</div>


Unlike transactions, which pre-define how and where an on-chain state transition will occur, **intents are “journey-agnostic”**. As long as the desired outcome is reached according to the user’s rules, the pathway to that outcome is inconsequential.

## The Impact of Intents

By adopting declarative principles, the intent primitive promises to enhance user experience and outcomes significantly. Although still in its early stages, the concept has already been applied successfully across several areas, including swaps and bridging. This shift is evident in the numbers; over **25% of Ethereum’s order flow now originates from intent-based projects**.

<img src="/images/eden-network.png" alt="Outcome Bottleneck">

>In November 2023, nearly **30% of Ethereum's order flow** was managed by one of the top three intent-based OFA protocols (source: Eden Network).

## Limitations of Early Intent Implementations

The shift toward declarative ideals is promising. However, a significant flaw exists in early production applications that leverage intents. These applications conceptually enable users to express outcomes rather than instructions. Yet, in practice, they fail to guarantee these outcomes, contradicting their declarative approach.

These projects often **outsource transaction creation to third parties** (solvers) who attempt to approximate the user’s desired outcome. The actual fulfillment of those outcomes occurs through a lossy conversion back to an imperative format (i.e., a transaction), executed on an imperative state machine.

<img src="/images/order-flow-chart.png" alt="Orderflow Chart">

>The above diagram illustrates the current state of intent projects; they simply add extra steps to the already crowded transaction supply chain (source: orderflow.art).

Despite moving toward a declarative approach, these early intent projects remain limited by their reliance on imperative blockchain frameworks (i.e., the need to settle on existing imperative chains) to fulfill users’ intended outcomes.

They fail to fully embrace the declarative paradigm, reverting to imperative principles when it comes to actually incorporating user outcomes as new state.

## The Next Step: Fully Declarative

Declarative principles hold significant promise for improving the way we build, use, and interact with blockchains. Rather than applying them only to the pre-transaction stage, we should consider implementing them all the way down to the state machine level.

To achieve this, we introduce a new concept: the **declarative blockchain**.

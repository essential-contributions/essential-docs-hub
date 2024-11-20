<script setup>
import Tweet from "vue-tweet";
</script>


# Execution Bottleneck

In addition to poor UX and sub-optimal outcomes, relying on an imperative, execution-based model leads to market inefficiencies and rent-seeking behavior.

## The Promise of Modular Scalability: Unfulfilled?

The modular blockchain paradigm promised improved scalability by decoupling execution from other components of the blockchain stack and outsourcing it to specialized layers. These layers were expected to optimize for fast, scalable execution without compromising decentralization. By enabling proofs on the underlying Layer 1 (L1), they could outsource security to the parent chain while operating with lower security guarantees on the execution layer itself.

Many anticipated that Layer 2 (L2) fees would become negligible as consensus and data availability (DA) layers evolved to offer cheap blobspace. The expectation was that execution would become the bottleneck, driving innovation toward faster, parallel execution models to scale throughput.

However, this narrative hasn’t played out as expected. In reality, demand for outcomes far exceeds demand for execution. The imperative approach conflates the two, when in fact, outcomes are the real bottleneck.

## The Outcome Bottleneck

Sequencers on Layer 2s create artificial scarcity around execution, converting demand for an asset into demand for priority ordering, thereby extracting value from asset holders. For example, if a specific outcome (e.g., buying Asset A at Price P) has limited availability, demand can easily outpace supply, no matter how much execution capacity an L2 provides.

<img src="/images/eric-wall.png" alt="Outcome Bottleneck">

> _Source: Eric Wall_

In an efficient market, excess demand would lead to a price adjustment favoring the supplier. However, on imperative execution layers, sequencers hold monopolistic control over supply and demand allocation. With the power to decide transaction inclusion and ordering, they can extract value that would otherwise benefit sellers.

Instead of charging fees that align with their actual costs (i.e., the cost of blobspace and computation), sequencers can impose arbitrarily high fees due to their intermediary position. This results in worse outcomes for users and discourages economic activity.

For a deeper illustration of this phenomenon, check out this thread:

<div style="display: flex;  solid #ddd; border-radius: 12px;  overflow: hidden; max-width: 500px; margin-left: auto; margin-right: auto; padding: 0; background-color: #fff;">

   <div style="width: 100%; margin-left: 10px; margin-right: 10px; padding: 0; line-height: 0; background-color: #fff;">
       <Tweet tweet-url="https://x.com/ercwl/status/1771147452969636175" />
   </div>

</div>






## The Need for Outcome-Centric Systems

The imperative approach values demand for execution over demand for the results of that execution—i.e. outcomes. This undermines the promise of modular scalability. Instead, we need a system that optimizes for outcomes.
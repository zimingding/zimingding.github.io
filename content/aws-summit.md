---
title: "AWS Summit Sydney 2026"
date: 2026-06-06
description: "What I Learned at AWS Summit Sydney 2026"
---

## Introduction

I attended AWS Summit Sydney on 13th - 14th May 2026. Although AI dominated much of the conference, three topics stood out to me: invisible engineering, reading research papers effectively, and the complexity of modern core banking systems.

### Invisible Engineering

Amazon CTO Werner's talk was the most satisfying session for me. As a software engineer I remain curious about how systems work under the hood. The talk covered impossible engineering challenges such as scaling relational database that led to DynamoDB, scaling virtualization that invented Nitro and Firecracker, synchronizing clocks across distributed systems, and lastly improving AI accuracy through automated reasoning.

#### DynamoDB

My understanding is that DynamoDB is a distributed key-value store. Many modern applications don't require complex relational features such as foreign keys or many-to-many relationships. Instead, a simple key and document structure is sufficient. The technical challenges include load balancing, consistent hashing, unique ID generation and the trade-offs described by the CAP theorem.

#### Nitro and Firecracker

This is probably the topic I understood the least, and one I plan to explore further. My current understanding is Nitro and Firecracker enabled AWS to scale EC2 and serverless workloads efficiently.

#### Clock Synchronization

In a distributed system how do we know which action __actually__ happened first if each machine has its own clock? Clock synchronization is a fundamental problem in distributed systems and another topic I plan to explore further.

#### Automated Reasoning

It seems to me that the goal is to translate certain problems into a mathematical models that can be formally verified. For example, access policy can be translated into a mathematical notation and then verified automatically.

### How to Read Research Paper

The speaker shared techniques such as first skimming the sections of a paper, then examining graphs and formulas before reading the details. It's less about practical guidance on how to read papers and more about inspiring me to read fundamental computer scientist papers. For example, a natural follow-up would be the DynamoDB paper, the Nitro and Firecracker paper, and papers on clock synchronization.

### Migrate Bank's Core Banking System to AWS

The migration itself was impressive, but what intrigued me even more was the complexity of the core banking system. How does it integrate with everyday banking services while supporting peak volumes of 4,500 payments per second?

### Follow-up Topics

The summit inspired me to explore more areas. These are some topics I plan to explore in future posts:
- Understanding DynamoDB Paper
- Nitro and Firecracker architecture
- Why time is difficult in distributed systems
- Automated reasoning and formal verification
- How modern core banking systems are designed
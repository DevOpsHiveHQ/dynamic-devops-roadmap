---
title: Getting Started
sidebar_position: 2
description: How to start with the Dynamic DevOps Roadmap
image: /img/dynamic-devops-roadmap-flow.png
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DetailedIndex from './_detailed-index.mdx';
import QuickIndex from './_quick-index.json';

<p align="center">
  <img alt="Dynamic DevOps Roadmap Flow" border="0" src="/img/dynamic-devops-roadmap-flow.png" />
</p>

## Before you start

Here is a pre-start checklist:

- 📃 <a target="_blank" href="../faq/">Read the frequently asked questions page</a>, it has many valuable information (**really, do it!**).
- ⭐ <a target="_blank" href="https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap">Star the project repo</a> on GitHub for better visibility.
- ✉️ <a target="_blank" href="https://newsletter.devopsroadmap.io/subscribe">Subscribe to the newsletter</a> for the project community activities, which include mentorship, job posting, online meetings, workshops, career tips and tricks, and more.
- 🌐 <a target="_blank" href="https://t.me/DevOpsHive/985">Join the Telegram group</a> for interactive communication.

## How to use this roadmap?

This roadmap is `polymorphic`, which means it's designed to work in different modes, depending on how fast you want to go.

<Tabs>
  <TabItem value="self-paced-roadmap" label="Self-Paced Roadmap" default>
    This mode is the default and is available for everyone in this repo. In this mode, you are not expected to have DevOps experience, and you want to go from zero to hero, transforming your knowledge to land your first job as a DevOps Engineer.

    How to process:

    - Read each module in the roadmap in the same order.
    - In each module, you will find two sections:
      - `What you need to know`: It emphasizes the most important points and areas you should know about as a DevOps Engineer.
      - `Resources`: It provides some learning resources, but you are free to learn from any other resources.
    - In this mode, you manage all your learning plans by yourself, and we highly recommend asking a Senior DevOps Engineer (a friend or someone from the community) to review your plans and progress.
  </TabItem>

  <TabItem value="hands-on-project" label="Hands-on Project">
    In this mode, you already have some experience with DevOps (usually between 1-2 years of work experience). Still, you want to further your skills with a real hands-on industry-grad project to learn DevOps pragmatically. This mode is also available to everyone in this repo.

    The project follows the `Learning by Doing` method (aka `Problem-based Learning`), which is done in iterative phases. In this method, you learn as you go and cover the whole DevOps cycle.

    How to process:

    - [Go to the HiveBox hands-on project](../projects/hivebox).
    - Read the intro of the project and the goals of it.
    - Follow and implement the requests of each phase in the same order.
    - Each stage builds on the previous stage (the phases are continued, not separated).

    :::note
    Each phase of this project is tackled gradually as part of the roadmap modules. But it's also **standalone**, and you can work on it if you have the required knowledge for each phase.
    :::
  </TabItem>

  <TabItem value="mentorship-program" label="Mentorship Program">
    This mode covers the previous two modes (that means it could be only for the project or the whole roadmap) but with support from a `mentor`!

    A plus point in the mentorship is that you will get access to the roadmap board, where you can utilize Agile methodologies like Epics and Kanban to implement the plan. This will incorporate real-world scenarios and best practices, which you will use in a real job when working in an Agile environment.
  </TabItem>
</Tabs>


## Study Plan

<details>
  To be added.
</details>


## Roadmap Index

Visit [HiveBox Project](../projects/hivebox/) if interested in the DevOps hands-on project **only**. Continue if you want the full roadmap.

<Tabs queryString="index">
  <TabItem value="quick" label="Quick Index" default>
    <DocCardList items={QuickIndex} />
  </TabItem>
  <TabItem value="detailed" label="Detailed Index">
    <DetailedIndex />
  </TabItem>
</Tabs>

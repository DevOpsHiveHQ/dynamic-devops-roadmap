---
title: "Module 1: Welcome to the DevOps World"
sidebar_label: "1. Welcome to the DevOps World"
description: "An introduction to the DevOps paradigm and the focus areas. Also, the relationship between DevOps, DevSecOps, and Agile in light of the Software Development Life Cycle (SDLC), in the end, is the initial phase of the HiveBox project."
image: /img/devops-methodology-pillars-preview.png
toc_max_heading_level: 2
---

import Quiz from '@site/src/components/Quiz';
import QuizData from './module-01-quiz.json';

[🗂 Back to the Roadmap Index](../../getting-started#roadmap-index)

<p align="center">
  <img class="module-overview-image" alt="Module Overview" border="0" src={require('./module-01-overview.png').default} />
</p>

## Module Overview

- Introduction to the DevOps paradigm and the focus areas.
- Relationship between DevOps, DevSecOps, and Agile in light of the Software Development Life Cycle (SDLC).
- Implement the progressive hands-on project, HiveBox phase 1.
- Focus areas: Software Production (50%), DevOps Methodology (50%).

## 1.1 Foreword - What and Why DevOps?

<img title="DevOps Methodology Pillars" alt="DevOps Methodology Pillars" class="img-right" align="right" width="40%" src="/img/devops-methodology-pillars.png"></img>

DevOps methodology is a set of `Practices`, `Tools`, `Culture`, and, most importantly, `Mindset` aiming to improve collaboration and communication between software development (Dev) and operations (Ops) teams. It seeks to dismantle the conventional operational silos. It promotes a collaborative, automated, and sustainable culture, which enhances the efficiency of the whole software development lifecycle (starting from planning, coding, testing, deployment, and operations).

In conclusion, adopting DevOps enhances collaboration between teams, enhances feedback loops, ensures faster time to market, improves quality, increases reliability and stability, increases cost efficiency, and, first and foremost, aligns the tech goals with the business objectives.

### What you need to know {#11-what-you-need-to-know}

- In the Stone Age, the Software Development Life Cycle was linear. That means, in short, developers wrote the code and then sent it to system admins to run it.
- Usually, the code doesn't work as expected, and then a loop of `throwing code over a different fence` starts, and the dev and ops teams blame each other.
- Hence, there was a need for a different process where both parts of Dev and Ops work together as early as possible.
- It's also important to know that DevOps has many [implementations and topologies](https://web.devopstopologies.com/), and that's why it's hard to land your first job as a DevOps Engineer (because that could mean many things! Sometimes that title makes sense, and some other times it's misleading!).
- Finally, just remember that DevOps is not about Dev doing Ops work or vice versa; it's actually a `paradigm shift` (i.e., you need to think differently).

:::tip
Some topics in this module may seem new or theoretical, but don't worry! Keep reading and learning about those topics, and you will see them in action in this roadmap.
:::

### Resources {#11-resources}

- [What is DevOps? - GitLab](https://about.gitlab.com/topics/devops/): A good starting point for an overview of the technical aspects of the DevOps.
- [State of DevOps Report 2023](https://services.google.com/fh/files/misc/2023_final_report_sodr.pdf): A detailed report about DevOps in 2023 by DevOps Research and Assessment (DORA) which covers many aspects of DevOps in real-world like organizational performance, team performance, and employee well-being. You don't really need to read the whole report as a fresh DevOps engineer, but it's good to understand all aspects of DevOps! It's not just about technology!
- [DevOps is not just a culture, and it is also a role - Ahmed AbouZaid](https://tech.aabouzaid.com/2020/05/devops-is-not-just-a-culture-and-it-is-also-a-role.html): A blog post explains why "DevOps is a culture, not a role" became actually a cliché, and it doesn't stand in front of the reality.

## 1.2 Software Production - Software Development Life Cycle

<img class="img-right" align="right" width="25%" src="/img/topics/software-production.png"></img>

The Software Development Life Cycle (SDLC) is a process or set of phases that guide the development of software. It covers the whole process of making the software which includes planning, designing, development, testing, deploying, and maintaining software systems.

### What you need to know {#12-what-you-need-to-know}

- There are many factors and drivers of software production, but the most common ones are the "Iron Triangle" or "Triple Constraint," which are `Time`, `Scope`, and `Cost`. Those play a key role in software project management.
- There are different SDLC models, like Waterfall, Agile, Spiral, and iterative models. Each one works differently to achieve the project goals. For example, in the past, the Waterfall model was common, which followed a linear sequence. Nowadays, Agile is more popular, which emphasizes iterative and incremental development with a focus on collaboration and flexibility.
- Apart from the model, all of them will have some core phases such as planning, designing, developing, testing, deploying, and maintaining.
- As a DevOps engineer, you need to understand the different kinds of SDLCs so you are able to enhance and optimize the process from the early beginning (proactive, not reactive).
- In short, you need a basic knowledge of software project management, especially Agile software product/project management.

### Resources {#12-resources}

- [The Software Development Life Cycle (SDLC) - The Product Manager](https://theproductmanager.com/topics/software-development-life-cycle/): A great resource that covers the main phases and common models of SDLC.
- [Introduction to Software Product Management - Coursera](https://www.coursera.org/learn/introduction-to-software-product-management?specialization=product-management): 4 course that covers the foundation of software production.

## 1.3 Software Production - Agile Software Development

<p align="center">
  <img class="section-cover-image" title="Different Types of Quality Models" alt="Shif-Left and Shfit-Right Quality Models" border="0" width="90%" src="/img/quality-models.png"/>
</p>

### What you need to know {#13-what-you-need-to-know}

- Agile methodologies are among the most common practices in modern software production. They can be considered the default mode, but remember, there is no silver bullet!
- As mentioned in the previous section, Agile is, at its core, `iterative`. This means it works in phases incrementally to achieve goals instead of linearly (exactly like this roadmap!).
- There are many implementations of frameworks for Agile methodologies like Scrum, Kanban, and Extreme Programming (XP). And often, new frameworks emerge from the original ones, like [Scrumban](https://teamhood.com/agile-resources/what-is-scrumban/) (which is a mix between Scrum and Kanban).
- The most important point here is to break down work into bite-size pieces; however, at the same time, avoid [Scope Creep](https://www.pmi.org/learning/library/top-five-causes-scope-creep-6675)! In short: **Make it work, then make it right, then make it fast!**
- Shift-Left and Shift-Right are two important quality models, **both are complementary, not contradictory!**
  - **Shift-Left:** Refers to early detection and prevention of issues. The tests are done as early as possible in the SDLC. Different activity types (like unit, integration, and end-to-end testing) and quality checks are done before going to production (releasing or deployment), which are made in a "continuous" manner.
  - **Shift-Right:** Refers to late activities in the SDLC after going to production (releasing or deployment). Activities such as A/B testing and runtime security checks are done during this phase, which have more value at the end of the funnel.

### Resources {#13-resources}

- [What Is Agile Product Management - The Product Manager](https://theproductmanager.com/topics/agile-product-management/)
- [Software Processes and Agile Practices - Coursera](https://www.coursera.org/learn/software-processes-and-agile-practices?specialization=product-management): 8 hours course that covers the fundamentals of Agile software development and management practices.
- [Is the Agile Manifesto still a thing? - Atlassian](https://www.atlassian.com/agile/manifesto): This post covers how Agile evolved over time and the changes that happened since the release of the Agile Manifesto (originally published in February 2001).
- [Shift left vs Shift right: When to use which? - BrowserStack](https://www.browserstack.com/guide/shift-left-vs-shift-right)

## 1.4 Software Production - Change Management and Golden Triangle

### What you need to know {#14-what-you-need-to-know}

<img title="Golden Triangle" alt="Golden Triangle" class="img-right" align="right" width="40%" src="/img/golden-triangle-ppt.png"></img>

- Software production is all about "change"! When, where, and why ... or in other words, it's about "Change Management".
- Every new feature done by developers includes a risk! And it should be calculated and mitigated.
- Most of the time, changes affect the main 3 component of any organization which `People, Process, and Technology`. If the change doesn't consider those 3 elements, it will probably be ineffective! So DevOps is not only about technology!
- With any change, there is always a "deterioration" of something related to that change (that could be actually anything! Velocity, efficiency, etc.), which's known as `J-Curve`.
- Using the MVP (Minimum Viable Product) mindset, one of the core Agile methodologies, helps you manage and mitigate change risks.
- So, your role as a DevOps engineer who links two core areas of software production (Dev and Ops) requires you to have some knowledge of change management.

### Resources {#14-resources}

- [Everything You Need to Know about the People, Process, Technology Framework - Smartsheet](https://www.smartsheet.com/content/people-process-technology): A pretty good overview of how any change touches the main elements of the organization.
- [10 tips for effective change management in Agile - TechTarget](https://www.techtarget.com/searchsoftwarequality/tip/Six-tips-for-successful-change-management-in-an-Agile-environment): Some essential topics to cover when doing a change.
- [DevOps, J-Curve, and change management - Ahmed AbouZaid](https://tech.aabouzaid.com/2019/05/devops-and-change-management-agile.html): A blog post shows how change management is important in the DevOps world.

## 1.5 DevOps Methodology - DevOps and DevSecOps Core Pillars

<img class="img-right" align="right" width="25%" src="/img/topics/devops-methodology.png"></img>

### What you need to know {#15-what-you-need-to-know}

- DevOps is a methodology with an ultimate goal to enhance the software production.
- Because DevOps is a methodology, it actually has many implementations, so always think of DevOps as Shawarma/Döner/Gyros! It comes in many different types and shapes!
- However, there are a couple of DevOps pillars and principles.
- **DevOps key pillars:**
  - **Practices** (SCM, IaC, CI/CD, peer review, etc.).
  - **Tools** (modern tools used in practices like Git, Jenkins, Kubernetes, etc.).
  - **Culture** (make sure to clearly define DevOps goals at a high level, like the organization or department).
  - **Mindset** (positive attitude, fixing the right problems, focusing on the solution, not on the problem, no untracked changes, avoiding heroism, etc.).
- **DevOps key principles:**
  - **Automation of the software development lifecycle** (yet, automation is not an end in itself, it is a means to an end).
  - **Collaboration and communication** (communication is always the key, not just between the dev and ops teams but throughout the SDLC).
  - **Continuous improvement and waste minimization** (working in iterative and MVP style, no big bangs).
  - **Focus on user needs with short feedback loops** (technical enhancements without business impact are meaningless most of the time).
- What about `DevSecOps`? Software supply chain security has been one of the hot topics because of the continued attacks and exploits in the last few years. So, having a proper security practice is not a luxury anymore!
- However, DevOps is not just about Dev and Ops; It implicitly has in-between all other parts of the software production like security, testing, QA, data (science/engineering), etc. Otherwise, it will be something like `DevSecQADataMLOps` (you actually can add anything here).
- So, in this roadmap, we will treat DevOps as DevSecOps; security is embedded by default.

### Resources {#15-resources}

- [What is DevOps? - GitLab](https://about.gitlab.com/topics/devops/): This article covers the aspects of DevOps like principles, phases, and benefits.
- [DevOps is not just a culture, and it is also a role - Ahmed AbouZaid](https://tech.aabouzaid.com/2020/05/devops-is-not-just-a-culture-and-it-is-also-a-role.html): A blog post explains why "DevOps is a culture, not a role" became actually a cliché, and it doesn't stand in front of the reality.
- [About Open Source Security Foundation - OpenSSF](https://openssf.org/about/): A good place to start reading about security by design and security by default and to learn more about OpenSSF.

## 1.6 DevOps Methodology - DevOps, Cloud, Platform Engineer, and SRE

<p align="center">
  <img class="section-cover-image" title="DevOps Implementations" alt="DevOps Implementations" border="0" width="90%" src="/img/devops-implementations.png"/>
</p>

### What you need to know {#16-what-you-need-to-know}

- Maybe the title "DevOps Engineer" is not the most accurate title in the software industry, that's because it could mean many things.
- The different implementations and topologies of DevOps led to different DevOps Engineer criteria, which vary between companies and industries.
- So don't panic when you see two DevOps job descriptions that are not similar (yet, don't mix it with the fake DevOps role, which is just a sysadmin with DevOps label).
- There are also a couple of roles related to `DevOps Engineer`, but they mostly share at **least 90%** of the same skill set.
  - **DevOps Engineer:** Collaborating with development and operations teams to improve the software development and deployment process (main focus area: release process).
  - **Site Reliability Engineer (SRE):** Ensuring the reliability, availability, and performance of software systems (main focus area: service quality).
  - **Cloud Engineer:** Designing, implementing, and managing cloud infrastructure and services (main focus area: modern infrastructure management).
  - **Platform Engineer:** Building and maintaining platforms that support the development and deployment of applications (main focus area: tooling and abstractions).
- There are also other implementations in the market.
- In today's market, many companies use roles and titles interchangeably! So don't rely too much on the naming but on the actual job.
- This roadmap focuses on the typical DevOps Engineer, yet, it still shares at **least 90%** of the needed skills with the other roles.

### Resources {#16-resources}

- [DevOps Topologies - DevOps Types and Anti-Types](https://web.devopstopologies.com/)
- [The Site Reliability Workbook - How SRE Relates to DevOps - Google](https://sre.google/workbook/how-sre-relates/): A great book in general, and its first chapter covers the relation between SRE and DevOps.
- [What is platform engineering? - Platform Engineering](https://platformengineering.org/blog/what-is-platform-engineering): This article discusses the idea of platform engineering and how it evolved from DevOps.

## 1.7 DevOps Methodology - T-Shaped Skills DevOps Engineer

<p align="center">
  <img class="section-cover-image" title="Skill Set Shapes" alt="Skill Set Shapes" border="0" width="90%" src="/img/skill-set-shapes.png"/>
</p>

### What you need to know {#17-what-you-need-to-know}

- The `T-shaped skills` refer to combining broad and deep skills in a specific field. The horizontal bar of the "T" represents a broad range of general knowledge and skills across different disciplines or areas, and the vertical stem of the "T" represents deep expertise in a specific area. It's simply a mix between being a `specialist` and `generalist` at the same time!
- It will help you to work in companies with different DevOps patterns. You can easily transition between different areas in the DevOps spectrum. Not only that but also it will help you to handle new challenges effectively. In fact, the best DevOps engineers I have come across possessed T-shaped skills.
- Does it mean there's no `I-shaped` DevOps engineer who specializes in certain areas and no little knowledge in other areas? I would say it's possible, but it may limit the available opportunities and companies you can work with.
- Actually, as you progress in your career, it's better to develop more specialization (i.e., more vertical stems), and after a couple of years in the industry, your next step should be `Pi-Shaped` skills (search also for `M-Shaped`, `V-Shaped`, and even `Key-Shaped` skills, but that's a story for another day).
- In summary, you should aim to gain exposure to various areas of DevOps practices and technologies without delving too deep into each one. Yet, you need to dive in-depth into some of them (according to the market or organizations of your target). Because of that, your roadmap shouldn't be linear but follow the MVP-style approach!

### Resources {#17-resources}

- [Why T-Shaped Professionals Are Desirable – DevOps Agile Skills Association](https://www.devopsagileskills.org/blog/why-t-shaped-professionals-are-desirable/): This article that covers the benefits of being a T-Shaped DevOps engineer.
- [3 Ways T-Shaped Skills are Important in DevOps Teams - EXIN](https://www.exin.com/article/devops-the-next-generation-3-ways-t-shaped-skills-are-important-in-devops-teams/): This article discusses what is a T-shaped professional, and why does it matter, and 3 areas where the T-shaped skills so important.
- [T-shaped skills profiles and the human factor - McKinsey & Company](https://www.mckinsey.com/capabilities/operations/our-insights/operations-blog/ops-40-the-human-factor-a-class-size-of-1): This article covers the abstraction of T-shaped and how it affects organizations.

## Quiz

<Quiz data={QuizData}/>

## Hands-on

Follow the instructions in the [HiveBox project phase 1](../../projects/hivebox#phase-1).

## Interview Questions

Review the interview questions related to [Module 1](../../interview/common-questions#module-1).

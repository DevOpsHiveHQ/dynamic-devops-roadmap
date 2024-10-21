---
title: "Module 6: Optimize - Keep Improving"
sidebar_label: "6. Optimize - Keep Improving"
description: ""
---

**Work in progress.**

[🗂 Back to the Roadmap Index](../../getting-started#roadmap-index)

<p align="center">
  <img alt="Module Overview" border="0" width="90%" src={require('./module-06-overview.png').default} />
</p>

## 6.1 Planning - Agile Retrospective

<img class="img-right" align="right" width="25%" src="/img/topics/planning.png"></img>

### What you need to know {#61-what-you-need-to-know}

- By design, Agile is meant to be iterative. Hence, it's critical to review `what went well` and `what could be enhanced`.
- Here comes the `Retrospective` (or just `retro` for short) after each iteration (or a couple of iterations) to learn from the past and enhance the future.
- Arguably, a "continuous improvement mindset" is the most crucial factor in successful retro. Don't panic when mistakes happen; just aim to improve your processes, workflows, tools, and communication within every iteration.
- Another important aspect is having a blameless retro. The retro should be a safe space for everyone, and the discussion should be about systems, tools, or processes, rather than blaming individuals.
- It's also important to be data-driven by using metrics and numbers instead of just guessing. If there are two problems that should be addressed next, then the priority should be based on factors like how many customers will benefit from it and how much time it needs to be fixed compared to its impact.
- At the end of the retro, there should be `actionable outcomes`; without coming up with specific improvements, the whole retro is worthless!
Finally, remember that retro is not only about bad things. It's also time to celebrate successes and shout out achievements and positive behaviors.

### Resources {#61-resources}

- [Sprint Retrospective: How to Hold an Effective Meeting - Atlassian](https://www.atlassian.com/team-playbook/plays/retrospective)

## 6.2 Code - Performance Optimization

<img class="img-right" align="right" width="25%" src="/img/topics/code.png"></img>

### What you need to know {#62-what-you-need-to-know}

- Frankly speaking, most of the time, DevOps engineers don't need to write super-optimized code. The code should be high quality, but we mostly don't need to squeeze every bit of it, so we will not dive into "Big O Notation" here. On the other hand, inefficient code is undesirable, so you need to learn the basics of Performance Optimization.
- First of all, avoid `premature optimization`! Optimizing code too early usually leads to unnecessary complex solutions and wastes a lot of time without a good return. At first, focus only on critical use cases, then optimize based on actual performance issues as you go.
- If you know from the beginning that you need a high-performance solution, start with a programming language or a framework known for that. You will save a lot of effort if you select the correct tool early on. Also, follow the selected language's best practices for performance optimization.
- A simple method for code performance optimization is `caching`. Use it whenever possible on all levels, like database caching, in-memory caching Valkey or Memcached as a caching layer, and even DNS caching, which could save you a lot of necessary calls (external caching could also be helpful, like using Content Delivery Network "CDN" to cache static content).
- Following the same caching concept, try to minimize external API calls. The fastest request is the one that was never made! 
- Avoid dull operations like calling a function repeatedly that could be called once outside the loop. As a rule of thumb, any code that doesn't change between iterations should be outside the loop.
- Finally, if you need to dive deeper and optimize your code (again, if necessary), profiling tools are your best friend.

### Resources {#62-resources}

- [Optimizing Performance: Tips for Speeding Up Your Applications - SkillReactor](https://www.skillreactor.io/blog/optimizing-performance-tips-for-speeding-up-your-applications/)
- [Programming Optimization - Codecademy](https://www.codecademy.com/resources/docs/general/programming-optimization)

## 6.3 Continuous Integration - Software Supply Chain Security

<img class="img-right" align="right" width="25%" src="/img/topics/continuous-integration.png"></img>

### What you need to know {#63-what-you-need-to-know}

- As mentioned at the beginning of this roadmap, security is embedded in each section and isn't treated as a separate topic. However, software supply chain security is one of the biggest threats to modern software. Hence, it's important to cover it in more detail, especially from the continuous security point of view.
- Software Supply Chain Security refers to risks and vulnerabilities introduced through third-party software, dependencies, tools, and processes involved in developing, building, deploying, and maintaining software.
- Implementing proper security practices in each step of the software production and SDLC reduces the risk of vulnerabilities and hacking.
- Here are the most important practices that could be embedded in the CI pipelines:
  - Starting from development, each [Git commit should be siggned](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) so other people can be confident that the changes come from a trusted source.
  - Scan the code against secrets and sensitive data to ensure that nothing is mistakenly stored on the Git repository.
  - Setup [SBOM tool](https://www.linuxfoundation.org/research/the-state-of-software-bill-of-materials-sbom-and-cybersecurity-readiness) to report all components, libraries, and dependencies used in your software.
  - Keep code dependencies up-to-date using tools like [Dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide).
  - Run `Static Application Security Testing` (SAST) against your code using tools like [SonarQube](https://www.sonarsource.com/products/sonarqube/).
  - Scan your Dockerfile and container image using [Grype](https://github.com/anchore/grype) or [Docker Scout](https://docs.docker.com/scout/).
  - Once you build and scan your container image, sign it with [Cosign](https://github.com/sigstore/cosign) to ensure no one can manipulate it.
  - Before release and deploy, scan your IaC like Terraform files and Kubernetes manifests using [Terrascan](https://github.com/tenable/terrascan) (also lint K8s files using [KubeLinter](https://github.com/stackrox/kube-linter)).
- There are many other practices and tools, but what is mentioned is considered minimal.
In general, adopt `Shift Left Security` so you run security checks early in the development process to spot vulnerabilities as soon as possible.
- Finally, always ensure that all team members are aware of security best practices; usually, the human factor is the weakest link in the security chain!

### Resources {#63-resources}

- [What is software supply chain security? - Red Hat](https://www.redhat.com/en/topics/security/what-is-software-supply-chain-security)
- [The Complete Guide to Software Supply Chain Security - FOSSA](https://fossa.com/learn/software-supply-chain-security)

## 6.4 Infrastructure - Multi-environment Architecture

<img class="img-right" align="right" width="25%" src="/img/topics/infrastructure.png"></img>

### What you need to know {#64-what-you-need-to-know}

- Unless you test in production (which is really bad), one of the common tasks as a DevOps Engineer is building a multi-environment of your solution. Typically, between 2-4 environments like development, testing, staging, and production.
- Starting from source control, for the code, there are many styles to manage multi-environment architecture. The famous (but considered legacy now) is `Gitflow` and now [Trunk-based development](https://trunkbaseddevelopment.com/), where you have a single long-lived branch (`main`) and many short-lived feature branches. It's important to decide which branching model you will use because it will affect how you build the multi-environment architecture.
- For infrastructure code, avoid branching and use a flat structure where all environments are represented as directories instead of branches.
- Then, you need to think about environment isolation. Ideally, environments should be completely isolated, but they could not be for many reasons! For example, many start-ups want to go fast and lack the human resources to do it properly or even for cost savings.
- The balance between isolation and cost is essential. Higher isolation levels mean higher costs, so you need to review all options and make a deliberate decision before going to full isolation. Otherwise, you could easily burn your budget without much return on investment.
- **The most important tip here**: When you decide to create a multi-environment architecture, ensure that you create a common base and extend it. Don't use one environment, especially the production environment, as a base.
- Also, once you decide to go for the multi-environment, you will definitely need to adopt Infrastructure as Code; otherwise, it will be hard to manage. That goes for Terraform and Kubernetes.
- Always try to minimize `environment drift`, i.e., all environments should be as close as possible. The containers revelation made that much better, as you can run the same software easily, but the infrastructure is not just containers.
- Of course, there will be differences between environments, but the most important two are staging and production. The staging environment should be a mini mirror of the production environment so you can catch any bugs earlier before your customers.
- Multi-environment monitoring and observability are a must, not only for logs and metrics but also for costs and expenses.
- You should create a cost alert in your cloud provider! If you don't, you will regret it sooner or later.
Multi-environment setup is not a trivial topic, but like anything else, doing it progressively will help you get results quickly and improve over time.

### Resources {#64-resources}

- [Comparing Git workflows: What you should know - Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [How to Manage Multiple Terraform Environments Efficiently - Spacelift](https://spacelift.io/blog/terraform-environments)
- [Multi-tenancy - Kubernetes](https://kubernetes.io/docs/concepts/security/multi-tenancy/)

## 6.5 Containers - Kubernetes Operators

<img class="img-right" align="right" width="25%" src="/img/topics/containers.png"></img>

### What you need to know {#65-what-you-need-to-know}

### Resources {#65-resources}

## 6.6 Continuous Delivery - End-to-End Release Automation

<img class="img-right" align="right" width="25%" src="/img/topics/continuous-delivery.png"></img>

### What you need to know {#66-what-you-need-to-know}

### Resources {#66-resources}

## 6.7 Continuous Deployment - Introduction and Solutions in the Market

### What you need to know {#67-what-you-need-to-know}

### Resources {#67-resources}

## 6.8 Continuous Deployment - GitOps and Argo CD Essentials

### What you need to know {#68-what-you-need-to-know}

### Resources {#68-resources}

## Project - HiveBox Phase 6

Follow the instructions in the [HiveBox project phase 6](../../projects/hivebox#phase-6).

## Interview Questions - Module 6

Review the interview questions related to [Module 6](../../interview/interview-questions#module-6).

---

If you are done, [🗂 Back to the Roadmap Index](../../getting-started#roadmap-index)

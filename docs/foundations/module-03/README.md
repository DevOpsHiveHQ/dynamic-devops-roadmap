---
title: "Module 3: Start - Laying the Base"
sidebar_label: "3. Start - Laying the Base"
description: "Define goals, prioritize requirements, dive into code modularity, and then move to testing and quality assurance. Implement unit tests, follow Docker best practices, and explore quality gates in continuous integration with GitHub Actions — finally, a hands-on with the HiveBox project"
---

[🗂 Back to the Roadmap Index](../../getting-started#roadmap-index)

<p align="center">
  <img alt="Module Overview" border="0" width="90%" src={require('./module-03-overview.png').default} />
</p>

## 3.1 Planning - Define Goals and Requirements

<img class="img-right" align="right" width="25%" src="/img/topics/planning.png"></img>

### What you need to know {#31-what-you-need-to-know}

- The first step in the work is planning which starts with defining goals and requirements.
- Decide which Agile methodology you will use. (Scrum, Kanban, Scrumban, etc.). Let's stick with Kanban.
- Document as you go. Always assume that someone else will read your project at any phase.
- Avoid `Scope Creep`! Make it work, then make it right, then make it fast!
- Don't forget! You are `Managers of One`! Here I quote from [Signal v. Noise](https://signalvnoise.com/posts/1430-hire-managers-of-one): "A manager of one is someone who comes up with their own goals and executes them. They don’t need heavy direction. They don’t need daily check-ins".

### Resources {#31-resources}

- [What Is Agile Project Management? - Businessmap](https://businessmap.io/agile/project-management)
- [Top five causes of scope creep and what to do about them - Project Management Institute](https://www.pmi.org/learning/library/top-five-causes-scope-creep-6675)
- [Leadership - Managers of One - The GitLab Handbook](https://handbook.gitlab.com/handbook/leadership/#managers-of-one)


## 3.2 Code - Modularity and Reusability

<img class="img-right" align="right" width="25%" src="/img/topics/code.png"></img>

### What you need to know {#32-what-you-need-to-know}

- Dividing software code into smaller and self-contained units has many benefits including separation of concerns, encapsulation, independent development and testing.
- However, you should always try to balance between modularity and avoiding over-engineering. If the code is already small, no need to split it into micro modules.
- But even in the small code, always aim for clarity and simplicity. Think about the next person who will work on that code (in many cases it's a future version of you!) and always remember that `code is read more than it is written`!
- It doesn't matter which language you use, bash script or real programming language, always apply the same principles.
- As a DevOps Engineer, reusability is super important for you not just paragmatically but also as a way of thinking.

### Resources {#32-resources}

- [Taking the Modular Route - DevOps.com](https://devops.com/taking-the-modular-route/): Using a modular approach in coding and DevOps in general allows for quicker development, easier updates, and simpler troubleshooting.
- [The Zen of Python](https://peps.python.org/pep-0020/): Python has some great guiding principles for developers that could be applied to any code.

## 3.3 Code - Testing and Quality Assurance

### What you need to know {#33-what-you-need-to-know}

- The goal of testing and quality assurance (QA) in software ensures that software meets requirements and is as free of defects as possible.
- Technically `Testing` and `QA` are two different things, but usually used interchangeably.
- Usually, there is a dedicated specialist who takes care of QA in the SDLC and DevOps engineers collaborate with them and testing could be manual or automated.
- But also as a DevOps engineer, you need to apply the QA to your own code and tools.
- Testing has many types each of which serves different purposes like:
  - **Unit Testing:** Testing individual components or modules of software to ensure they work correctly in isolation.
  - **Integration Testing:** Testing the interaction between integrated units/modules to ensure they work together as expected.
  - **End-to-end Testing:** Testing the complete and integrated software to verify that it meets the specified requirements from start to finish.
  - **Acceptance Testing:** Validating the software against the user requirements and determining whether it is ready for release. This often involves beta testing with actual users.
  - **Regression Testing:** Re-testing the software after changes (such as bug fixes or new features) to ensure existing functionality is not broken.
  - **Performance Testing:** Assessing the software's performance under various conditions, such as load testing and stress testing.
  - **Security Testing:** Identifying vulnerabilities and ensuring the software is secure against potential threats.
- There are also other types of tests not related to quality like **A/B Testing** which shows two different versions of the software to identify which version has the best results and use that information to make data-driven decisions to enhance the user experience and achieve business goals.

### Resources {#33-resources}

- [Quality Assurance vs Testing - BrowserStack](https://www.browserstack.com/guide/quality-assurance-vs-testing): Even though they are usually used interchangeably, it's good to understand the actual difference between the two of them.
- [DevOps Test Strategy - SmartBear](https://smartbear.com/blog/devops-testing-strategy-best-practices-tools/): A detailed article about developing a DevOps testing strategy, the benefits, best practices, and tools.

## 3.4 Code - Writing Unit Tests

- As mentioned before, **Unit Testing** focuses on testing individual components, modules, or functions/methods of the code to ensure they work correctly in isolation.
- Understanding unit testing, in general, is essential and as a DevOps engineer, you should be able to write unit tests in your main coding language.
- The unit test of any code is a good entry point to understanding any new code.
- Most of the time you don't write unit tests using native code but using a framework or library for that purpose.
- Your unit test should cover most of your code, however, 100% of unit test code coverage is usually unrealistic and doesn't provide much value.
- Always remember, unit test is a helper code written to ensure the main code is working as expected, hence, unit test code should be super simple and doesn't contain much logic in it.

### What you need to know {#34-what-you-need-to-know}

- [Unit Testing: Principles, Benefits & 6 Quick Best Practices - Codefresh](https://codefresh.io/learn/unit-testing/)
- [Unit Testing and Coding: Why Testable Code Matters](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters)

### Resources {#34-resources}

## 3.5 Containers - Docker Best Practices

<img class="img-right" align="right" width="25%" src="/img/topics/containers.png"></img>

### What you need to know {#35-what-you-need-to-know}

- In the previous module, we covered Docker fundamentals. At this point, you should start applying Docker and container best practices.
- In general, like all best practices, you don't need to memorize them, always start a tool that helps you to check the common best practices.
- [Hadolint](https://github.com/hadolint/hadolint) is one of the popular Dockerfile linters. Which also integrates with different IDEs like [VS Code](https://marketplace.visualstudio.com/items?itemName=exiasr.hadolint).
- The following are some of the main categories of best practices (check the resources for the full list):
  - Common
  - Language-specific
  - Security
  - Container file
  - Container image
  - Container runtime

### Resources {#35-resources}

- [Overview of best practices for writing Dockerfiles - Docker Docs](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Best practices for Dockerfile instructions - Docker Docs](https://docs.docker.com/develop/develop-images/instructions/)
- [Docker Best Practices Workshop - Ahmed AbouZaid](https://tech.aabouzaid.com/2021/09/docker-best-practices-workshop-presentation.html)

## 3.6 Continuous Integration - Introduction and Solutions in the Market

<img class="img-right" align="right" width="25%" src="/img/topics/continuous-integration.png"></img>

### What you need to know {#36-what-you-need-to-know}

- In simple words, `Continuous Integration` is a practice where the code changes are regularly merged into a shared repository, and each merge triggers an automated build and testing process, allowing teams to detect errors quickly, ensure code quality, and facilitate the integration of new features.
- There are different CI systems like Jenkins, GitHub Actions, GitLab CI, and more.
- The system doesn't matter as long as you understand the CI principles.
- However, **don't start with Jenkins! No one starts learning to drive using a tank!** Start with something more straightforward like GitHub Actions.
- CI is a critical practice for modern software development for better code quality and delivery speed.

### Resources {#36-resources}

- [The fundamentals of continuous integration in DevOps - GitHub](https://github.com/resources/articles/devops/continuous-integration)
- [What is continuous integration? - Atlassian](https://www.atlassian.com/continuous-delivery/continuous-integration)
- [7 CI/CD Concepts You Must Know - Codefresh](https://codefresh.io/learn/ci-cd/7-ci-cd-concepts-you-must-know/)

## 3.7 Continuous Integration - GitHub Actions Essentials

### What you need to know {#37-what-you-need-to-know}

- As mentioned in the previous section, start with a straightforward CI platform and avoid Jenkins at the beginning! Jenkis is too powerful to use as a starting point and you will find yourself dealing with a lot of areas more about Jenkis itself and less about CI as a concept.
- For that reason, GitHub Actions is a great start. It's still a powerful platform integrated directly into GitHub, which allows engineers to automate their workflows, including building, testing, and deploying code.
- GitHub Actions has the following core concepts:
  - **Workflows:** The main YAML manifest which automates processes such as building and testing code. They consist of one or more jobs that can run in parallel or sequentially.
  - **Jobs:** A job is a set of steps executed on the same machine. Jobs can run on different types of machines (e.g., Ubuntu, macOS, Windows).
  - **Steps:** Individual tasks within a job. Steps can include actions (reusable units) or custom shell commands.
  - **Actions:** Reusable pieces of code that perform specific tasks. Think of Actions as extensions or plugins. You can get them on [GitHub Marketplace](https://github.com/marketplace?type=actions).
  - **Runners:** Servers that run workflows. GitHub provides those runners for you with some limitations, but you can also self-host runners for more control.
- Always remember, in GHA, steps are sequential, and jobs are parallel by default but could be also sequential by setting dependencies between the jobs. But each job runs on its own machine and needs extra steps to share info between them.

### Resources {#37-resources}

- [Quickstart for GitHub Actions - GitHub Docs](https://docs.github.com/en/actions/quickstart)
- [How to build a CI/CD pipeline with GitHub Actions in four simple steps - GitHub Blog](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/)

## 3.8 Continuous Integration - Pipelines and Quality Gates

### What you need to know {#38-what-you-need-to-know}

- As mentioned before, CI pipelines are created to ensure the quality of your code (any code, which includes programming language, basic script, or infrastructure code like Dockerfiles or Kubernetes manifests).
- The idea of the quality gates is to have some enforced measures to ensure that any changes meet certain standards before merging or moving to the next steps.
- Nowadays, 100% of the projects should have at least a simple CI pipeline that has `linting`, `code style`, and probably some `security` tool in addition to the normal `build` steps to create the artifact like Docker image or so.
- It's recommended to use the CI platform like GitHub Actions or Jenkins **just as a runner**, which means whatever is in the CI pipeline it should be also possible to run it locally. Many people are using some tools like `Make` for that but there are modern tools like [Task](https://taskfile.dev/).
- Also running those quality gates (at least the essential and fast ones) should run locally even before pushing to the remote repo to avoid unnecessary execution of the CI pipelines. That could be done via native Git hooks or some tool like [pre-commit](https://pre-commit.com/) which is a framework for managing and maintaining multi-language pre-commit hooks.

### Resources {#38-resources}

- [The Importance of Pipeline Quality Gates and How to Implement Them - InfoQ](https://www.infoq.com/articles/pipeline-quality-gates/)

## Project - HiveBox Phase 3

Follow the instructions in the [HiveBox project phase 3](../../projects/hivebox#phase-3).

## Interview Questions - Module 3

Review the interview questions related to [Module 3](../../interview/common-questions#module-3).

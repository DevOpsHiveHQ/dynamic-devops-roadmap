---
title: "End-to-End Project: HiveBox"
sidebar_label: "⭐ HiveBox"
sidebar_position: 1
description: "An incremental industry-grad end-to-end project to learn DevOps in a hands-on way"
keywords: ["project", "full project", "e2e", "end-to-end"]
image: ./hivebox-architecture-preview.png
toc_max_heading_level: 2
---

<img alt="Beekeeping" class="img-right img-round-corners" align="right" width="30%"  border="0" src={require('./beekeeping.png').default} />

Almost everyone loves honey, and we at [DevOps Hive](https://devopshive.net/) love it too and appreciate the role that bees play for the planet! Because [bees are essential to people and planet](https://www.unep.org/news-and-stories/story/why-bees-are-essential-people-and-planet).

For that reason, in this roadmap our main hands-on project will be for the bees! We will utilize the technology and open source software to build an API to track the environmental sensor data from [openSenseMap](https://opensensemap.org/), a platform for open sensor data in which everyone can participate.

:::tip
If you are looking for the full roadmap including this project, back to the [getting started page](../../getting-started).
:::

## Project Badge

Push it forward and add the project badge in your repo to support the community! ⭐

Code:

```
[![Dynamic DevOps Roadmap](https://devopshive.net/badges/dynamic-devops-roadmap.svg)](https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap)
```
Preview:

[![Dynamic DevOps Roadmap](https://devopshive.net/badges/dynamic-devops-roadmap.svg)](https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap)

---

## Approach

<p align="center">
  <img alt="HiveBox Project Overview" border="0" width="90%" src={require('./hivebox-project-overview.png').default} />
</p>

This project follows the same Dynamic MVP-style mindset used in the [roadmap](../../getting-started). Which aims to cover the whole Software Development Life Cycle (SDLC). That mean each phase of this project will cover all aspects of the DevOps areas like planning, coding, containers, testing, continuous integration, continuous delivery, infrastructure, etc.

This project works the best in `Pairing` mode where you have another person helps you whenever you stuck (like a mentor or so). But in case you don't have that, always back to the `Related Module` where it has more details could help you in the project.

:::note
Each phase of this project is tackled gradually part of the roadmap modules. But it's also **standalone**, and you can work on it if you have the required knowledge for each phase.
:::

:::danger
Remember, the goal is not only to implement the project but also to learn industry best practices in the DevOps field!
Just applying this project without understanding what the problems to solve will not help you to be a DevOps Engineer!
:::

## Goal

<p align="center">
  <a target="_blank" href="/img/hivebox-architecture.gif">
    <img alt="HiveBox Architecture" border="0" src={require('./hivebox-architecture.png').default} border="0" width="90%" />
  </a>
  <br/>
  This project aims to build a real system from code to infrastructure and everything in between in but iterative phases
  <a target="_blank" href="/img/hivebox-architecture.gif">
    ⭐ Click on the diagram to see it animated ⭐
  </a>
</p>

The goal of this project is to build a scalable RESTful API around [openSenseMap](https://opensensemap.org/) but customized to help beekeeper with their chores. The API output should be in JSON. You will start with a basic implementation, then extend the whole system to handles thousands of requests per second. But always remember, every decision has a cost.

You can get senseBox IDs by checking the [openSenseMap](https://opensensemap.org/) website. Use 3 senseBox IDs close to each other (you can use this one [5eba5fbad46fb8001b799786](https://opensensemap.org/explore/5eba5fbad46fb8001b799786) as starting point). Just copy the IDs, you will need them in the next steps.

---

## Phase 1

Roadmap Module: [Welcome to the DevOps World](../../foundations/module-01)

<p align="center">
  <a href={require('./hivebox-architecture-phase-01.png').default}>
    <img alt="HiveBox Architecture - Phase 1" border="0" src={require('./hivebox-architecture-phase-01.png').default} border="0" width="90%" />
  </a>
</p>

- Understand your role in this project and how you work with other teams.
- Brush up on your knowledge about Software Project management (Hint: [What is agile project management?](https://www.apm.org.uk/resources/find-a-resource/agile-project-management/) And [Introduction to Software Product Management](https://www.coursera.org/learn/introduction-to-software-product-management)).
- Decide which Agile methodology you will use. (Scrum, Kanban, Scrumban, etc.).
- Document as you go. Always assume that someone else will read your project at any phase.
- Avoid [Scope Creep](https://www.pmi.org/learning/library/top-five-causes-scope-creep-6675)! Make it work, then make it right, then make it fast!
- Each change should be done in order and using pull requests (don’t push directly to the main branch!).
- Don't forget! You are [managers of one](https://handbook.gitlab.com/handbook/leadership/#managers-of-one)!

---

## Phase 2

Roadmap Module: [Basics - DevOps Core](../../foundations/module-02)

<p align="center">
  <a href={require('./hivebox-architecture-phase-02.png').default}>
    <img alt="HiveBox Architecture - Phase 2" border="0" src={require('./hivebox-architecture-phase-02.png').default} border="0" width="90%" />
  </a>
</p>

### 2.1 Tools

- Git
- VS Code
- Docker

### 2.2 Code

- Create GitHub repository for the project.
- Implement the code requirements.

**Requirements:**

- Create a function that print current app version. It should print the version then exit the application.
- Use [Semantic Versioning](https://semver.org/) for the app version starting with `v0.0.1`.

### 2.3 Containers

- Create Dockerfile for the project.
- Build the Docker image and run it locally.

### 2.4 Testing

- Locally, run the app container and ensure that it returns the correct value.

---

## Phase 3

Roadmap Module: [Start - Laying the Base](../../foundations/module-03)

<p align="center">
  <a href={require('./hivebox-architecture-phase-03.png').default}>
    <img alt="HiveBox Architecture - Phase 3" border="0" src={require('./hivebox-architecture-phase-03.png').default} border="0" width="90%" />
  </a>
</p>

### 3.1 Tools

- [Hadolint](https://github.com/hadolint/hadolint) **and** [VS Code hadolint extension](https://marketplace.visualstudio.com/items?itemName=exiasr.hadolint)
- [Pylint](https://pypi.org/project/pylint/) **and** [VS Code Pylint extension](https://marketplace.visualstudio.com/items?itemName=ms-python.pylint)

### 3.2 Code

- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for Git commits.
- Familiarize yourself with [openSenseMap API](https://docs.opensensemap.org/).
- Implement the code requirements (Hint: [Flask Quickstart](https://flask.palletsprojects.com/en/2.3.x/quickstart/) or [FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/)) .
- Write unit tests for all endpoints.

**Requirements:**

**Version:**
- Endpoint: `/version`
- Parameters: No parameters.
- Requirements:
  - Returns the version of the deployed app.

**Temperature:**
- Endpoint: `/temperature`
- Parameters: No parameters.
- Requirements:
  - Return current average temperature based on all senseBox data.
  - Ensure that the data is no older 1 hour.

### 3.3 Containers

- Apply Best Practices for containers (Hint: [Docker Best Practices](https://tech.aabouzaid.com/2021/09/docker-best-practices-workshop-presentation.html)).

### 3.4 Continuous Integration

- Create a GitHub Actions workflow for CI.
- Add step to lint code and Dockerfile.
- Add step to build the Docker image.
- Add step to unit tests.
- Setup [OpenSSF Scorecard GitHub Action](https://securityscorecards.dev/#using-the-github-action) and fix any issues reported by it.

### 3.5 Testing

- In the CI pipeline, call the `/version` endpoint and ensure that it returns the correct value.

---

## Phase 4

Roadmap Module: [Expand - Constructing a Shell](../../foundations/module-04)

<p align="center">
  <a href={require('./hivebox-architecture-phase-04.png').default}>
    <img alt="HiveBox Architecture - Phase 4" border="0" src={require('./hivebox-architecture-phase-04.png').default} border="0" width="90%" />
  </a>
</p>

### 4.1 Tools

- Kind
- Kubectl

### 4.2 Code

- Implement the code requirements.
- Write integration test (Hint: [3 ways to test your API with Python](https://opensource.com/article/21/9/unit-test-python)).

**Requirements:**

**General:**
- The senseBox should be configurable via env vars.

**Metrics:**
- Endpoint: `/metrics`
- Parameters: No parameters.
- Requirements:
  - Returns default Prometheus metrics about the app.

**Temperature:**
- Endpoint: `/temperature`
- Parameters: No parameters.
- Requirements:
  - Add "status" field based on the temperature average value.
    - Less than 10: Too Cold
    - Between 11-36: Good
    - More than 37: Too Hot

### 4.3 Containers

- Create KIND config to run with Ingress-Nginx.
- Create Kubernetes core manifests to deploy the application.

### 4.4 Continuous Integration

- Run code integration tests.
- Run SonarQube for code quality, security and static analysis (Hint: [Use SonarQube Quality Gate check](https://github.com/marketplace/actions/sonarqube-quality-gate-check) action, also consider [Semgrep](https://github.com/semgrep/semgrep)).
- Run Terrascan for Kubernetes manifest misconfigurations and vulnerabilities (Hint: [Terrascan GitHub Action](https://github.com/marketplace/actions/terrascan-iac-scanner)).
- Apply Best Practices for CI (Hint: [Best practices when adopting continuous integration](https://github.com/resources/articles/devops/continuous-integration#best-practices-when-adopting-continuous-integration)).

### 4.5 Continuous Delivery

- Create a GitHub Actions workflow for CD.
- Add step to release by pushing a versioned Docker image to a container registry (Hint: [Use GitHub Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)).

---

## Phase 5

Roadmap Module: [Transform - Finishing the Structure](../../foundations/module-05)

<p align="center">
  <a href={require('./hivebox-architecture-phase-05.png').default}>
    <img alt="HiveBox Architecture - Phase 5" border="0" src={require('./hivebox-architecture-phase-05.png').default} border="0" width="90%" />
  </a>
</p>

### 5.1 Tools

- Kind
- Kubectl

### 5.2 Code

- Implement the code requirements.

**Requirements:**

**General:**
- Add a caching layer using Redis based project [Valkey](https://github.com/valkey-io/valkey).
- Add a storage layer using S3-Compatible project [MinIO](https://min.io/) and store the data periodically every 5 minutes.

**Store:**
- Endpoint: `/store`
- Parameters: No parameters.
- Requirements:
  - By default, the application will store the data every 5 minutes, but by calling this endpoint, it should store the data directly on MinIO.

**Metrics:**
- Endpoint: `/metrics`
- Parameters: No parameters.
- Requirements:
  - Extend the Prometheus metrics by adding custom metrics based on the code logic.

**Readyz:**
- Endpoint: `/readyz`
- Parameters: No parameters.
- Requirements:
  - Returns HTTP 200 unless:
    - 50% + 1 of the configured senseBoxes are not accessible.
    - AND caching content is older than 5 min.

### 5.3 Containers

- Create a Helm chart for the application (Hint: [Awesome Helm List](https://github.com/cdwv/awesome-helm)).
- Create Kustomize manifests for the infrastructure resources like KeyVal (Hint: [Awesome Kustomize List](https://github.com/DevOpsHiveHQ/awesome-kustomize)).
- Review Kubernetes Security Best Practices (Hint: [Kubernetes Security Best Practices with tips for the CKS exam](https://tech.aabouzaid.com/2022/07/kubernetes-security-best-practices-with-tips-for-the-cks-exam.html)).
- Configure the Kubernetes app manifest to use `/readyz` as a readiness probe.

### 5.4 Infrastructure as Code

- Deploy Grafana agent to collect logs and metrics (Hint: Create [Grafana Cloud](https://grafana.com/products/cloud/) free account to Use Loki and Grafana).
- Create a Kubernetes cluster using Terraform IaC (Hint: Use free tier from any Cloud provider).

### 5.5 Continuous Integration

- Create End-to-End test (Hint: [Venom, a declarative test suite](https://github.com/ovh/venom)).
- Run KIND cluster, deploy the app and infrastructure, then run the End-to-End test.

### 5.6 Continuous Delivery

- Apply Best Practices for CD.

---

## Phase 6

Roadmap Module: [Optimize - Keep Improving](../../foundations/module-06)

<p align="center">
  <a href={require('./hivebox-architecture-phase-06.png').default}>
    <img alt="HiveBox Architecture - Phase 6" border="0" src={require('./hivebox-architecture-phase-06.png').default} border="0" width="90%" />
  </a>
</p>

This phase a free-style user-defined enhancements which means the enhancements could be related to any part of the project.

Here are some highly recommended suggestions:

- Deploy the application in Declarative GitOps style using [Argo CD](https://argo-cd.readthedocs.io/en/stable/getting_started/).
- Prepare for production by setup DNS ([ExternalDNS](https://kubernetes-sigs.github.io/external-dns/)) and Certificates ([Cert-Manager](https://cert-manager.io/)).
- Automate dependency updates with [Dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide).
- Move all external services (Like Grafana.com and Terraform Cloud) to Kubernetes cluster using open-source solutions.

Here are some extra suggestions:

- Setup [Kyverno](https://kyverno.io/) for Policy as Code.
- Build Multi-environment Kubernetes clusters (Dev, Stage, and Prod) with Terraform and Kustomize.
- Use [TestKube](https://testkube.io/) for better testing execution.
- Develop a Kubernetes Operator to handle the app operations (Hint: [Introduction to Kubernetes Operators](https://tech.aabouzaid.com/2020/03/introduction-to-kubernetes-operators-presentation.html)).

---

## Phase 7

Roadmap Module: [Capstone Project](../../foundations/module-07)

<p align="center">
  <a href={require('./hivebox-architecture-phase-07.png').default}>
    <img alt="HiveBox Architecture - Phase 7" border="0" src={require('./hivebox-architecture-phase-07.png').default} border="0" width="90%" />
  </a>
</p>

In this phase, you will design and impelment your own project similar to HiveBox project but with an idea and a tech stack of your choice. Check the [Capstone Project](../../foundations/module-07) page for more details.

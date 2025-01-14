---
title: "Module 6: Optimize - Keep Improving"
sidebar_label: "6. Optimize - Keep Improving"
description: "Conduct Agile retrospective to analyze the improvement areas, optimize code performance, and secure the software supply chain. Then, implement a multi-environment architecture with a log aggregation system for observability. Also, set up end-to-end release automation, explore continuous deployment with GitOps and Argo CD — and finally, a hands-on with the HiveBox project"
image: /img/reconciliation-loop.png
toc_max_heading_level: 2
---

import ModuleHeader from '@site/src/components/ModuleHeader';
import {DevOpsRoleTopics, TargetAudience} from '@site/src/components/Audience';
import Quiz from '@site/src/components/Quiz';
import QuizData from './module-06-quiz.json';

<ModuleHeader />

<p align="center">
  <img class="module-overview-image" alt="Module Overview" border="0" width="90%"
    src={require('./module-06-overview.png').default} />
</p>

## Module Overview

- Conduct Agile retrospectives to analyze the improvement areas.
- Optimize code performance and secure the software supply chain.
- Implement a multi-environment architecture with a log aggregation system for observability.
- Set up end-to-end release automation and explored continuous deployment with GitOps and Argo CD.
- Implement the progressive hands-on project, HiveBox phase 6.
- Focus areas: Planning (12.5%), Code (12.5%), Infrastructure (12.5%), Containers (12.5%), Continuous Integration (12.5%), Continuous Delivery (12.5%), and Continuous Deployment (25%).

## 6.1 Planning - Agile Retrospective

<img class="img-right" align="right" width="25%" src="/img/topics/planning.png"></img>

### Audience {#61-audience}

<TargetAudience roles={['devops', 'software']} />

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

### Audience {#61-audience}

<TargetAudience roles={['devops', 'software']} />

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

### Audience {#61-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#63-what-you-need-to-know}

- As mentioned at the beginning of this roadmap, security is embedded in each section and isn't treated as a separate topic. However, software supply chain security is one of the biggest threats to modern software. Hence, it's important to cover it in more detail, especially from the continuous security point of view.
- Software Supply Chain Security refers to risks and vulnerabilities introduced through third-party software, dependencies, tools, and processes involved in developing, building, deploying, and maintaining software.
- Implementing proper security practices in each step of the software production and SDLC reduces the risk of vulnerabilities and hacking.

<DevOpsRoleTopics>

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

</DevOpsRoleTopics>

### Resources {#63-resources}

- [What is software supply chain security? - Red Hat](https://www.redhat.com/en/topics/security/what-is-software-supply-chain-security)
- [The Complete Guide to Software Supply Chain Security - FOSSA](https://fossa.com/learn/software-supply-chain-security)

## 6.4 Infrastructure - Multi-environment Architecture

<img class="img-right" align="right" width="25%" src="/img/topics/infrastructure.png"></img>

### Audience {#61-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#64-what-you-need-to-know}

- Unless you test in production (which is really bad), one of the common tasks as a DevOps Engineer is building a multi-environment of your solution. Typically, between 2-4 environments like development, testing, staging, and production.
- Starting from source control, for the code, there are many styles to manage multi-environment architecture. The famous (but considered legacy now) is `Gitflow` and now [Trunk-based development](https://trunkbaseddevelopment.com/), where you have a single long-lived branch (`main`) and many short-lived feature branches. It's important to decide which branching model you will use because it will affect how you build the multi-environment architecture.

<DevOpsRoleTopics>

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

</DevOpsRoleTopics>

### Resources {#64-resources}

- [Comparing Git workflows: What you should know - Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [How to Manage Multiple Terraform Environments Efficiently - Spacelift](https://spacelift.io/blog/terraform-environments)
- [Multi-tenancy - Kubernetes](https://kubernetes.io/docs/concepts/security/multi-tenancy/)

## 6.5 Containers - Kubernetes Operators

<img class="img-right" align="right" width="25%" src="/img/topics/containers.png"></img>

### Audience {#61-audience}

<TargetAudience roles={['devops']} />

### What you need to know {#65-what-you-need-to-know}

<DevOpsRoleTopics>

- As mentioned in the previous modules, Kubernetes is one of the best tech inventions of the last ten years, having reshaped the whole tech scene. Before Kubernetes, infrastracture operations were ununified and had a lot of wheel reinvention.
- Kubernetes comes with a set of built-in primitives like `Pod`, `Deployment`, `ConfigMap`, and, most importantly, `StatefulSet`. However, Kubernetes stateful support is generic, so it's hard to run stateful and complex applications like databases and distributed systems without much extra work.
- However, one of the brilliant aspects of Kubernetes is extensibility. By design, you can introduce new logic into Kubernetes to work with specific stateful workloads; for example, you could have a new kind to handle PostgreSQL, not just the setup but also day-2 operations like backup and upgrade. That extension pattern is called `Operator.`
- So, in the end, what are Kubernetes operators? And why do we need them?
  > Operators are software extensions to Kubernetes that use custom resources to manage applications and their components. The operator's goal is to put domain knowledge into the software that helps to simplify the management of complex applications on Kubernetes.
- Hence, an Operator simply is a [controller](https://kubernetes.io/docs/concepts/architecture/controller/) that watches events of [custom resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) in the Kubernetes API and takes actions based on the operator’s logic.

<p align="center">
  <img title="Kubernetes Operator flow" alt="Kubernetes Operator flow" border="0" width="90%" src={require('./6.5-kubernetes-operator-flow.png').default} />
</p>

- This logic in Kubernetes is defined by **Custom Resource Definitions** (CRDs), which extend the Kubernetes API to include new resource types that the Operator can manage. You can list CRDs in your cluster by running `kubectl get customresourcedefinitions`.
- Not all operators are made the same! They could have different capability levels. There are five levels of Operator maturity:
  - **Basic Install**: Handles installation.
  - **Seamless Upgrades**: Manages app upgrades.
  - **Full Lifecycle**: Performs automatic scaling, backups, etc.
  - **Deep Insights**: Provides monitoring and alerts.
  - **Auto-Pilot**: Fully automated management.
- A good source for more operators is [OperatorHub.io](https://operatorhub.io/); it has more than 350 operators.
- You will mostly use an existing operator. You don't need to develop one yourself. Some common operators are [Prometheus](https://github.com/prometheus-operator/prometheus-operator), [ExternalDNS](https://github.com/kubernetes-sigs/external-dns), [Cert-Manager](https://github.com/cert-manager/cert-manager).
- Finally, you don't need to know much about Kubernetes operators' internals as a start, but you should definitely have a good understanding of that concept as they will run in your cluster.

</DevOpsRoleTopics>

### Resources {#65-resources}

- [What is an Operator? - OperatorHub](https://operatorhub.io/what-is-an-operator)
- [How to explain Kubernetes Operators in plain English - The Enterprisers Project](https://enterprisersproject.com/article/2019/2/kubernetes-operators-plain-english)
- [Operator pattern - Kubernetes Docs](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)
- [Operator Capability Levels - Operator SDK](https://sdk.operatorframework.io/docs/overview/operator-capabilities/)

## 6.6 Continuous Delivery - End-to-End Release Automation

<img class="img-right" align="right" width="25%" src="/img/topics/continuous-delivery.png"></img>

### Audience {#61-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#66-what-you-need-to-know}

- Before diving into Continuous Deployment, we need to have a look at Continuous Delivery end-to-end release automation, which is the process of producing products ready for deployment.
- In fact, there are many types of release, but they could be narrowed down to two types: `Versioned release` and `Rolling release`.
- In a versioned release, you release an artefact with a specific version, like `1.0.0`. [Semantic Versioning](https://semver.org/) is one of the most popular versioning styles, but it's not the only one. Users should deliberately upgrade to the new version if they need the latest updates. This type is common in application code, especially if you have external consumers.
- In rolling releases, you release an artifact with a marker like a Git hash or even a branch name, which works just as a reference or a pointer. The users will always get the latest updates at any point in time. This type is common in Infrastructure as Code, especially for internal use.
- It's hard to say one is better than the other; each has pros and cons and recommended use cases.
- In both styles, there are a couple of things you need to remember:
  - Release quality is the same as the CI pipeline quality. Follow [CI best practices](../module-04/#44-continuous-integration---ci-best-practices) and add all standard quality gates.
  - Everything should be done in version control. No magic should happen outside the Git repository.
  - Ensure that the artifact is in at least one environment for consumers before it goes out.
  - Learn about Rollback and Rollforward strategies to deal with failed releases.
  - Generate changelog or release notes based on the Git commits. [Conventional Commits](https://www.conventionalcommits.org/en/) is famous for applications, and [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) is common for IaC. There are many tools to automate that step regardless of the Git commit convention you use (e.g., [git-cliff](https://github.com/orhun/git-cliff)).
  - Automate the release chores and version bumps using tools like [release-please](https://github.com/googleapis/release-please) and [release-it](https://github.com/release-it/release-it).
  - For security, sign the artifacts using [Sigstore/Cosign](https://github.com/sigstore/cosign) using the effortless `keyless signing`.
  - Always try to use a modern artifact format like [OCI](https://opencontainers.org/) (all artifacts are stored in a container image format), especially for IaC like Helm charts and Terraform modules. There are many tools for that, like [ORAS](https://github.com/oras-project/oras).

### Resources {#66-resources}

- [Continuous integration vs. delivery vs. deployment - Atlassian](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
- [Building an Efficient Release Management Process - Split](https://www.split.io/blog/building-an-efficient-release-management-process/)
- [Helm chart keyless signing with Sigstore/Cosign - Ahmed AbouZaid](https://tech.aabouzaid.com/2023/08/helm-chart-keyless-signing-with-sigstore-cosign.html)

## 6.7 Continuous Deployment - Introduction and Solutions in the Market

### Audience {#61-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#67-what-you-need-to-know}

- In simple words, `Continuous Deployment` is a practice part of the CI/CD pipeline in which the code artifact is regularly deployed to different environments automatically or semi-automatically.
- Don't mix `Continuous Deployment` with `Continuous Delivery`; the delivery part has already been covered in previous sections/modules.
- The main goal of the CD is to shorten deployment cycles to production and deploy confidently.

<DevOpsRoleTopics>

- Frankly speaking, as the CD is the latest step in the pipeline, many companies don't have 100% automated Continuous Deployment. For many reasons, it's preferred to make at least one manual step with human approval, especially before deploying to the production environment. Aiming for a 90% automated CD pipeline is more than enough for most cases.
- It's a common practice (not necessarily good) in the market to use CI tools for the CD, like GitHub Actions and Jenkins. However, a better approach is usually using a dedicated tool for CD.
- There are two common CD models: the `Push Model` and the `Pull Model`. In the **push mode**, the CD system gets the code artifacts and pushes the update to the target environment (e.g., production servers or Kubernetes clusters). In the **pull mode**, the CD system works within the target environment, detects the changes in the code artifacts, and deploys the updates in that environment (this model is more common in the Kubernetes ecosystem).
- There are many types of CD, like Rolling, Blue-Green, and Canary deployments.
- Different CD systems like [Argo CD](https://argo-cd.readthedocs.io/en/stable/), [Flux CD](https://fluxcd.io/), and more exist.
- It's better to use a Cloud-Native CD system, but in general, the system doesn't matter as long as you understand the CD principles and practices.

</DevOpsRoleTopics>

### Resources {#67-resources}

- [Continuous integration vs. delivery vs. deployment - Atlassian](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
- [Continuous Delivery vs Continuous Deployment: Core Differences - BrowserStack](https://www.browserstack.com/guide/continuous-delivery-vs-continuous-deployment)

## 6.8 Continuous Deployment - GitOps and Argo CD Essentials

<p align="center">
  <img class="section-cover-image" title="Reconciliation loop" alt="Reconciliation loop" border="0" width="90%" src="/img/reconciliation-loop.png"/>
</p>

### Audience {#61-audience}

<TargetAudience roles={['devops']} />

### What you need to know {#68-what-you-need-to-know}

<DevOpsRoleTopics>

- As the popularity of CI/CD grew and became an industry standard, more dedicated Continuous Deployment solutions appeared (like Argo CD), and modern practices were introduced (like GitOps).
- Let's start with `GitOps`:
  - It is a modern approach to managing infrastructure and application deployments declaratively. It's an important practice in continuous deployment.
  - It uses Git as a `Single Source of Truth`. No manual and untracked work should be done outside Git, and all changes should be tracked via Git.
  - It mainly relies on the `Declarative Style` of Infrastructure as Code, where the configurations are described as the desired state, and some systems (like Kubernetes) take care of bringing the actual state to match that desired state. The `Imperative Style` could still be used in some cases, but it's not recommended.
  - GitOps tools like Argo CD continuously monitor the Git repository and detect any drift, and the system attempts to reconcile the state to the desired state.
- Switching to `Argo CD`:
  - It's one of the tools that use the GitOps approach to applying Continuous Deployment.
  - It's Kubernetes Native (works only on Kubernetes) and uses a pull model to apply the changes.
  - You can use Argo CD to deploy Helm chart, Kustomize resource, or plain Kubernetes manifest (read more about [Kubernetes Configuration Management](../module-05/#56-containers---kubernetes-configuration-management)).
  - Like most (if not all) GitOps tools, at the core, it uses a declarative style to deploy any software to Kubernetes using Argo CD [Application object](https://argo-cd.readthedocs.io/en/latest/operator-manual/app-any-namespace/).
  - Even though it's recommended to use the declarative manifests to interact with Argo CD, it's still possible to use its UI. Of course, making any changes on the fly from there is against the GitOps approach (really avoid doing that).
  - Argo CD has many useful [plugins](https://argo-cd.readthedocs.io/en/stable/operator-manual/config-management-plugins/), and you can even write your own from a basic shell script, advanced code, or even your deployment tool. But before writing one, ensure that it's not already there.

</DevOpsRoleTopics>

:::tip
Don't mix between "Argo CD" and other [Argo projects](https://argoproj.github.io/) like "Argo Workflows", "Argo Rollouts", and "Argo Events"! They are totally different projects serving different purposes.
:::

### Resources {#68-resources}

- [GitOps Continuous Deployment for cloud native applications - GitOps.tech](https://www.gitops.tech/)
- [Argo CD Best Practices - Argo CD Docs](https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/)

## Quiz

<Quiz data={QuizData}/>

## Hands-on

Follow the instructions in the [HiveBox project phase 6](../../projects/hivebox#phase-6).

## Interview Questions

Review the interview questions related to [Module 6](../../interview/common-questions#module-6).

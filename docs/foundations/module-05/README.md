---
title: "Module 5: Transform - Finishing the Structure"
sidebar_label: "5. Transform - Finishing the Structure"
description: "Refine goals, integrate code with external systems, and write integration tests. Also, utilize Infrastructure as Code, learn Terraform essentials, and Kubernetes configuration management like Helm and Kustomize. Then, implement CD best practices — and finally, a hands-on with the HiveBox project"
toc_max_heading_level: 2
---

import ModuleHeader from '@site/src/components/ModuleHeader';
import {DevOpsRoleTopics, TargetAudience} from '@site/src/components/Audience';
import Quiz from '@site/src/components/Quiz';
import QuizData from './module-05-quiz.json';

<ModuleHeader />

<p align="center">
  <img class="module-overview-image" alt="Module Overview" border="0" width="90%"
    src={require('./module-05-overview.png').default} />
</p>

## Module Overview

- Refine goals and requirements.
- Integrate code with external systems and write integration tests.
- Utilize Infrastructure as Code, learn Terraform essentials and Kubernetes configuration management like Helm and Kustomize.
- Apply Continuous Delivery best practices.
- Implement the progressive hands-on project, HiveBox phase 5.
- Focus areas: Planning (12.5%), Code (25%), Infrastructure (25%), Containers (12.5%), Observability (12.5%), Continuous Delivery (12.5%).

## 5.1 Planning - Refine the Goals and Requirements

<img class="img-right" align="right" width="25%" src="/img/topics/planning.png"></img>

### Audience {#51-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#51-what-you-need-to-know}

- At this point, you should have a working [project](../../projects/hivebox). It might not be perfect but good enough as start. Now it's time to start polishing it.
- First of all, you need to align with the business objectives. Is the project still relevant? Has the business changed direction, which requires changes in the tech side? Ensuring that the goals and requirements are aligned with the business means understanding the business context, market demands, and how you, as a DevOps engineer, can drive value to the company.
- OK, let's assume there have been no changes in the business directions. Now, it's essential to review the goals according to user feedback. You need to gather user feedback after using the first version of the solution you developed.
- Mostly, DevOps Engineers' users are other teams in the organization, but it could also be useful to get the end-users feedback via Product Owners/Managers.- You will refine your solution based on the business directions and user feedback. Establishing cross-functional collaboration with other teams (especially with the QA team) is also vital to ensure smooth end-to-end deliverability.
- From now on, you need to start building continuous feedback loops. They could have a simple structure, such as recutting meetings with different teams. We will cover this topic in detail in the next module.
- In general, planning should be considered a moving target. Goals should always be iterated to ensure they meet the requirements.

### Resources {#51-resources}

- [Backlog Refinement Guide: How to & tips to be successful - Atlassian](https://www.atlassian.com/agile/scrum/backlog-refinement)
- [5 Strategies for Product Backlog Refinement - Scrum.org](https://www.scrum.org/resources/blog/5-strategies-product-backlog-refinement)
- [Microservices are small, autonomous services that work together](https://www.youtube.com/watch?v=GBTdnfD6s5Q)
- [Microservices - Martin Fowler - GOTO 2014](https://www.youtube.com/watch?v=wgdBVIX9ifA)
- [Microservices • Martin Fowler • YOW! 2016](https://www.youtube.com/watch?v=z8qhToMtYRc)

## 5.2 Code - Working with External Systems

<img class="img-right" align="right" width="25%" src="/img/topics/code.png"></img>

### Audience {#52-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#52-what-you-need-to-know}

- As a DevOps Engineer, you will work or integrate with external systems using code or tools. Those external systems could be third-party APIs, databases, cloud services, or microservices.
- You will mostly use REST APIs to interact with those services, but there are many ways to communicate with those systems according to each use case.
- Here, we will cover some essential points when working with external systems programmatically.
  - If it's a known system, it's usually better to use a library or SDK for that system. Don't write everything from scratch.
  - Ensure to handle errors and rate limits. Know how to implement rate-limiting strategies (e.g., exponential backoff).
  - Ensure you handle paginated responses (e.g., retrieving data in chunks), especially if you expect a big load of data.
  - Use caching whenever possible. Don't hummer the systems with unnecessary calls.
  - Always use secure connection with external systems even if the use case is trivial.
  - Not every connection should be synced; you could use async communication by using message queues to deal with lagging and latency under pressure.

### Resources {#52-resources}

- [System Integration: Types, Approaches, and Implementation Steps - AltexSoft](https://www.altexsoft.com/blog/system-integration/)
- [System Integration vs Software Development - Budibase](https://budibase.com/blog/app-building/system-integration-vs-software-development/)

## 5.3 Code - Writing Integration Tests

### Audience {#53-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#53-what-you-need-to-know}

- The second level of the tests is the `Integration Test`. Its primary role is to ensure that different components or modules of your system work well together. To have a good integration test, you need to remember a couple of points.
- As usual, start with basic tests, then extend the test scenarios as you go.
- Tests should be as simple as possible; otherwise, you will end up with complex test code that needs another test to ensure it's working as expected!
- Ensure maintainability and readability using well-known tools and frameworks, and avoid writing your own code as a test framework.
- Always try to use real systems and avoid mocking too much. For example, if you are testing interactions with a database, run an actual database instance and code test against it.
- Always verify both paths to success and failure! Don't test the happy path only.
- Try to run the integration tests in an environment as close as possible to production, at least one that has the same technology as production. For example, if you are using containers in production, then the integration tests should also be run in containers.
- Try to use realistic (but minimal) test data to cover a variety of cases like your real users (e.g., using factories and/or fixtures).
- As much as possible, isolate tests from each other so you get accurate results. Each test group should be independent and not rely on other test groups' actions.
- Remember the external services (third-party APIs) when you write integration tests. Use sandbox or test environments provided by these services, or simulate them with API stubs (check the previous section about [Working with External Systems](#52-code---working-with-external-systems)).
- By default, tests should be integrated with CI/CD pipelines and run automatically after each commit or before merging. But also think about providing an easy way to run locally.

### Resources {#53-resources}

- [What is Integration Testing - BrowserStack](https://www.browserstack.com/guide/integration-testing)
- [The Complete Guide to Integration Testing - HubSpot](https://blog.hubspot.com/marketing/integration-testing)

## 5.4 Infrastructure - Infrastructure as Code and Configuration Management

<img class="img-right" align="right" width="25%" src="/img/topics/infrastructure.png"></img>

### Audience {#54-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#54-what-you-need-to-know}

- As a DevOps Engineer, you will hear (and use) the term "Infrastructure as Code" (IaC) a lot. And that's for a good reason, as it's considered one of the DevOps cores. You will also hear about tools like [Terraform](https://www.terraform.io/), [Crossplane](https://www.crossplane.io/), and [Pulumi](https://www.pulumi.com/).
- In simple words, IaC allows you to manage and provide infrastructure resources (servers, networks, storage) using a code-like approach, which takes different forms.
- So, instead of provisioning infrastructure manually (either via CLI or UI), you use machine-readable definition files (like YAML, JSON, or other DSL files like HCL) to create and configure the infrastructure.
- Mostly, IaC is stored in a Source Code Management system like `Git`. However, IaC is less about using Git and more about the following:
  - **Idempotent**: IaC works better when it's idempotent, which means it can produce the same outcome every time it runs. This reduces the risk of errors with every run, makes the outcome always predictable, and avoids side effects.
  - **Declarative**: IaC works better when it's declarative (opposite to imperative) because that approach simplifies using IaC and moves the control flow logic to the IaC tool instead of dealing with it every time in the IaC.
  - **Domain-specific language (DSL)**: There are two approaches to writing IaC: either using tools that utilize DSLs like Terraform and Crossplane or using tools that utilize programming languages like Pulumi and AWS CDK.

<DevOpsRoleTopics>

- Without going into much detail about [what's declarative and what's not](https://leebriggs.co.uk/blog/2022/07/20/nobody-knows-what-declarative-is) ... you should look for tools that allow you to state how you want your infrastructure to look like [Terraform](https://www.terraform.io/) or [Crossplane](https://www.crossplane.io/) and use DSL for simplicity.
- In all cases, using imperative scripts in any language (Bash, Python, etc.) is not recommended; that's not the ideal IaC and will hit you hard in the future when you try to automate the IaC via GitOps (it will be covered in the following modules).
- Finally, in the current container era, Configuration Management tools like Ansible and SaltStack are less and less used in favor of a container ecosystem. In this roadmap, we will not cover them; learn one of them when you need it (Ansible is highly recommended).

</DevOpsRoleTopics>

### Resources {#54-resources}

- [What is Infrastructure as Code? - IaC Explained - AWS](https://aws.amazon.com/what-is/iac/)
- [What is Infrastructure as Code with Terraform? | HashiCorp](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code)

## 5.5 Infrastructure - Terraform Essentials

### Audience {#55-audience}

<TargetAudience roles={['devops']} />

### What you need to know {#55-what-you-need-to-know}

<DevOpsRoleTopics>

- Terraform is one of the key players in the infrastructure-as-code market. It's arguably the most popular IaC tool with multi-cloud support.
- Terraform is known for the following:
  - **Extensible**: It uses `Providers` (think of them as `plugins`), which allow Terraform to work with different systems, such as Cloud providers or applications like PostgreSQL.
  - **Declarative**: It uses a declarative approach via its DSL called `HashiCorp Configuration Language (HCL)` (JSON is also supported), where you define what the desired infrastructure should look like (e.g., "create three AWS EC2 instances") rather than describing how to achieve it.
  - **Stateful**: It has a source of truth as a state file `terraform.tfstate` to keep track of the current infrastructure. Terraform compares the actual state of the infrastructure with the desired state defined in the configuration files.
  - **Modular**: It supports and recommends using modules, which allow you to abstract and reuse infrastructure patterns across multiple projects and reduce code duplication.
- We will not dive into the hands-on; you will find that in the resources section. However, you should remember a couple of points when you start using Terraform.
- First, if you build any work environment, never use local state files; always store the state on an S3-compatible service (AWS S3, GCP Cloud Storage, Azure Blob Storage, etc.).
- Don't Repeat Yourself (DRY)! Don't write Terraform HCL code unless it's needed! [Terraform Registry](https://registry.terraform.io/) has many modules, and most popular cloud providers have official modules there. For example, use [AWS EKS module](https://registry.terraform.io/modules/terraform-aws-modules/eks/aws/latest) to create the EKS cluster.
- As the containers ecosystem grows, Terraform's use of pure infrastructure is limited, such as by creating a Kubernetes cluster and cloud database. But once you have a Kubernetes cluster, use the Kubernetes tools (i.e., don't set up Kubernetes apps using Terraform!).
- Remember to apply and enforce Terraform best practices in your CI pipelines, such as validating, formatting, linting, and securing Terraform IaC.
- Terraform is a big topic, but that's the starting point. As usual, start small and expand.

</DevOpsRoleTopics>

### Resources {#55-resources}

- [Terraform Tutorial – Getting Started With Terraform - Spacelift](https://spacelift.io/blog/terraform-tutorial)
- [Terraform Tutorial for Beginners + Labs: Complete Step by Step Guide! - KodeKloud](https://www.youtube.com/watch?v=YcJ9IeukJL8)
- [Validate, format, lint, secure, and test Terraform IaC - Ahmed AbouZaid](https://tech.aabouzaid.com/2020/04/validate-format-lint-and-test-terraform-iac-ci.html)

## 5.6 Containers - Kubernetes Configuration Management

<img class="img-right" align="right" width="25%" src="/img/topics/containers.png"></img>

### Audience {#56-audience}

<TargetAudience roles={['devops']} />

### What you need to know {#56-what-you-need-to-know}

<DevOpsRoleTopics>

- As the containers ecosystem grows, Kubernetes becomes the new platform. Hence, once you have a Kubernetes cluster up and running, you should do everything the Kubernetes way.
- There are many tools for Kubernetes configuration management, but the most popular are:
  - [Plain-Kubectl](https://kubernetes.io/docs/reference/kubectl/): The offical CLI tool communicating with a Kubernetes cluster's control plane, using the Kubernetes API.
  - [Kustomize-Kubectl](https://kustomize.io): Part of Kubectl which uses a template-free approach where it patches and merges Kubernetes manifests.
  - [Helm](https://helm.sh/): It is not part of the Kubernetes project, but it's a de facto standard tool that uses a template approach. A chart contains templates with placeholders that are replaced when it's rendered.
- You will probably use more than one tool to manage Kubernetes configuration.
- Always remember that Kubernetes configuration is still an Infrastructure as Code, and it should follow the same practices mentioned in the previous sections, like using a declarative approach and always keeping automation in mind, even if you haven't used any automation yet.

</DevOpsRoleTopics>

### Resources {#56-resources}

- [Application Configuration Management in Kubernetes - Giant Swarm](https://www.giantswarm.io/blog/application-configuration-management-in-kubernetes/)
- [Managing Kubernetes Resources with Kustomize - INNOQ](https://www.innoq.com/en/blog/2022/04/kustomize-introduction/)
- [Introduction to Helm - Helm Docs](https://helm.sh/docs/intro/)
- [3 ways to customize off-the-shelf Helm charts with Kustomize - Ahmed AbouZaid](https://tech.aabouzaid.com/2020/09/3-ways-to-customize-off-the-shelf-helm-charts-with-kustomize-kubernetes.html)

## 5.7 Observability - Log Aggregation Systems

<img class="img-right" align="right" width="25%" src="/img/topics/observability.png"></img>

### Audience {#57-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#57-what-you-need-to-know}

- Logging is the second pillar of observability (`logs`, `metrics`, and `traces`). As mentioned before, each one works differently and serves a different purpose.
- As modern infrastructure becomes more complex, it's essential to have a centralized login system for monitoring and analyzing the running systems.
-  the running systems.
- Applications logs are a rich source of information that could be beneficial for debugging, troubleshooting, and even reliability (e.g., monitoring error rate in the logs).
- Usually, you don't want to alert on the logs if the metrics are already available. Still, you will need to do that in many cases, like when the application metrics are limited or when watching certain log patterns (e.g., repeated errors or failed service calls).
- A centralized logs system will simplify access, debugging, and correlating events across systems. It will also be easier to manage log retention.
- There are different types of logs: `Structured`, `Unstructured`, and `Semi-Structured`, learn about each one.

<DevOpsRoleTopics>

- The following are some essential points to remember when working with logs:
  - Always use the `Structured` whenever supported because it makes everything easier (store, query, and analysis).
  - Avoid parsing logs with regex as much as possible. First, check if the log type already has a parser.
  - Enrich logs with all needed metadata to be independent so that at any point in time, it's possible to understand them with no or minimal background about the logs producer.
  - Ensure that sensitive information (e.g., personal data, credentials) is anonymized before being stored and that you follow compliance regulations like GDPR.
  - Capture relevant logs only; otherwise, you will end up with a log swamp. That will reduce costs and make search in logs more efficient.
- There are many logging solutions on the market, but if you have the choice, stick with the Cloud provider logging service or [Grafana Loki](https://grafana.com/oss/loki/).

</DevOpsRoleTopics>


### Resources {#57-resources}

- [The Three Pillars of Observability - Sematext](https://sematext.com/glossary/three-pillars-of-observability/)
- [Log Aggregation: Everything You Need to Know for Aggregating Log Data - Splunk](https://www.splunk.com/en_us/blog/learn/log-aggregation.html)
- [What are unstructured, structured, and semi-structured data types? - Matillion](https://www.matillion.com/blog/what-are-unstructured-structured-and-semi-structured-data-types)

## 5.8 Continuous Delivery - CD Best Practices

<img class="img-right" align="right" width="25%" src="/img/topics/continuous-delivery.png"></img>

### Audience {#58-audience}

<TargetAudience roles={['devops', 'software']} />

### What you need to know {#58-what-you-need-to-know}

- As mentioned previously, `CD` could refer to two different things: `Continuous Delivery` and `Continuous Deployment`. They are usually used interchangeably, but in reality, they are two distinct stages.
- Here, we are covering `delivery` only (Continuous deployment will be covered in the next module), where code changes are automatically prepared for release to multiple environments, especially production if they are a service or public if they are an artifact.
- The following are some CD best practices to remember:
  - Like in CI, automation is the key to effective CD. Automate as much of the CD pipeline as possible.
  - Test the software the same way your customers will use it. Try to reduce drift between the test and real cases/environments.
  - Build your artifacts once and promote them through the stages of your test pipelines so you are sure you test exactly the same thing.
  - Ensure that each test environment is independent and doesn't influence others.
  - Measure and monitor as much as possible. Treat your continuous delivery stages like production (or as close as possible) because, by the end of the pipeline, they will be just one step away from production.
  - Collect human feedback and iterate! Don't rely solely on the system's feedback; always remember to get insights from the human side, such as developers and production users.
- Always remember that CD is about continuous learning and improving the speed, quality, and reliability of your software delivery process.
- Usually, you will use the same continuous integration solution for continuous delivery, so stick with GitHub Actions for that (but for continuous deployment, another solution will be used in the next module).

### Resources {#58-resources}

- [How to keep up with CI/CD best practices - Continuous delivery best practices - GitLab](https://about.gitlab.com/blog/2022/02/03/how-to-keep-up-with-ci-cd-best-practices/#continuous-delivery-best-practices)
- [What is Continuous Delivery? Tools and Best Practices - XenonStack](https://www.xenonstack.com/insights/what-is-continuous-delivery)

## Quiz

<Quiz data={QuizData}/>

## Hands-on

Follow the instructions in the [HiveBox project phase 5](../../projects/hivebox#phase-5).

## Interview Questions

Review the interview questions related to [Module 5](../../interview/common-questions#module-5).

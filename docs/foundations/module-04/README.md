---
title: "Module 4: Expand - Constructing a Shell"
sidebar_label: "4. Expand - Constructing a Shell"
description: "Review goals in planning, then apply the Twelve-Factor App methodology and REST API best practices. Embrace Kubernetes for container orchestration. Then explore observability, dive into continuous delivery solutions, also an overview of Cloud Computing — and finally, a hands-on with the HiveBox project"
---

[🗂 Back to the Roadmap Index](../../getting-started#roadmap-index)

<p align="center">
  <img alt="Module Overview" border="0" width="90%" src={require('./module-04-overview.png').default} />
</p>

## 4.1 Planning - Review the Goals and Requirements

<img class="img-right" align="right" width="25%" src="/img/topics/planning.png"></img>

### What you need to know {#41-what-you-need-to-know}

- In the previous module, you should decided which Agile methodology you will use. You should create some sort of board to use (we will use [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)).
- At this point, you need to review the goals and requirements. In other words, what has been achieved and what do you want to achieve from this phase?
- The first thing is to define the work scope and deliverables to avoid scope creep and ensure all requirements will be met on time.
- After that, you set a realistic timeline of the work. For example, when you will work on the project and how much time do you allocate for it?
- Now you should `what` and `when` the next step is to communicate the plan and write it down in your project management platform (GitHub Projects in that case).
- It should be easy for any newcomer to understand the plan and to know its main directions.
- The next is to start working on the plan.

### Resources {#41-resources}

- [Agile Goal Setting: How to Get Started - Insights for Professionals](https://www.insightsforprofessionals.com/management/leadership/agile-goal-setting-how-to-get-started)
- [Agile Planning: А Step-by-Step Guide with Examples - Businessmap](https://businessmap.io/agile/project-management/planning)

## 4.2 Code - Twelve-Factor App Methodology

<img class="img-right" align="right" width="25%" src="/img/topics/code.png"></img>

### What you need to know {#42-what-you-need-to-know}

- In 2011 a manifest called [Twelve-Factor App methodology](https://12factor.net/) was introduced as a set of best practices for building modern, scalable, and maintainable web applications.
- The 12-factor app methodology is meant to standardize how applications should be developed to take full advantage of cloud environments.
- After more than a decade of that manifest, it's considered the minimal for all applications. You might not need to apply all of them, especially in a small code base, but they should always be in mind during architecting and implementation.
- Here we will just list the 12 factors, but ensure to read the page of each of them.
  1.  **Codebase**: One codebase tracked in revision control, many deploys.
  2.  **Dependencies**: Explicitly declare and isolate dependencies.
  3.  **Config**: Store config in the environment.
  4.  **Backing** services: Treat backing services as attached resources.
  5.  **Build, release, run**: Strictly separate build and run stages.
  6.  **Processes**: Execute the app as one or more stateless processes.
  7.  **Port binding**: Export services via port binding.
  8.  **Concurrency**: Scale out via the process model.
  9.  **Disposability**: Maximize robustness with fast startup and graceful shutdown.
  10. **Dev/prod parity**: Keep development, staging, and production as similar as possible.
  11. **Logs**: Treat logs as event streams.
  12. **Admin processes**: Run admin/management tasks as one-off processes.
- Remember, those are the bare minimum, and there are many other points to consider.

### Resources {#42-resources}

- [The Twelve-Factor App methodology](https://12factor.net/)
- [Beyond the 12 factors: 15-factor cloud-native Java applications - IBM Developer](https://developer.ibm.com/articles/15-factor-applications/) (there is also a small book called [Beyond the Twelve-Factor App](https://www.oreilly.com/library/view/beyond-the-twelve-factor/9781492042631/) for further reading).

## 4.3 Code - REST API Best Practices

### What you need to know {#43-what-you-need-to-know}

- In Linux/Unix, you probably heard that `Everything is a file`. In Kubernetes and many other modern software, `Everything is an API`!
- As a DevOps Engineer, you probably will not write code daily. However, it's essential to understand the API concept and how it works because when you write code, it's likely to be a REST API.
- Understanding APIs and having `API Thinking` will greatly help you as a DevOps engineer because today's world is the API era.
- `API First` thinking will help you write better code. Define API first, then develop its implementation.
- The resources section has more details about the API, and the roadmap code project is all around APIs.

### Resources {#43-resources}

- [Best practices for REST API design - Stack Overflow](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [Best Practices in API Design - Swagger](https://swagger.io/resources/articles/best-practices-in-api-design/)
- [RESTful API and Event Guidelines - Zalando](https://opensource.zalando.com/restful-api-guidelines) (nice to read)

## 4.4 Continuous Integration - CI Best Practices

<img class="img-right" align="right" width="25%" src="/img/topics/continuous-integration.png"></img>

### What you need to know {#44-what-you-need-to-know}

- Continuous Integration was covered in the previous module. Now it's time to learn more about its best practices.
- CI is meant to help you produce high-quality software, so it should be done correctly.
- The resources section has more details about the best practices, but here are some essential points to remember.
  - CI by design should be automated, no manual actions are needed to run CI.
  - Start with a basic CI pipeline, then extend it according to your needs.
  - The CI pipelines should be fast! Utilize all options like caching and parallelism to speed up the CI.
  - Being fast doesn't necessarily mean "costly"! There are many setup options to keep the costs under control, such as using Cloud Spot/Preemptible instances (that could save up to 90% of the costs).
  - Run CI pipelines on every commit, but ensure to scope the runs based on the paths in the repo. For example, if you have multiple apps or tools in the same repo, only the pipelines related to the apps changed by the commit should run.
  - Ensures the main branch is always deployable. You should be able to deploy from the main branch at any point.
  - Fail fast, fix fast. It's better to stop the pipeline execution as early as possible when there is a critical issue or when the following steps will fail because of the initial steps. But remember, that's not always the case! Sometimes, it's better to run the pipeline to the end and fix all issues together (it depends on the use case and work environment).
  - Always try to make the CI environment (and test environment in general) as close as possible to production. You want to test your software as it will run in production.
  - Regularly review and refine CI processes based on the changes in the business and requirements. Creating CI pipelines is not a one-time thing.

### Resources {#44-resources}

- [Continuous integration best practices - GitLab](https://about.gitlab.com/topics/ci-cd/continuous-integration-best-practices/)
- [11 CI/CD Best Practices for DevOps Success - Codefresh](https://codefresh.io/learn/ci-cd/11-ci-cd-best-practices-for-devops-success/)

## 4.5 Containers - Kubernetes Overview and Core Concepts

<img class="img-right" align="right" width="25%" src="/img/topics/containers.png"></img>

### What you need to know {#45-what-you-need-to-know}

- Arguably, Kubernetes is one of the best tech inventions of the last ten years, having reshaped the whole tech scene. But first, we need to know what problem Kubernetes is trying to solve.
- The [CNCF Annual Survey 2022](https://www.cncf.io/reports/cncf-annual-survey-2022/) showed a segneficat year-over-year (YOY) increase of using Kubernetes in production. And [CNCF Annual Survey 2023](https://www.cncf.io/reports/cncf-annual-survey-2023/) showed even more rapid adoption of Kubernetes.

- When the Docker container was introduced in 2013, and many companies adopted the new technology, everything changed, from developing code to working in containers to deploying, monitoring, and operating the software.
- Hence, the need for a new system emerged to deal with this new ecosystem. And that is exactly what happened. Many systems were born to solve this problem ... "How to manage the containers [in production]?" which implies "How to create and manage Cloud-native software?".
- Many systems entered the race, and Kubernetes was the winning horse. Since then, Kubernetes (aka K8s) has been the leading container management platform.
- Kubernetes has many features like open-source, no vendor lock-in, maturity, extensive community and ecosystem, and extensible architecture.
- Those features are translated into the following
  - Support a lot of features out-of-the-box.
  - Easy to automate manual tasks and processes.
  - Help to manage massive infrastructure with less effort.
  - Increased productivity and speed up the development cycle.
  - Efficiency in managing infrastructure and reducing costs.
  - Scalability and modularity are supported efficiently.
- Kubernetes has become the *de facto* standard for container orchestration and is widely adopted in private and public sectors. According to a survey by the [Cloud Native Computing Foundation (CNCF) 2023](https://www.cncf.io/reports/cncf-annual-survey-2023/), **66% of consumers were using Kubernetes in production** and **18% were evaluating it** (84% total).

<img class="img-right img-round-corners" align="right" width="40%" src={require('./4.5-kubernetes-core-concepts.png').default} ></img>

- Let's have a quick overview about Containers, Docker, and Kubernetes Containers:
  - **Containers:** Technology for packaging an application and its Docker runtime dependencies.
  - **Docker:** A de facto standard to build and share containerized apps.
  - **Kubernetes:** A cloud-native platform to manage and orchestrate container workloads.
- Kubernetes core concepts:
  - **Cluster:** A collection of nodes grouped together to share resources and balance workloads.
  - **Node:** The computing unit in Kubernetes is easily thought of as one individual machine that runs Pods.
  - **Pod:** A logical host with a collection of one or more containers, the smallest computing unit in Kubernetes.
- In the next module, we will dive more into Kubernetes and how to use it.

### Resources {#45-resources}

- [Kubernetes in 5 mins - VMware Cloud Native Apps](https://www.youtube.com/watch?v=PH-2FfFD2PU)
- [Learn Kubernetes Basics - Kubernetes Docs](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- [Introduction to Kubernetes course - Linux Foundation](https://training.linuxfoundation.org/training/introduction-to-kubernetes/).

## 4.6 Observability - Monitoring Application and Infrastructure

<img class="img-right" align="right" width="25%" src="/img/topics/observability.png"></img>

### What you need to know {#46-what-you-need-to-know}

- A wise person once said, "**You can't manage what you can't measure.**" Maybe it's not always the case, but in the DevOps world, observability plays a major role. Basically, if you don't monitor your managed resources, you will just be walking into darkness!
- As a start, you need to know the 3 pillars of observability which are `logs`, `metrics`, and `traces`. Each one of them works differently and serves a different purpose.
- Observability is crucial for both application and infrastructure. DevOps teams can detect and troubleshoot issues faster, ensuring higher reliability and stability.
- Ultimately, observability helps to reduce downtime, enhance user experience, and optimize resource utilization and costs.
- Like everything in this roadmap, start small, then expand. Start with essential metrics monitoring and basic alerts, then add more of the observability components.
- The most known open-source tools in this domain are [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/).

### Resources {#46-resources}

- [What is observability? - Grafana](https://grafana.com/docs/grafana-cloud/introduction/what-is-observability/)
- [Logs vs Metrics vs Traces - Engineering Fundamentals Playbook](https://microsoft.github.io/code-with-engineering-playbook/observability/log-vs-metric-vs-trace/)
- [The Three Pillars of Observability - Sematext](https://sematext.com/glossary/three-pillars-of-observability/)
- [The Site Reliability Workbook -Chapter 4 - Monitoring](https://sre.google/workbook/monitoring/)

## 4.7 Continuous Delivery - Introduction and Solutions in the Market

<img class="img-right" align="right" width="25%" src="/img/topics/continuous-delivery.png"></img>

### What you need to know {#47-what-you-need-to-know}

- In simple words, `Continuous Delivery` is a practice where code changes are automatically prepared for release to multiple environments, especially production. This involves deploying all code changes to a testing environment and then to a production-like environment after passing automated tests, ensuring the software is always in a deployable state.
- Following CD practices allows teams to deliver new features and bug fixes more safely and quickly to users, reducing the risk of deployment errors.
- It's important to know that `CD` could refer to two different things: `Continuous Delivery` and `Continuous Deployment`. They are usually used interchangeably, but in reality, they are two different stages.
- In many cases, the same [Continuous Integration solutions](../module-03#36-continuous-integration---introduction-and-solutions-in-the-market) could be used for continuous delivery/deployment; however, there are specialized solutions that work best for CD.
- There are different CD systems, most famous ones within the Kubernetes ecosystem are [Argo CD](https://argo-cd.readthedocs.io/) (we will use that one) and [Flux CD](https://fluxcd.io/).
- The system doesn't matter as long as you understand the CD principles.
- The CD is a critical practice for modern software development for faster delivery. However, using a dedicated system could be postponed until your project is more mature. So, until then, use the CI solution as a start for the CD.

### Resources {#47-resources}

- [The fundamentals of continuous deployment in DevOps - GitHub](https://github.com/resources/articles/devops/ci-cd-deployment)
- [Continuous delivery principles - Atlassian](https://www.atlassian.com/continuous-delivery/principles)

## 4.8 Infrastructure - Cloud Computing and Cloud Native Applications

<img class="img-right" align="right" width="25%" src="/img/topics/infrastructure.png"></img>

### What you need to know {#48-what-you-need-to-know}

- The term `Cloud Computing` refers to a service delivery model where software, storage, and computing power are made available over the internet to users on demand. In this model, users do not own or manage the physical infrastructure that supports these resources but instead access them as a utility provided by a third-party service provider.
- Cloud computing could be categorized into three groups:
  - **Public Cloud** is a computing environment owned and operated by a third-party Cloud services provider, such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform. Public clouds are designed to be accessed over the Internet and are generally available to any organization or individual who wants to use them.
  - **Private Cloud** is a computing environment owned and operated by a single organization for exclusive use. Private clouds can be implemented on-premises or hosted by a third-party provider. It offers the benefits of Cloud computing, such as scalability and flexibility, but with the added security and control of an on-premises environment.
  - **Hybrid Cloud** is a computing environment that combines public and private clouds. It allows organizations to use the best of both worlds by using public clouds for specific workloads and private clouds for others.
- Cloud computing has different management modes; there are three main types which are:
  - **Infrastructure as a Service (IaaS)** provides users with access to virtualized computing resources, such as virtual machines, storage, and networking.
  - **Platform as a Service (PaaS)** provides users access to a platform for developing, testing, and deploying applications.
  - **Software as a Service (SaaS)** provides users with access to software applications that can be used over the Internet without the need to install and maintain the software on their computers.
- The term `Cloud-Native` refers to the architecture and design of an application built specifically to take advantage of the Cloud computing model. In other words, a Cloud-Native application is designed to be scalable and resilient and take advantage of the automatic provisioning of resources provided by Cloud platforms.
- In general, Cloud-Native software works best on Cloud-Native platforms like Kubernetes, an open-source platform for automating the deployment, scaling, and management of containerized applications.

### Resources {#48-resources}

- [What Is Cloud Computing? - AWS](https://aws.amazon.com/what-is-cloud-computing/)
- [What is Cloud Native? - AWS](https://aws.amazon.com/what-is/cloud-native/)

## Project - HiveBox Phase 4

Follow the instructions in the [HiveBox project phase 4](../../projects/hivebox#phase-4).

## Interview Questions - Module 4

Review the interview questions related to [Module 4](../../interview/common-questions#module-4).

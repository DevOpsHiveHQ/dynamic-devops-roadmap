# Module 4: Expand - Constructing a Shell

[🗂 Back to the Roadmap Index](../../README.md#roadmap-index)

## 4.1 Planning - Review the Goals and Requirements

### What you need to know

- In the previous module, you should decided which Agile methodology you will use. You should create some sort of board to use (we will use [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)).
- At this point, you need to review the goals and requirements. In other words, what has been achieved and what do you want to achieve from this phase?
- The first thing is to define the work scope and deliverables to avoid scope creep and ensure all requirements will be met on time.
- After that, you set a realistic timeline of the work. For example, when you will work on the project and how much time do you allocate for it?
- Now you should `what` and `when` the next step is to communicate the plan and write it down in your project management platform (GitHub Projects in that case).
- It should be easy for any newcomer to understand the plan and to know its main directions.
- The next is to start working on the plan.

### Resources

- [Agile Goal Setting: How to Get Started - Insights for Professionals](https://www.insightsforprofessionals.com/management/leadership/agile-goal-setting-how-to-get-started)
- [Agile Planning: А Step-by-Step Guide with Examples - Businessmap](https://businessmap.io/agile/project-management/planning)

## 4.2 Code - Twelve-Factor App Methodology

### What you need to know

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

### Resources

- [The Twelve-Factor App methodology](https://12factor.net/)
- [Beyond the 12 factors: 15-factor cloud-native Java applications - IBM Developer](https://developer.ibm.com/articles/15-factor-applications/) (there is also a small book called [Beyond the Twelve-Factor App](https://www.oreilly.com/library/view/beyond-the-twelve-factor/9781492042631/) for further reading).

## 4.3 Code - REST API Best Practices

### What you need to know

- In Linux/Unix, you probably heard that `Everything is a file`. In Kubernetes and many other modern software, `Everything is an API`!
- As a DevOps Engineer, you probably will not write code daily. However, it's essential to understand the API concept and how it works because when you write code, it's likely to be a REST API.
- Understanding APIs and having `API Thinking` will greatly help you as a DevOps engineer because today's world is the API era.
- `API First` thinking will help you write better code. Define API first, then develop its implementation.
- The resources section has more details about the API, and the roadmap code project is all around APIs.

### Resources

- [Best practices for REST API design - Stack Overflow](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [Best Practices in API Design - Swagger](https://swagger.io/resources/articles/best-practices-in-api-design/)
- [RESTful API and Event Guidelines - Zalando](https://opensource.zalando.com/restful-api-guidelines) (nice to read)

## 4.4 Continuous Integration - CI Best Practices

### What you need to know

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

### Resources

- [Continuous integration best practices - GitLab](https://about.gitlab.com/topics/ci-cd/continuous-integration-best-practices/)
- [11 CI/CD Best Practices for DevOps Success - Codefresh](https://codefresh.io/learn/ci-cd/11-ci-cd-best-practices-for-devops-success/)

## 4.5 Containers - Kubernetes Overview and Core Concepts

### What you need to know

- 

### Resources

- 

## 4.6 Observability - Monitoring Application and Infrastructure

### What you need to know

- 

### Resources

- 

## 4.7 Continuous Delivery - Introduction and Solutions in the Market

### What you need to know

- 

### Resources

- 

## 4.8 Infrastructure - Cloud Computing and Cloud Native Applications

### What you need to know

- 

### Resources

- 

## 4.9 Project - HiveBox Phase 4

Follow the instructions in the [HiveBox project phase 4](../projects/hivebox/README.md#phase-4).

---

If you are done, [🗂 Back to the Roadmap Index](../../README.md#roadmap-index)

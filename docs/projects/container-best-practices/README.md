---
title: "Use-Case Project: Apply Docker Container Best Practices"
sidebar_label: "Docker Best Practices"
description: "How to work effectively with Docker with top ✅️ Dos & 🚫 Don'ts"
keywords: ["project", "mini project", "use-case", "container", "docker"]
image: /img/projects/container-best-practices.png
---

<p align="center">
  <img class="page-cover-image" title="Docker Container Best Practices" alt="Docker Container Best Practices" border="0" src="/img/projects/container-best-practices.png" />
</p>

## Situation

You got [a sample JavaScript application](https://github.com/docker/getting-started-app), it's a simple todo list manager that is running in Node.js, however, no real JavaScript experience is needed. We will just run it.

## Task

- Create a `Dockerfile` to containerize project.
- Apply Docker container best practices to work effectively with top ✅️ Dos & 🚫 Don'ts.
- Create a CI pipeline to automate the best practices checks.

## Requirements

Ensure the following best practices are applied.

- **Essential Practices**
  - Use Dockerfile linter
  - Check Docker language specific best practices
  - Create a single application per Docker image
  - Create configurable ephemeral containers

- **Image Practices**
  - Use optimal base image
  - Pin versions everywhere
  - Create image with the optimal size
  - Use multi-stage whenever possible
  - Avoid any unnecessary files

- **Security Practices**
  - Always use trusted images
  - Never use untrusted resources
  - Never store sensitive data in the image
  - Use a non-root user
  - Scan image vulnerabilities

- **Misc Practices**
  - Leverage Docker build cache
  - Avoid system cache
  - Create a unified image across envs
  - Use ENTRYPOINT with CMD

## Extras

Build:

```shell
docker build . -t docker-sample-app:v1
```

Run:

```shell
docker run -p 3000:3000 docker-sample-app:v1
```

View:

```
http://localhost:3000
```

## Resources

- [Containers - Docker Fundamentals](../../foundations/module-02/#27-containers---docker-fundamentals)
- [Containers - Docker Best Practices](../../foundations/module-03/#35-containers---docker-best-practices)
- [Continuous Integration - GitHub Actions Essentials](../../foundations/module-03/#37-continuous-integration---github-actions-essentials)
- [Continuous Integration - Pipelines and Quality Gates](../../foundations/module-03/#38-continuous-integration---pipelines-and-quality-gates)

## Reference

:::tip

Once you are done, compare your solution with the [reference](https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap/blob/main/docs/projects/container-best-practices/reference).

Ensure that you understand all aspects of the reference.
:::

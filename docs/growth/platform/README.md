---
sidebar_label: Platform
title: Platform Engineering - Advanced
description: Advanced Platform Engineering topics
sidebar_position: 5
---

This section will cover advanced Platform Engineering topics.

**Work in progress.**


## What is Platform Engineering?

Platform Engineering is the practice of designing and managing internal platforms that make it easier for developers and operations teams to build, test, and deploy software. These platforms provide self-service tools that simplify workflows, reduce repetitive tasks, and enable faster delivery.

At its core, Platform Engineering treats developers as customers and the platform as a product. This means prioritizing usability, reliability, and solving real-world developer challenges. By abstracting away the complexities of infrastructure, Platform Engineering empowers developers to focus on delivering business value through software.

---

## How is Platform Engineering Different from DevOps?

While closely related, Platform Engineering and DevOps are distinct disciplines:

- **DevOps**: Focuses on culture and practices to improve collaboration between development and operations teams. It emphasizes breaking down silos, automating workflows, and delivering software quickly and reliably.
- **Platform Engineering**: Focuses on building the tools and systems that enable DevOps practices. It provides developers with easy-to-use, standardized workflows and resources that streamline software delivery.

**In short**: DevOps is about culture and collaboration, while Platform Engineering builds the platforms and tools that support these practices.

---

## Key Responsibilities of a Platform Engineer

Platform Engineers design and maintain internal platforms that simplify development and operations. Their key responsibilities include:

- **Automation**: Eliminating repetitive tasks to improve efficiency and reduce errors.
- **Self-Service Enablement**: Providing developers with access to tools like CI/CD pipelines, monitoring systems, and cloud resources without relying on other teams.
- **Collaboration**: Working closely with developers and operations teams to understand their needs and pain points.
- **Standardization**: Creating consistent and predictable experiences across teams for software development and deployment.
- **Support and Training**: Assisting teams in using the platform effectively and maximizing its value.

---

## Key Concepts in Platform Engineering

### What is an Internal Developer Platform (IDP)?

An **Internal Developer Platform (IDP)** is a self-service layer built by platform teams to simplify software delivery. It integrates tools, automates workflows, and provides "golden paths"—standardized best-practice processes—to reduce complexity for developers.

The IDP is treated as a product, continually refined based on developer feedback to align with their evolving needs. This approach fosters collaboration, enhances productivity, and accelerates delivery.

**Example**: [Backstage](https://backstage.io/) by Spotify is a popular IDP that empowers developers with a unified platform for managing services and workflows.

**In nutshell**: An IDP gives developers a cohesive, user-friendly experience by combining the tools and processes they need into a single, streamlined platform.

---

### What are Golden Paths?

**Golden paths** are pre-defined, best-practice workflows for building, testing, and deploying software. They act as shortcuts that reduce complexity, save time, and ensure consistency across teams, while still allowing flexibility when necessary.

#### Why Golden Paths Matter:
- **Simplify Work**: Clear steps reduce confusion, so developers don’t have to figure everything out on their own.
- **Save Time**: Optimized workflows let developers focus on coding instead of setup or troubleshooting.
- **Ensure Consistency**: Standardized processes create predictable and reliable outcomes across teams.
- **Provide Flexibility**: Developers can follow the path or step off if unique needs arise.

**Example**: A golden path for deploying applications might include ready-to-use templates for CI/CD pipelines, automated monitoring setup, and infrastructure provisioning.

**In nutshell**: Golden paths are like shortcuts that help developers work faster and more effectively while staying aligned with best practices.

---

### What is Governance in Platform Engineering?

Governance in Platform Engineering refers to the rules and guidelines that ensure the platform is secure, reliable, cost-efficient, and easy for developers to use. It creates a balance between developer freedom and organizational control.

#### Key Elements of Governance:
- **Security**: Protecting the platform with access controls and safeguards against vulnerabilities.
- **Compliance**: Ensuring alignment with legal and regulatory requirements like data privacy standards.
- **Cost and Budget Management**: Tracking resource usage, optimizing efficiency, and enforcing spending limits to avoid waste and stay within budget.
- **Control and Access**: Defining roles and permissions to prevent misuse or accidental changes.

**In nutshell**: Governance in Platform Engineering sets guardrails, not roadblocks, allowing developers to work quickly and safely while staying aligned with company standards and budgets.


---

Resources:

 - [Platform Engineering book by by Camille Fournier, Ian Nowland](https://www.oreilly.com/library/view/platform-engineering/9781098153632/)
 - [Platform Engineering Blog](https://humanitec.com/blog)
 - [Platform Engineering Slack](https://platformengin-b0m7058.slack.com/join/shared_invite/zt-2gsxsc5hj-GbmJJNyyB2dqxhhGM6vjZw#/shared-invite/email)
---
sidebar_label: Cloud
title: Cloud Engineering - Advanced
description: Advanced Cloud Engineering topics
sidebar_position: 3
toc_max_heading_level: 2
---

This section will cover advanced Cloud Engineering topics like Multi Cloud, Cloud Agnosticism, and Edge Computing.

:::info
**Work in progress.**
:::

---

## FinOps

FinOps is an approach to optimizing cloud costs, ensuring financial accountability, efficiency, and resource management. It's based on understanding financial principles relevant to cloud computing, such as budgeting, forecasting, cost allocation, and billing.

According to [Gartner](https://www.gartner.com/en/information-technology/glossary/augmented-finops):

> FinOps applies the traditional DevOps concepts of agility, continuous integration and deployment, and end-user feedback to financial governance, budgeting, and cost optimization efforts. Augmented FinOps automates this process by applying artificial intelligence (AI) and machine learning (ML) practices -- predominantly in the cloud -- to enable environments that automatically optimize cost based on defined business objectives expressed in natural language.

Each Cloud provider has built-in services for FinOps like:

- **AWS:** Cost Explorer and AWS Budgets
- **Azure:** Cost Management
- **Google:** Cloud Billing

## FinOps - AWS

### What you need to know {#finOps-aws-what-you-need-to-know}

The following are some strategies to optimize AWS cloud costs.

**Networking:**
- Manage Data Transfer Costs: NAT gateways incur costs; in most cases, two subnets with 99.9% availability are sufficient. For 99.99% availability, use three subnets with three NAT gateways. Two subnets are generally sufficient for most scenarios.
- Remove IP v4 addresses that are unnecessary or associated with Network Interface Card (NIC).
- To reduce costs, use VPC endpoints to privately connect to supported AWS services and VPC endpoint services rather than rely on NAT gateways. Additionally, AWS PrivateLink is often required for other purposes, such as compliance, irrespective of cost considerations.

**Computing:**
- **Implement Instance Autoscaling**: Configure auto-scaling with Spot instances for worker nodes using [Karpenter](https://karpenter.sh/)  to dynamically adjust resources based on demand.
- **Use Reserved Instances and Savings Plans**: For most applications, optimize for a single node type, such as `m5a.large` or `m5a.xlarge`, to gain cost efficiencies through reserved capacity.
- **Rightsize Resources**: Regularly reassess applications and nodes to evaluate utilization and rightsize resources for optimized performance and cost.
- Use **scheduled actions** in the Auto Scaling group for test and development environments to automatically stop instances at specified times when compute nodes are not in use and start them when needed.
- **CPU Type**: ARM-based CPUs (such as AWS Graviton) are more cost-effective but may have compatibility issues with certain applications. Developers should ensure application compatibility to support multiple CPU types.
- **Upgrades**: Cloud providers may impose fees for clusters not upgraded to a supported version. For EKS, using an outdated Kubernetes Cluster requires Extended Support, which results in additional expenses.

**Storage:**
- **S3:** Configure lifecycle policies, especially when using versioning, and choose the appropriate storage class (e.g., Standard or Infrequent Access). Consider S3 Intelligent-Tiering for automated cost-efficient storage management.
- **EBS:** Ensure that EBS volumes are configured to use the GP3 storage type, which is 20% more cost-effective than GP2.
- **EBS:** Delete unused EBS volumes and snapshots that are no longer used.

**Database**:
- For RDS, consider rightsizing, using Graviton-based instances, and performing mass engine version upgrades if applications support the new version.
- Switching to Amazon Aurora I/O-Optimized increases instance costs by approximately 25%, including I/O operations, making it an ideal choice for high I/O workloads. This option offers improved cost predictability and can reduce total costs when I/O demand is significant.
- Cloud providers may impose fees for clusters not upgraded to a supported version. For RDS, using outdated database engines may require Extended Support, resulting in additional expenses.

### Resources {#finOps-aws-resources}

- [Guidance for Cloud Financial Management on AWS - AWS Docs](https://aws.amazon.com/solutions/guidance/cloud-financial-management-on-aws/)
- [AWS Blog - FinOps Posts](https://aws.amazon.com/blogs/aws-cloud-financial-management/tag/finops/)
- [Comparing Amazon EBS volume types gp2 and gp3](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-storage-compare-volume-types.html)

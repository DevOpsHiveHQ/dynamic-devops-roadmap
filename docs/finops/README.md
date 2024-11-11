---
title: FinOps
description: DevOps-like role in a collaborative approach to optimize cloud costs, ensuring financial accountability, efficiency, and resource management.
sidebar_position: 9
---

# FinOps

Understand financial principles relevant to cloud computing, like budgeting, forecasting, cost allocation, and billing.

**Tools offered by cloud providers**:

- AWS Cost Explorer and AWS Budgets
- Azure Cost Management
- Google Cloud Billing

The following strategies optimize AWS cloud costs:

**VPC Optimization**:

 - **Manage Data Transfer Costs**: NAT gateways incur costs; in most cases, two subnets with 99.9% availability are sufficient. For 99.99% availability, use three subnets with three NAT gateways. Two subnets are generally sufficient for most scenarios.
 - Remove IP v4 addresses that are not needed or associated with Network Interface Card (NIC).
 - Use VPC endpoints to privately connect to supported AWS services and VPC endpoint services, rather than relying on NAT gateways, to reduce costs. Additionally, AWS PrivateLink is often required for other purposes, such as compliance, irrespective of cost considerations.

**EKS/EC2/Auto Scaling Group (ASG) Optimization**:

 - **Implement Instance Autoscaling**: Configure auto scaling with Spot instances for worker nodes by using [Karpenter](https://karpenter.sh/)  to adjust resources based on demand dynamically.
 - **Use Reserved Instances and Savings Plans**: Optimize for a single node type, such as `m5a.large` or `m5a.xlarge` , for most applications to gain cost efficiencies through reserved capacity.
 - **Rightsize Resources**: Regularly reassess applications and nodes to evaluate utilization and rightsize resources for optimized performance and cost.
 - Use **scheduled actions** in the Auto Scaling group for test and development environments to automatically stop instances at specified times when compute nodes are not in use and start them when needed.
 - **CPU Type**: ARM-based CPUs (such as AWS Graviton) are more cost-effective but may have compatibility issues with certain applications. Developers should ensure application compatibility to support multiple CPU types.
 - **Upgrades**: Cloud providers may impose fees for clusters that are not upgraded to a supported version. For EKS, using outdated Kubernetes Cluster requires Extended Support, resulting in additional expenses.

**EBS Optimization**:

 - Ensure that EBS volumes are configured to use the GP3 storage type, which is 20% more cost-effective than GP2.
 - Delete unused EBS volumes and snapshots that are no longer in use.

**S3 Optimization**:

 - **Optimize Storage Costs for Object Storage**: Configure lifecycle policies, especially when using versioning, and choose the appropriate storage class (e.g., Standard or Infrequent Access). Consider S3 Intelligent-Tiering for automated cost-efficient storage management.

**Database Optimization**:
 - For RDS, consider rightsizing, using Graviton-based instances, and performing mass engine version upgrades if applications support the new version.
 - Switching to Amazon Aurora I/O-Optimized increases instance costs by approximately 25% to include I/O operations, making it an ideal choice for high I/O workloads. This option offers improved cost predictability and can potentially reduce total costs when I/O demand is significant.
 - **Upgrades**: Cloud providers may impose fees for clusters that are not upgraded to a supported version. For RDS, using outdated database engines may require Extended Support, resulting in additional expenses.

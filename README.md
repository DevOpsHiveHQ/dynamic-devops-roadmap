# 🐝 MyHiveBox

![CI Status](https://github.com/mohamedkhaledoct/MyHiveBox/actions/workflows/ci.yml/badge.svg)
![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Manifests-326ce5?logo=kubernetes)

**MyHiveBox** is a Cloud-Native IoT monitoring API designed to demonstrate modern DevOps practices. It fetches real-time temperature data from openSenseMap sensors, analyzes it, and exposes Prometheus-compatible metrics.

This project is part of a DevOps Roadmap implementation, evolving from a simple script to a production-grade Kubernetes deployment.

---

## 🚀 Features

- **Temperature Analysis:** Calculates average temperature from distributed sensors.
- **Status Logic:** Determines environmental status (Too Cold, Good, Too Hot).
- **Observability:** Exposes Prometheus metrics at `/metrics`.
- **Health Checks:** Implements Liveness and Readiness probes for K8s resilience.
- **Security:** Runs as non-root user, read-only filesystem, and scanned by Trivy.

---

## 🛠️ Tech Stack

- **Application:** Python (Flask), Requests.
- **Containerization:** Docker (Multi-stage builds, Distroless-like optimization).
- **Orchestration:** Kubernetes (Kind, Ingress-Nginx).
- **CI/CD:** GitHub Actions (Linting, Testing, Security Scanning, GHCR Push).
- **Security:** Trivy (Infrastructure as Code scanning), Pylint.

---

## 📦 Getting Started

### 1. Run Locally (Docker)

```bash
# Build the image
docker build -t hivebox:local .

# Run the container (Port 5000)
docker run -d -p 5000:5000 --name hivebox hivebox:local

# Test endpoints
curl http://localhost:5000/version
curl http://localhost:5000/temperature
curl http://localhost:5000/metrics
```

### 2. Run on Kubernetes (Kind)

This project uses **Kind** (Kubernetes in Docker) with a custom configuration to support Ingress.

**Prerequisites:**

- Docker
- Kind
- kubectl

**Steps:**

1. Create Cluster:

```bash
kind create cluster --name hivebox-cluster --config kind-config.yaml
```

2. Deploy Ingress Controller:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

# Wait for ingress to be ready
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s
```

3. Deploy Application:

```bash
# Build image with version tag
docker build -t hivebox:v0.0.1 .

# Load image into Kind nodes
kind load docker-image hivebox:v0.0.1 --name hivebox-cluster

# Apply Kubernetes manifests
kubectl apply -f k8s/
```

4. Access the App:

Open your browser or run:

```bash
curl http://localhost/version
curl http://localhost/temperature
```

---

## ⚙️ CI/CD Pipeline

The project utilizes **GitHub Actions** for a complete DevSecOps pipeline:

1. **Lint:** Checks Python code quality (`pylint`) and Dockerfile best practices (`hadolint`).
2. **Test:** Runs unit tests with `pytest`.
3. **Security Scan:** Scans Kubernetes manifests and container images for vulnerabilities using **Trivy** (checks for root access, excessive privileges, etc.).
4. **Build & Push:** Builds the Docker image and pushes it to **GitHub Container Registry (GHCR)** only if all previous steps pass.

---

## 🛡️ Security Measures

- **Non-Root User:** Container runs as `appuser` (UID 1000).
- **Resource Limits:** CPU and memory limits defined in Deployment to prevent DoS.
- **Read-Only Filesystem:** Application cannot modify the container's filesystem.
- **Privilege Drop:** All capabilities dropped in K8s SecurityContext.

---

## 📝 Endpoints

| Method | Endpoint     | Description                                 |
|--------|--------------|---------------------------------------------|
| `GET`  | `/version`   | Returns current app version.                 |
| `GET`  | `/temperature` | Returns avg temp and status (Cold/Good/Hot). |
| `GET`  | `/metrics`   | Prometheus metrics for scraping.             |

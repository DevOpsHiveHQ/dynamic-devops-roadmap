# Use specific version for stability (matches your local python version)
FROM python:3.12-slim

# Set environment variables
# PYTHONDONTWRITEBYTECODE: Prevents Python from writing .pyc files
# PYTHONUNBUFFERED: Ensures logs are flushed directly to terminal
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Create a non-root user and group
# -u 1000: Fix UID to generic 1000
RUN groupadd -g 1000 appuser && \
    useradd -r -u 1000 -g appuser appuser

# Set working directory
WORKDIR /app

# Install dependencies
# We copy requirements first to leverage Docker cache layers
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Switch to non-root user
USER appuser

# Expose the application port
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
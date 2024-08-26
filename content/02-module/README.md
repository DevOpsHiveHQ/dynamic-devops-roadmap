# Module 2: Basics - DevOps Core

[🗂 Back to the Roadmap Index](../../README.md#roadmap-index)

## Table of Content

- [2.1 Code - Python Fundamentals](#21-code---python-fundamentals)
- [2.2 Code - Common Development Tools](#22-code---common-development-tools)
- [2.3 Code - Git Basics](#23-code---git-basics)
- [2.4 Operating System - Linux Fundamentals](#24-operating-system---linux-fundamentals)
- [2.5 Operating System - Common Tools and Commands](#25-operating-system---common-tools-and-commands)
- [2.6 Operating System - Bash Scripting Basics](#26-operating-system---bash-scripting-basics)
- [2.7 Containers - Docker Fundamentals](#27-containers---docker-fundamentals)
- [2.8 Containers - Docker CLI Basics](#28-containers---docker-cli-basics)
- [2.9 Project - HiveBox Phase 2](#29-project---hivebox-phase-2)

## 2.1 Code - Python Fundamentals

### What you need to know

- Python syntax.
- Data types.
- Control flow.
- Loops.
- Functions.

### Resources

- [Learn Python - Codecademy](https://www.codecademy.com/learn/learn-python): Interactive learning step by step to acquire the essential Python knowledge (the course is for Python 2, but it's fine).
- [Python Track - Exercism](https://exercism.org/tracks/python): More than 130 exercises grouped into 16 Python concepts with code analysis (finish only the `Learning Exercise`).

## 2.2 Code - Common Development Tools

### What you need to know

- When you are writing code, you don't just use a text editor but code editor (maybe also IDE).
- Development tools enhance productivity, streamline the development process, increase code quality.
- Common features of development tools are syntax highlighting, code completion, code navigation, and debugging.
- Through this roadmap, you will get more tools to help you in your daily work.

### Resources

- [Visual Studio Code](https://code.visualstudio.com/): The main code editor will be used in this roadmap.
- [Getting Started with Python in VS Code](https://code.visualstudio.com/docs/python/python-tutorial): How to use VS Code as a development tool for Python.
- [Python extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python): VS Code extension that provide essential features for Python like auto-completion, syntax checking, etc.


## 2.3 Code - Git Basics

### What you need to know

- When you create the code, you need to store it in a safe place using a Source Code Management (SCM) system.
- One of the known SCMs is [Git](https://git-scm.com/), which's widely used now via many platforms like GitHub and GitLab.
- You need to understand the Git basics like repository, branch, pull, push, commit, and so on because you will use them almost every day.
- Understanding Git is not important just for development, but also many workflows depend on it as a Source of Truth like `GitOps` (that will be covered in the next modules).

### Resources

- [Git, The simple guide](https://rogerdudler.github.io/git-guide/): Step-by-step visual guide for getting started with Git.
- [Git cheat sheet](https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf): Quick reference for Git commands.
- [Getting Git right - Atlassian](https://www.atlassian.com/git): Detailed guide to Git with many tutorials and tips.

## 2.4 Operating System - Linux Fundamentals

### What you need to know

- In the servers world, Linux dominates the market. So it's necessary to learn and use Linux OS as a DevOps Engineer.
- As a DevOps engineer, it's less likely to make it without good knowledge on Linux.
- Linux mainly has two family groups: Debian/Ubuntu and Red Hat/CentOS, it's better to stick to one of them at the beginning.
- Start using a user-friendly Linux distribution like [Ubuntu](https://ubuntu.com/) on your laptop/desktop.
- Even it's still possible as a user to do a lot using the UI, but `The Terminal Is Your Friend`!
- As a starting point, you need at least to know `Directory Structure`, `Permissions`, and `Command Line Operations`.

### Resources

- [Introduction to Linux - LinuxFoundationX](https://www.edx.org/learn/linux/the-linux-foundation-introduction-to-linux): A good starting point to get familiar with Linux OS (this course was promoted by Linus Torvalds, the founder of the Linux kernel).
- [Introduction to Linux - Chapters 1-6 - freeCodeCamp](https://www.freecodecamp.org/news/introduction-to-linux/): A great resource to learn all Linux fundamentals.

## 2.5 Operating System - Common Tools and Commands

### What you need to know

- As mentioned, the terminal is your friend! The power of Linux is in the Terminal and you need to be used to it be because you will use it on a daily basis.
- Get familiar with the GUI tool of the system you have, like Ubuntu.
- There are a couple of tools you need to master them like `echo`, `vim`, `grep`, `find`, `top`, `cut`, `sort`, `uniq`, `less`, `head`, and `tail`.
- You don't need to memorize all tools or their args, just think "what tool could help me to do that?" then you can always read its documentation.

### Resources

- [Introduction to Linux - Chapter 7 - freeCodeCamp](https://www.freecodecamp.org/news/introduction-to-linux/#chapter-7-command-line-operations): This chapter focuses on the command line operations and the most common tools.
- [Top 50+ Linux Commands You MUST Know - DigitalOcean](https://www.digitalocean.com/community/tutorials/linux-commands): Top Linux commands that everyone should know (but not memorize!).
- [20 Linux commands every sysadmin should know - Opensource.com](https://opensource.com/article/17/7/20-sysadmin-commands): Another post about handy CLI tools.

## 2.6 Operating System - Bash Scripting Basics

### What you need to know

- Now you know a dozen of individual CLI commands, but Linux allows you to automate many tasks by simply chaining a series of commands together.
- In shell scripts you can use all CLI commands plus a syntax similar to a programming language for if conditions, loops, and other helpers.
- Even you know some programming language like Python, you still will need and use shell scripts frequently.
- There are many shells and each one slightly different syntax, but `Bash` is one of the most popular ones.

### Resources

- [Bash Track - Exercism](https://exercism.org/tracks/bash): More than 90 exercises in different levels (finish only the easy and medium tasks).
- [Bash Scripting Tutorial – Linux Shell Script and Command Line for Beginners - freeCodeCamp](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/): Pretty good and structured guide to start with Bash scripting.
- [How to Write a Bash Script - A Simple Bash Scripting Tutorial - DataCamp](https://www.datacamp.com/tutorial/how-to-write-bash-script-tutorial): A simple getting started guide with integrated AI to explain the code.


## 2.7 Containers - Docker Fundamentals

### What you need to know

- The container revolution can be traced back to the introduction of Docker in 2013 when Docker debuted for the first time at PyCon.
- Container adoption has been mainstream for a whole now, in fact, [containers are the new normal](https://www.cncf.io/reports/cncf-annual-survey-2022/)!
- That means, containerizing your application is not an option, it's a must from day one!
- First, you need to understand why containers have been invented and what are the problems that technology solves.
- You also need to understand the relation between containers and Kubernetes (which will be covered in the next modules).
- Docker is not the only tool for containers nowadays, but we will stick with it in this roadmap.
- It's important to understand the difference between Dockerfile, Docker image, and Docker container.

### Resources

- [Get started guide - Docker Docs](https://docs.docker.com/get-started/): The official getting started guide for Docker.
- [Learn Docker in 2 Hours - KodeKloud](https://www.youtube.com/watch?v=zJ6WbK9zFpI): A crash course covers a full overview of all the Docker fundamentals.

## 2.8 Containers - Docker CLI Basics

### What you need to know

- There are a couple of GUIs for Docker, but you are a DevOps engineer, get yourself familiar with the Docker CLI!
- You needed to know how to create, run, stop, and delete Docker containers from the CLI.
- We are not going to cover Docker Compose in this roadmap because Kubernetes will be our focus as an orchestration platform. However, if you needed to use Docker Compose, then use V2, which is now embedded in the Docker CLI `docker compose`.

### Resources

- [Use the Docker command line - Docker Docs](https://docs.docker.com/engine/reference/commandline/cli/): The official documentation for Docker CLI. It's pretty useful and straightforward.
- [CLI Cheat Sheet - Docker Docs](https://docs.docker.com/get-started/docker_cheatsheet.pdf): One-page cheat sheet for Docker CLI commands.
- [21 Essential Commands Every Docker User Should Know - Linux Handbook](https://linuxhandbook.com/essential-docker-commands/): Another good list of common Docker CLI commands.

## 2.9 Project - HiveBox Phase 2

Follow the instructions in the [HiveBox project phase 2](../../projects/hivebox/README.md#phase-2).

---

If you are done, [🗂 Back to the Roadmap Index](../../README.md#roadmap-index)

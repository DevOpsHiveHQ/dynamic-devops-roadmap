---
sidebar_label: DevSecOps
title: DevSecOps - Advanced
description: Advanced DevSecOps topics
sidebar_position: 2
toc_max_heading_level: 2
---

## 1. DevOps vs DevSecOps

### What you need to know

**The "Security" Silo**

- As defined earlier in this roadmap, "DevOps" is a set of Practices, Tools, and Culture that makes software delivery fast, efficient, and reliable. In other words, the goal of "DevOps" is to make software delivery faster and more efficient without compromising reliability, which includes many things like functionality (new code shouldn't break existing functionality), performance, and most importantly, "Security".
As "DevOps" adoption was rising, its tools and processes were also getting more mature and able to cover many aspects of reliability. For example, to ensure that new code doesn't break existing functionality, CI/CD tools allow us to run unit or integration tests as part of the pipeline, and we could even use metrics such as code coverage as an indicator for test quality.
- However, one aspect of reliability that didn't mature at the same pace was "Security". In other words, as DevOps broke the silo between "Dev" and "Ops", "Security" teams remained in their own silo.

<p align="center">
  <img class="section-cover-image" title="Breaking Down Security Silo with DevSecOps " alt="Breaking Down Security Silo with DevSecOps " border="0" width="90%" src="/img/breaking-down-security-silo.png"/>
</p>

**Why "Security" falls behind?**

- There are many challenges making it hard for "Security" to be included within the "DevOps" tools and processes. Let's start by exploring some of these challenges

    1. **Human Nature**: When building things, our brains focus on “How things should work” (the happy path), not “What could go wrong”, and hence, Security is usually overlooked.
    2. **Nature of Software**: Software is built on many layers, abstractions, and dependencies. Security issues can be caused by one of these underlying components (e.g., open-source dependencies, cloud configuration, or even the CI/CD pipeline itself). Hence, to secure an application, we need to unpack all of these layers and abstractions and ensure they are properly configured.
    <p align="center">
    <img title="Application Layers" alt="Application Layers" border="0" width="90%" src={require('./application-layers.png').default} />
    </p>

    3. **Nature of security issues**: 
        * Security issues are rarer than other types of bugs (e.g., stability or performance), but are usually more impactful.
        * Security issues could exist for years without detection, and when discovered, the person fixing the problem is usually not the same person who introduced it.
        * This dilutes the normal “trial and error” learning process, which makes learning much slower.
    4. **Nature of security tools**:
        * Until recently, many security tools were built focusing on manual usage rather than automation. This makes it harder to include in a CI/CD pipeline.
        * Most security tools produce a lot of false positives, making it hard to use for automating decisions (e.g., failing a build pipeline) without a significant amount of tuning.
        * Most security tools don't cover many of the business logic security issues (e.g., authorization), leading to many false negatives if we solely rely on them.

**Adding "Sec" to "DevOps"**

That is why "DevSecOps" was needed to focus on overcoming the above challenges and include "Security" within the "DevOps" tools and processes. In other words, the goal of "DevSecOps" is to integrate "Security" into all the stages of the SDLC (Software Development Lifecycle) without compromising speed and efficiency (which are the main goals of DevOps).

## 2. Defining: Identifying the Threats

### What you need to know

- To be able to verify an application is "Secure" we need to first define what "Secure", means for this application. This is one of the hardest challenges of "Security", as we can't say something is "Secure" without clarifying what it is "Secure" from.

<p align="center">
  <img title="Security Definition" alt="Security Definition" border="0" width="90%" src={require('./security-definition.png').default} />
</p>

- In other words, to define "Security" we need to identify the main security threats that could affect the application, and identifying the security controls that need to be implemented to mitigate these threats.
- The process of identifying the main threats and their corresponding security controls is called "Threat Modeling", and will be discussed in more detail shortly.

**When to Start Planning For Security?**

- Ideally, we should start planning for Security during the "Design" phase. The earlier the better, as the later a security issue is discovered, the higher the cost of fixing it becomes, this includes time, effort, lost revenue ... etc.

<p align="center">
  <img class="section-cover-image" title="Different Types of Quality Models" alt="Shif-Left and Shfit-Right Quality Models" border="0" width="90%" src="/img/quality-models.png"/>
</p>

**Threat Modeling**

- As mentioned above, "Threat Modeling" is how we define what "Secure" means for our application by defining the main threats, and the corresponding mitigations (security control), and hence is the most critical aspect of "DevSecOps". The goal of a "Threat Model" is to answer the following questions:
    1. What are we working on? -> The Scope
    2. What can go wrong? -> The Threats
    3. What are we going to do about it? -> The Mitigations
    4. Did we do a good job?
- Threat modeling should be performed during the Design phase once the technical scope of the application is determined, and needs to be done in meetings including stakeholders from the software engineering team, the security team, and any other teams involved in the design (e.g. the platform team if we are using a cloud service).
- The output of Threat modeling is a list of threats and their corresponding mitigations. Example: 
    > **Threat**: Unauthorized access to our API could lead to customer data exposure or tampering.
    >
    > **Mitigation**: We are performing authentication for all requests through the `Authorization` header, and we are verifying that the authenticated user has access to the resource the API is being used for.

### Resources

- [Threat Modeling: Designing for Security by Adam Shostack](https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998)
- [Threat Modeling Training Course - Practical DevSecOps](https://www.practical-devsecops.com/certified-threat-modeling-professional/)
- [Threat Modeling Handbook](https://medium.com/@mohamed.osama.aboelkheir/list/threat-modeling-handbook-309a70ec273f)
- [Threat model Template](https://www.notion.com/templates/threat-model)

## 3. Verifying: DevSecOps Processes and Tools

### What you need to know

- Once the main threats and their corresponding security controls are identified, we can verify "Security" by adding tests, tools, and/or processes to our DevOps pipeline or as separate scheduled jobs to continuously verify these security controls to ensure they are implemented correctly and that new code or configuration changes don't break them in the future.
In other words, one of the outputs of the "Threat Model" should be a continuous testing plan that covers the mitigations of high-impact threats or those that are highly likely to be broken by future code or configuration changes.
- There are some different categories of tools we could choose from to create this testing plan, depending on the mitigations we want to cover.

#### 3.1 Unit and Integration Tests

- Unit and integration tests is a very useful tool to use to test some of the most important and most recurring category of mitigations, like authentication, authorization, CSRF protection and other mitigations related to business logic. This is mainly because, as mentioned earlier, most security tools (e.g. SAST and DAST) usually miss this category of issues.
- For example, as an integration test, testing authentication for a Django application.

    ```python
    from django.test import TestCase, Client

    class ShareAPIViewTestCase(TestCase):
        def setUp(self):
            self.client = Client()

        def test_missing_session_cookie(self):
            """Test that a 401 response is returned when the session cookie is missing"""
            response = self.client.get('/api/share/')
            self.assertEqual(response.status_code, 401)

        def test_valid_cookie_different_user_file(self):
            """Test that a 403 response is returned when a valid cookie for user 1 is provided and the file_id input
            parameter is a valid id of a file owned by a different user"""
            # Assuming you have a function or method to generate a valid session for a user
            self.client.login(username='user1', password='password1')

            # Assuming you have a function or method to create a file owned by a different user
            file_id = create_file_for_different_user()

            response = self.client.get('/api/share/', {'file_id': file_id})
            self.assertEqual(response.status_code, 403)
    ```
- You can find more details about writing unit and integration tests in this roadmap:
    * [3.4 Code - Writing Unit Tests](https://devopsroadmap.io/foundations/module-03/?_highlight=unit&_highlight=tests#34-code---writing-unit-tests)
    * [5.3 Code - Writing Integration Tests](https://devopsroadmap.io/foundations/module-05/?_highlight=integration#53-code---writing-integration-tests)

#### 3.2 SAST (Static application security testing)

- Another useful category of security tools is SAST, which scans the code for common patterns that could lead to security issues. This is usually useful for identifying dangerous functions such as:
    * A raw SQL query defined using user input could lead to [SQL injection](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).
    * A command defined using user input could lead to [Command injection](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html).
- For example, the below route has an [Open-redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) vulnerability as it passes user input (the `url` query parameter) to the dangerous function `res.redirect`. 

    ```javascript
    app.get('/users/:id', (req, res) => {
        const userId = Number(req.params.id);
        const user = users.find((user) => user.id === userId);
        console.log(req.query)
        if (!user) {
            if (req.query.url) {
                res.redirect(req.query.url);
            } else {
                res.redirect('https://www.example.com');
            }
        } else {
            res.json(user);
        }
    });
    ```

    A SAST (Semgrep in this example) scan for this produces the following finding:

    ```bash
    $ semgrep scan

    ┌──── ○○○ ────┐
    │ Semgrep CLI │
    └─────────────┘
    [...]
        ❯❱ javascript.express.security.audit.express-open-redirect.express-open-redirect
            The application redirects to a URL specified by user-supplied input `req` that is not validated.
            This could redirect users to malicious locations. Consider using an allow-list approach to validate
            URLs, or warn users they are being redirected to a third-party website.
            Details: https://sg.run/EpoP

            29┆ res.redirect(req.query.url);
    ```
- However, it is essential to note that SAST tools usually generate a lot of false positives, so it is not recommended to block your CI/CD pipeline on SAST findings, as it could get pretty noisy.
- Here is the recommended approach:
    * A daily full repo SAST scan, with a specific team accountable for triaging and fixing new findings coming out of this scan.
    * An incremental PR/MR scan that scans new code for newly introduced findings, and adds the findings as comments to the PR/MR.
    * In the CI/CD pipeline, only the block of the findings related to high-impact mitigations is identified in the threat model. E.g., only for rules related to SQL injection findings that have been tested and verified not to generate false positives.
- Here are some SAST tools to explore:
    * [Semgrep](https://semgrep.dev/index.html): Allows writing custom rules, and customizing which rules to run which makes it flexible and easy to adapt to your threat model mitigations. Has a free community edition, but most versions (e.g., [cross-file analysis](https://semgrep.dev/docs/semgrep-code/semgrep-pro-engine-intro),  [PR scans](https://semgrep.dev/docs/semgrep-appsec-platform/github-pr-comments), [AI Assistant](https://semgrep.dev/docs/semgrep-assistant/overview) for auto-triage and auto-fix) are in the paid version.
    * [OpenGrep](https://www.opengrep.dev/): An open-source fork of Semgrep's community edition.
    * [QwietAI](https://qwiet.ai/): Uses a code property graph to identify vulnerabilities, which makes theoretically makes it able to reduce false positives and identify more complex vulnerabilities (e.g. cross file vulnerabilities).
    * [Corgea](https://corgea.com/): Besides using AI to triage and fix other tools' SAST findings, it use AI to scan the code which makes it able to identify business logic issues through ([BLAST](https://corgea.com/blog/introducing-blast-the-future-of-security-testing-is-here)).
- The following are more resources about SAST:
    * [How to “Shift-Left” SAST scans (Semgrep as an example) | by Mohamed AboElKheir | AppSec Untangled | Medium](https://medium.com/appsec-untangled/how-to-shift-left-sast-scans-semgrep-as-an-example-56f4428c31d3)
    * [How AI Code Scanning Breaks SAST’s Limits - Corgea as an Example | by Mohamed AboElKheir | AppSec Untangled | Medium](https://medium.com/appsec-untangled/how-ai-code-scanning-breaks-sasts-limits-corgea-as-an-example-6f8c9424f165)

#### 3.3 DAST (Dynamic application security testing)

- DAST analyzes the application by simulating attacks and observing how the application responds to find potential vulnerabilities. Unlike SAST, this doesn't need access to the code of the application.
- [Burp Suite](https://portswigger.net/burp/enterprise) and [OWASP ZAP](https://www.zaproxy.org/) are the most popular DAST tools. However, they don't work well with modern applications (e.g., SPA such as React) and are not optimized to work within CI/CD pipelines, as they are usually time-consuming and noisy.
- There are some more recent DAST tools worth exploring, like [Escape](https://escape.tech/) and [Akto API Security](https://www.akto.io/), which are more equipped to handle modern applications and APIs, but generally it is still recommended to run DAST as a separate scheduled job rather than within your CI/CD pipeline.

#### 3.4 IAST (Interactive application security testing)

- IAST is a hybrid approach that tests applications dynamically by simulating attacks like DAST. It also integrates directly with the application's runtime to observe the application's behavior during execution. This allows IAST to produce better findings and add more context to the findings (e.g., the file and line of code where the dangerous function exists).
- Like DAST, it is recommended that you run IAST as a separate scheduled job rather than within your CI/CD pipeline.
- To try IAST, you could start with the free community edition of [Contrast Security](https://docs.contrastsecurity.com/en/community-edition--ce-.html).

:::tip
Note that you don't necessarily have to use all types of security scanning tools, such as SAST, DAST, and IAST. Start with the most important mitigations in your threat model and select the tool that gives you the best coverage. If unsure, starting with SAST is usually the easiest path.
:::

#### 3.5 Secret Scanning

Another important threat is hard-coded credentials/secrets in your code, which could expose these credentials and whatever data they have access to. This is especially dangerous in open-source repos. Hence, using a tool that scans your repos for secrets is recommended.
- [TruffleHog](https://github.com/trufflesecurity/trufflehog) is an open source tool that can be used for secret scanning, and there are also some paid solutions, such as [GitGuardian](https://www.gitguardian.com/) and [Semgrep Secrets](http://semgrep.dev/products/semgrep-secrets/).

#### 3.6 SCA (Software Composition Analysis)

- As mentioned earlier, the security of an application doesn't rely only on the application code, but also on all of the underlying layers and abstractions. One of those layers that needs to be secured is the open source packages (npm, pip, maven, etc.) used by the application as direct or indirect dependencies, as vulnerabilities affecting any of these packages could potentially also be used to attack the application using the package.
- Hence, it is recommended to use SCA tools to scan your application to get the list of open source dependencies, their current versions, and any known vulnerabilities that affect these versions.
- For that, we could use tools such as [Dependabot](https://github.com/dependabot) or [Snyk](https://snyk.io/product/open-source-security-management/), but as most SCA tools generate a huge number of alerts, it is recommended to explore tools that perform "Reachability Analysis" such as [Coana](https://www.coana.tech/) (Recently acquired by [Socket.dev](https://socket.dev/)) or [Endor Labs](https://www.endorlabs.com/).
- Reachability analysis is the automated analysis of the code and its dependencies to determine whether the vulnerable parts of the code (e.g., the vulnerable function) in the package with the known vulnerability are reachable from the application code. This enables us to dismiss 70-90% of the alerts, as in many cases, the vulnerability in the dependency is not reachable. For more details about "Reachability Analysis", you can check this [post](https://medium.com/appsec-untangled/how-reachability-analysis-can-help-with-open-source-vulnerabilities-mess-coana-as-an-example-54c55ba74cde). 

#### 3.7 Container Vulnerability Scanning

- Another layer that also needs to be secured is the container images being used, as similar to open source packages, container image packages (e.g. deb or apk packages) vulnerabilities could affect the application's security.
- A preventive measure would be using distroless container images that don't have unnecessary packages, and are periodically being patched to minimize packages with vulnerabilities, such as [Chainguard Images](https://www.chainguard.dev/containers).
- Besides that, there are tools that could be used to scan your container images for vulnerabilities, such as [Trivy](https://github.com/aquasecurity/trivy), [Grype](https://github.com/anchore/grype), or [Docker Scout](https://docs.docker.com/scout/).
- It is recommended to use these scanners as part of the container image build pipeline, as well as a scheduled job to cover newly discovered vulnerabilities.

#### 3.8 Cloud Configuration Scanning

- Similarly, if you are deploying your application on a Cloud provider (e.g., AWS, GCP, or Azure), misconfiguring the Cloud Services could affect the security of your application (e.g., making an S3 bucket with sensitive data public could expose this sensitive data).

- Hence, it is recommended to scan your Cloud Service configuration periodically for misconfigurations, and for that you can use tools such as [checkov](https://github.com/bridgecrewio/checkov), [cloudsploit](https://github.com/aquasecurity/cloudsploit), or [Scout Suite](https://github.com/nccgroup/ScoutSuite)

#### 3.9 SCM and CI/CD Configuration Scanning

- Another layer that could introduce vulnerabilities is the SCM (e.g., github) or CI/CD tools (e.g., GitHub Actions or CircleCI). e.g.:
    * Missing branch protection could allow an attacker to add malicious code to your repo.
    * A compromised GitHub Actions package (e.g., the `tj-actions/changed-files` [compromise](https://semgrep.dev/blog/2025/popular-github-action-tj-actionschanged-files-is-compromised/)) could expose your production secrets or credentials.
- Hence, it is recommended to scan the configuration of your SCM and CI/CD tools, and for that, you could use tools such as [legitify](https://github.com/Legit-Labs/legitify).

:::tip
You can find a [sample service and its threat model](https://typical-braid-834.notion.site/Threat-Model-File-Upload-Service-Sample-6b2c52bef2194cf18917ce9fbb818d6a), and the [steps followed to create the threat model](https://medium.com/@mohamed.osama.aboelkheir/list/threat-modeling-handbook-309a70ec273f). Under "Step 6 - Create Tests to Continuously Verify Mitigations," you can find some examples of how the threat model was used to create a DevSecOps testing plan.
:::

**Summary**

- To recap, the goal of "DevSecOps" is to make security move at the same pace as DevOps, and for this to happen we need to have a clear definition of what our application(s) need to be secure from (the threats), and the controls that we need to implement to protect against them (the mitigations). Then we need to select the right tools and processes to help us verify that these controls are working as expected across all the application layers.
- Finally, here is a diagram that summarizes the DevSecOps tools and processes mentioned above, mapping them to the application's different layers.

<p align="center">
  <img title="DevSecOps Tools and Processes" alt="CDevSecOps Tools and Processes" border="0" width="90%" src={require('./application-layers-security-tools.png').default} />
</p>


### Resources

-  [Certified DevSecOps Professional (CDP) Course](https://www.practical-devsecops.com/certified-devsecops-professional/): A hands-on DevSecOps Certification Course mainly relying on labs.
- [Using Threat Modeling to Create a DevSecOps plan](https://www.youtube.com/watch?v=XvraqRRjHjQ&t=900s): A talk about using Threat Modeling to create a DevSecOps plan.
- [Ultimate DevSecOps library](https://github.com/sottlmarek/DevSecOps): A library that contains a list of tools and methodologies accompanied with resources.
- [Awesome DevSecOps](https://github.com/devsecops/awesome-devsecops): An authoritative list of awesome DevSecOps tools with the help from community experiments and contributions.
- [DevSecOp University](https://www.practical-devsecops.com/devsecops-university/): A comprehensive collection of DevSecOps learning resources like books, tutorials, infographics, tools, and much more.

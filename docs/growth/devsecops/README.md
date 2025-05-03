---
sidebar_label: DevSecOps
title: DevSecOps - Advanced
description: Advanced DevSecOps topics
sidebar_position: 2
toc_max_heading_level: 2
---

## DevOps vs DevSecOps

### What you need to know

**The "Security" Silo**

* As defined earlier in this roadmap, "DevOps" is a set of Practices, Tools, and Culture that makes software delivery fast, efficient and reliable. In other words, the goal of "DevOps" is to make software delivery faster and more efficient without compromising reliability, which includes many things like functionality (new code shouldn't break existing functionality), performance, and most importantly, "Security".

* As "DevOps" adoption was rising, its tools and processes were also getting more mature and able to cover many aspects of reliability. For example, to make sure new code doesn't break existing functionality, CI/CD tools allows us to run unit or integration test as part of the pipeline, and we could even use metrics such as code coverage as an indicator for test quality.

* However, one aspect of reliability that didn't mature at the same pace was "Security". In other words, as DevOps broke the silo between "Dev" and "Ops", "Security" teams remained in their own silo.

<p align="center">
  <img title="Security Silo" alt="Security Silo" border="0" width="90%" src="/img/security-silo.png"/>
</p>

**Why "Security" fell behind?**

* There are many challenges making it hard for "Security" to be included within the "DevOps" tools and processes. Let's start by exploring some of these challenges

    1. **Human Nature**: When building things, our brains focus on “How things should work” (the happy path), not “What could go wrong”, and hence, Security usually is overlooked.
    2. **Nature of Software**: Software is built on top of many layers, abstractions and dependencies. Security issues can be caused by one of these underlying components (e.g. open-source dependencies, cloud configuration, or even the CI/CD pipeline itself). Hence, to secure an application we need to unpack all of these layers and abstractions and make sure they are properly configured.
    <p align="center">
    <img title="Application Layers" alt="Application Layers" border="0" width="90%" src="/img/application-layers.png"/>
    </p>

    3. **Nature of security issues**: 
        * Security issues are more rare than other types of bugs (e.g. stability or performance), but are usually more impactful.
        * Security issues could exist for years without detection, and when discovered, the person fixing the issue is usually not the same person that introduced it.
        * This dilutes the normal “trial and error” learning process, which makes learning much slower.
    4. **Nature of security tools**:
        * Till recently, many security tools were build with focus on manual usage rather than automation. This makes it harder to include in a CI/CD pipeline.
        * Most security tools produce a lot of false positives, making it hard to use for automating decisions (e.g. failing a build pipeline) without a significant amount of tuning.
        * Most security tools don't have coverage to many of the business logic security issues (e.g. authorization) leading to many false negatives if we solely rely on tools.

**Adding "Sec" to "DevOps"**

* That is why "DevSecOps" was needed to focus on overcoming the above challenges, and to include "Security" within the "DevOps" tools and processes. In other words, the goal of "DevSecOps" is to integrate "Security" into all the stages of the SDLC (Software Development Lifecycle) without compromising speed and efficiency (which are the main goals of DevOps).

## Defining "Security": Identifying the Threats

### What you need to know

* To be able to verify an application is "Secure" we need to first define what "Secure", means for this application. This is one of the hardest challenges of "Security", as we can't say something is "Secure" without clarifying what it is "Secure" from.

<p align="center">
  <img title="Security Definition" alt="Security Definition" border="0" width="90%" src="/img/security-definition.png"/>
</p>

* In other words, to define "Security" we need to identify the main security threats that could affect the application, and identifying the security controls that need to be implemented to mitigate these threats.

* The process of identifying the main threats and their corresponding security controls is called "Threat Modeling", and will be discussed in more detail shortly.

**When to Start Planning For Security?**

* Ideally, we should start planning for Security during the "Design" phase. The earlier the better, as the later a security issue is discovered, the higher the cost of fixing it becomes, this includes time, effort, lost revenue, .. etc

<p align="center">
  <img title="Cost of Defects" alt="Cost of Defects" border="0" width="90%" src="/img/cost-of-defects.png"/>
</p>

**Threat Modeling**

* As mentioned above, "Threat Modeling" is how we define what "Secure" means for our application by defining the main threats, and the corresponding mitigations (security control), and hence is the most important enabled of "DevSecOps". The goal of a "Threat Model" is to answer the following questions:
    1. What are we working on? -> The Scope
    2. What can go wrong? -> The Threats
    3. What are we going to do about it? -> The Mitigations
    4. Did we do a good job?

* Threat modeling should be performed during the Design phase once the technical scope of the application is determined, and needs to be done in meetings including stakeholders from the software engineering team, the security team, and any other teams involved in the design (e.g. the platform team if we are using a cloud service).

* The output of Threat modeling is a list of threats and their corresponding mitigations. Here is an example: 

    > **Threat**: Unauthorized access to our API could lead to exposure or tampering of customer data.
    >
    > **Mitigation**: We are performing authentication for all requests through the `Authorization` header, and we are verifying the authenticated user has access to the resource the API is being used for.

### Resources

* Books:
	* [Threat Modeling: Designing for Security by Adam Shostack](https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998)
* Online course:
	* [Threat Modeling Training Course - Practical DevSecOps](https://www.practical-devsecops.com/certified-threat-modeling-professional/?srsltid=AfmBOooAf8YKbQTPyb3dj0uIY0tYhEWkwRGF0OB2zyDKHoutcqXYYtNh)
* Practical Guide:
	* [Threat Modeling Handbook](https://medium.com/@mohamed.osama.aboelkheir/list/threat-modeling-handbook-309a70ec273f)
* Sample Threat model:
	* [File Upload Service (Sample)](https://typical-braid-834.notion.site/Threat-Model-File-Upload-Service-Sample-6b2c52bef2194cf18917ce9fbb818d6a)
* Threat modeling Notion template:
	* [Threat model Template](https://www.notion.com/templates/threat-model?srsltid=AfmBOorZNDf7vh5CoCP_0tBscjF1XbSsxw3rhCy_PM9ljZdb7CFdfw-3)

## Verifying "Security": DevSecOps Processes and Tools

### What you need to know

* Once them main threats and their corresponding security controls are identified, we can verify "Security" by adding tests, tools, and/or processes to our DevOps pipeline or as separate scheduled jobs to continuously verify these security controls to make sure they are implemented correctly and that new code or configuration changes don't break them in the future.

* In other words, one of the outputs of the "Threat Model" should be a continuous testing plan that covers the mitigations of the threats of high impact, or high likelihood of being broken by future code or configurations changes.

* Here are some different categories of tools we could choose from to create this testing plan depending on the mitigations we want to coverage.

**Unit and Integration Tests**

* Unit and integration tests is a very useful tool to use to test some of the most important and most recurring category of mitigations, like authentication, authorization, CSRF protection and other mitigations related to business logic. This is mainly because, as mentioned earlier, most security tools (e.g. SAST and DAST) usually miss this category of issues.

* For example, here as an integration test testing authentication for a Django application.

<p align="center">
  <img title="Authentication Integration Tests" alt="Authentication Integration Tests" border="0" width="90%" src="/img/authn-integration-test.png"/>
</p>

* You can find more details about writing unit and integration tests in this roadmap:
    * [3.4 Code - Writing Unit Tests](https://devopsroadmap.io/foundations/module-03/?_highlight=unit&_highlight=tests#34-code---writing-unit-tests)
    * [5.3 Code - Writing Integration Tests](https://devopsroadmap.io/foundations/module-05/?_highlight=integration#53-code---writing-integration-tests)

**SAST (Static application security testing)**

* Another useful category of security tools is SAST, which scans the code for common patterns that could lead to security issues. This is usually useful for identifying dangerous functions such as:
    * A raw SQL query defined using user input could lead to [SQL injection](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).
    * A command defined using user input could lead to [Command injection](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html).

* For example, the below route has an [Open-redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) vulnerability as it passes user input (the `url` query parameter) to the dangerous function `res.redirect`. 

    ```js
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

    ``` bash
    $ semgrep scan

    ┌──── ○○○ ────┐
    │ Semgrep CLI │
    └─────────────┘


    ...


        ❯❱ javascript.express.security.audit.express-open-redirect.express-open-redirect
            The application redirects to a URL specified by user-supplied input `req` that is not validated.
            This could redirect users to malicious locations. Consider using an allow-list approach to validate
            URLs, or warn users they are being redirected to a third-party website.
            Details: https://sg.run/EpoP

            29┆ res.redirect(req.query.url);


    ```

* However, it is important to note that SAST tools usually generate a lot of false positives, so it is not recommended to block your CI/CD pipeline on SAST findings as it could get pretty noisy.

* Here is the recommended approach:

    * A daily full repo SAST scan, with a specific team accountable for triaging and fixing new findings coming out of this scan.
    * An incremental PR/MR scan that scans new code for newly introduced findings, and adds the findings as comments to the PR/MR.
    * In the CI/CD pipeline only block of the findings related to high impact mitigations identified in the threat model. e.g. Only for rules related to SQL injection findings that has been tested and verified not to generated false positives.

* Here are some SAST tools to explore:
    * [Semgrep](https://semgrep.dev/index.html): Allows writing custom rules, and customizing which rules to run which makes it flexible and easy to adapt to your threat model mitigations. Has a free community edition, but most versions (e.g. [cross-file analysis](https://semgrep.dev/docs/semgrep-code/semgrep-pro-engine-intro),  [PR scans](https://semgrep.dev/docs/semgrep-appsec-platform/github-pr-comments), [AI Assistant](https://semgrep.dev/docs/semgrep-assistant/overview) for auto-triage and auto-fix) are in the paid version.
    * [OpenGrep](https://www.opengrep.dev/): An open-source fork of Semgrep's community edition.
    * [QwietAI](https://qwiet.ai/): Uses a code property graph to identify vulnerabilities, which makes theoretically makes it able to reduce false positives and identify more complex vulnerabilities (e.g. cross file vulnerabilities).
    * [Corgea](https://corgea.com/): Besides using AI to triage and fix other tools' SAST findings, it use AI to scan the code which makes it able to identify business logic issues through ([BLAST](https://corgea.com/blog/introducing-blast-the-future-of-security-testing-is-here)).

* Here are more resources about SAST:
    * [How to “Shift-Left” SAST scans (Semgrep as an example) | by Mohamed AboElKheir | AppSec Untangled | Medium](https://medium.com/appsec-untangled/how-to-shift-left-sast-scans-semgrep-as-an-example-56f4428c31d3)
    * [How I contributed my first custom rule to Semgrep Rule Registry | by Mohamed AboElKheir | AppSec Untangled | Medium](https://medium.com/appsec-untangled/how-i-contributed-my-first-custom-rule-to-the-semgrep-rule-registry-731d99b5c94a)
    * [How AI Code Scanning Breaks SAST’s Limits - Corgea as an Example | by Mohamed AboElKheir | AppSec Untangled | Medium](https://medium.com/appsec-untangled/how-ai-code-scanning-breaks-sasts-limits-corgea-as-an-example-6f8c9424f165)

**DAST (Dynamic application security testing)**

* DAST analyzes the application by simulating attacks and observing how the application responds to find potential vulnerabilities. Unlike SAST, this doesn't need access to the code of the application.

* [Burp Suite](https://portswigger.net/burp/enterprise) and [OWASP ZAP](https://www.zaproxy.org/) are the most popular DAST tools, but they don't work that well with modern applications (e.g. SPA such as React), and are not optimized to work within CI/CD pipelines, as they are usually time consuming and noisy.

* There are some more recent DAST tools worth exploring, like [Escape](https://escape.tech/) and [Akto API Security](https://www.akto.io/), which are more equipped to handle modern applications and APIs, but generally it is still recommended to run DAST as a separate scheduled job rather than within your CI/CD pipeline.

**IAST (Interactive application security testing)**

* IAST is a hybrid approach that tests application dynamically through simulating attacks like DAST, but it also integrates directly with the application's runtime to observe the application behavior during execution. This allows IAST to produce better findings and add more context to the findings (e.g. the file and line of code where the dangerous function exists).

* Like DAST, it is also recommended to run IAST as a separate scheduled job rather that within your CI/CD pipeline.

* To try IAST, you could start with the free community edition of [Contrast Security](https://docs.contrastsecurity.com/en/community-edition--ce-.html).

    :::tip Note that you don't necessarily have to use all types of security scanning tools SAST, DAST, and IAST. Start with the most important mitigations in your threat model, and select the tool that gives you the best coverage. If unsure, starting with SAST is usually the easiest path. :::

**Secret Scanning**

* Another important threat is hard-coded credentials/secrets in your code, which could lead to the exposure of these credentials and whatever data they have access to. This is especially dangerous in open-source repos. Hence, it is recommended to use a tool that scans your repos for secrets.

* [TruffleHog](https://github.com/trufflesecurity/trufflehog) is an open source tool that can be used for secret scanning, and there are also some paid solutions, such as [GitGuardian](https://www.gitguardian.com/) and [Semgrep Secrets](http://semgrep.dev/products/semgrep-secrets/).

**SCA (Software Composition Analysis)**

* As mentioned earlier, the security of an application doesn't rely only on the application code, but also on all of the underlying layers and abstractions. One of those layers that needs to be secured is the open source packages (npm, pip, maven, .. etc ) used by the application as direct or in-direct dependencies, as vulnerabilities affecting any of these packages could potentially also be used to attack the application using the package.

* Hence, it is recommended to use SCA tools to scan your application to get the list of open source dependencies, their current versions, and any known vulnerabilities that affect these versions.

* For that, we could use tools such as [Dependabot](https://github.com/dependabot) or [Snyk](https://snyk.io/product/open-source-security-management/), but as most SCA tools generate a huge number of alerts, it is recommended to explore tools that perform "Reachability Analysis" such as [Coana](https://www.coana.tech/) (Recently acquired by [Socket.dev](https://socket.dev/)) or [Endor Labs](https://www.endorlabs.com/).

* Reachability analysis is the automated analysis of the code and its dependencies to determine whether the vulnerable parts of the code (e.g. the vulnerable function) in the package with the known vulnerability is reachable from the application code. This enables us to dismiss 70-90% of the alerts as in many cases the vulnerability in the dependency is not reachable. For more details about "Reachability Analysis" you can check this [post](https://medium.com/appsec-untangled/how-reachability-analysis-can-help-with-open-source-vulnerabilities-mess-coana-as-an-example-54c55ba74cde). 

**Container Vulnerability Scanning**

* Another layer that also needs to be secured is the container images being used, as similar to open source packages, container image packages (e.g. deb or apk packages) vulnerabilities could affect the application's security.

* A preventive measure would be using distroless container images that don't have unnecessary packages, and are periodically being patched to minimize packages with vulnerabilities, such as [Chainguard Images](https://www.chainguard.dev/containers).

* Besides that, there are tools that could be used to scan your container images for vulnerabilities such as [Trivy](https://github.com/aquasecurity/trivy), [Grype](https://github.com/anchore/grype), or [Docker Scout](https://docs.docker.com/scout/).

* It is recommended to use these scanners as part of the container image build pipeline, as well as a scheduled job to cover newly discovered vulnerabilities.

**Cloud Configuration Scanning**

* Similarly, if you are deploying your application on a Cloud provider (e.g. AWS, GCP, or Azure), misconfiguring the Cloud Services could affect the security of your application (e.g. if you make an S3 bucket with sensitive data public this could lead to exposure of this sensitive data).

* Hence, it is recommended to scan your Cloud Service configuration periodically for misconfigurations, and for that you can use tools such as [checkov](https://github.com/bridgecrewio/checkov), [cloudsploit](https://github.com/aquasecurity/cloudsploit), or [Scout Suite](https://github.com/nccgroup/ScoutSuite)

**SCM and CI/CD Configuration Scanning**

* Another layer that could introduce vulnerabilities is the SCM (e.g. github) or CI/CD tools (e.g. github actions or CircleCI). e.g.:
    * Missing branch protection could allow an attacker to add malicious code to your repo.
    * A compromised github actions package (e.g. the `tj-actions/changed-files` [compromise](https://semgrep.dev/blog/2025/popular-github-action-tj-actionschanged-files-is-compromised/)) could expose your production secrets or credentials.

* Hence, it is recommended to scan the configuration of your SCM and CI/CD tools, and for that you could use tools such as [legitify](https://github.com/Legit-Labs/legitify).

**Sample: File Upload Service**

* You can find a sample service and its threat model [here](https://typical-braid-834.notion.site/Threat-Model-File-Upload-Service-Sample-6b2c52bef2194cf18917ce9fbb818d6a), and the steps followed to create the threat model are descrived [here](https://medium.com/@mohamed.osama.aboelkheir/list/threat-modeling-handbook-309a70ec273f). Under "Step 6 - Create Tests to Continuously Verify Mitigations" you can find some examples of how the threat model was used to create a DevSecOps testing plan.

**Summary**

* Here is a diagram the summarizes the DevSecOps tools and processes mentioned above mapping it to the different layers of the application.

<p align="center">
  <img title="DevSecOps Tools and Processes" alt="CDevSecOps Tools and Processes" border="0" width="90%" src="/img/application-layers-security-tools.png"/>
</p>

### Resources

*  [Certified DevSecOps Professional (CDP) Course](https://www.practical-devsecops.com/certified-devsecops-professional/): A hands-on DevSecOps Certification Course mainly relying on labs.
* [Using Threat Modeling to Create a DevSecOps plan](https://www.youtube.com/watch?v=XvraqRRjHjQ&t=900s): A talk about using Threat Modeling to create a DevSecOps plan.
- [Ultimate DevSecOps library](https://github.com/sottlmarek/DevSecOps): A library that contains a list of tools and methodologies accompanied with resources.
- [Awesome DevSecOps](https://github.com/devsecops/awesome-devsecops): An authoritative list of awesome DevSecOps tools with the help from community experiments and contributions.
- [DevSecOp University](https://www.practical-devsecops.com/devsecops-university/): A comprehensive collection of DevSecOps learning resources like books, tutorials, infographics, tools, and much more.

## Conclusion

The goal of "DevSecOps" is to make security move at the same pace as DevOps, and for this to happen we need to have a clear definition of what our application(s) need to be secure from (the threats), and the controls that we need to implement to protect against them (the mitigations). Then we need to select the right tools and processes that can help us verify that these controls are are working as expected across all the layers of the application.

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  link: string;
  prefix: string;
  title: string;
  description: JSX.Element;
  focusAreas: string;
};

type FocusAreasData = {
  data: string;
};

const FeatureList: FeatureItem[] = [
  {
    prefix: 'Kickoff',
    title: '⚡ Getting Started ⚡',
    link: '/getting-started',
    description: (
      <>
        Your entrypoint for the Dynamic DevOps Roadmap! It covers topics like before you start, learning plan,
        the different modes of the roadmap, foundations, and the roadmap index.
      </>
    ),
    focusAreas: '',
  },
  {
    prefix: 'Foundation',
    title: 'Introduction',
    link: '/foundations/introduction',
    description: (
      <>
        An overview of our Dynamic DevOps Roadmap and how this MVP-style roadmap differs from other
        linear roadmaps.
      </>
    ),
    focusAreas: 'Learning Strategy • Focus Areas • DevOps Topology • Soft Skills',
  },
  {
    prefix: 'Foundation',
    title: 'Module 1: Welcome to the DevOps World',
    link: '/foundations/module-01',
    description: (
      <>
        An introduction to the DevOps paradigm and the focus areas. Also, the relationship between
        DevOps, DevSecOps, and Agile in light of the Software Development Life Cycle (SDLC), in the end,
        is the initial part of the HiveBox project, phase 1.
      </>
    ),
    focusAreas: 'Foreword • Software Production • DevOps Methodology',
  },
  {
    prefix: 'Foundation',
    title: 'Module 2: Basics - DevOps Core',
    link: '/foundations/module-02',
    description: (
      <>
        Learn Python fundamentals, common development tools, and Git basics. Then, gain Linux
        essentials, common tools, and bash scripting skills. Also, cover Docker and containers fundamentals
        — finally, a hands-on with the HiveBox project phase 2.
      </>
    ),
    focusAreas: 'Code • Operating System • Containers',
  },
  {
    prefix: 'Foundation',
    title: 'Module 3: Start - Laying the Foundation',
    link: '/foundations/module-03',
    description: (
      <>
        Define goals, prioritize requirements, dive into code modularity, and then move to testing and
        quality assurance. Implement unit tests, follow Docker best practices, and explore quality gates
        in continuous integration with GitHub Actions — finally, a hands-on with the HiveBox project phase 3.
      </>
    ),
    focusAreas: 'Planning • Code • Containers • Continuous Integration',
  },
  {
    prefix: 'Foundation',
    title: 'Module 4: Expand - Constructing a Shell',
    link: '/foundations/module-04',
    description: (
      <>
        Review goals in planning, then apply the Twelve-Factor App methodology and REST API best
        practices. Embrace Kubernetes for container orchestration. Then explore observability, dive into
        continuous delivery solutions, also an overview of Cloud Computing — and finally, a hands-on
        with the HiveBox project phase 4.
      </>
    ),
    focusAreas: 'Planning • Code • Containers • Observability • Continuous Integration • Continuous Delivery • Infrastructure',
  },
  {
    prefix: 'Foundation',
    title: 'Module 5: Transform - Finishing the Structure',
    link: '/foundations/module-05',
    description: (
      <>
        Refine goals, integrate code with external systems, and write integration tests. Also, utilize
        Infrastructure as Code, learn Terraform essentials, and Kubernetes configuration management like
        Helm and Kustomize. Then, implement CD best practices — and finally, a hands-on with the HiveBox
        project phase 5.
      </>
    ),
    focusAreas: 'Planning • Code • Infrastructure • Containers • Observability • Continuous Delivery',
  },
  {
    prefix: 'Foundation',
    title: 'Module 6: Keep Improving',
    link: '/foundations/module-06',
    description: (
      <>
        Conduct Agile retrospectives to analyze the improvement areas, optimize code performance, and
        secure the software supply chain. Then, implement a multi-environment architecture with a log
        aggregation system for observability. Also, set up end-to-end release automation, explored
        continuous deployment with GitOps and Argo CD — and finally, a hands-on with the HiveBox
        project phase 6.
      </>
    ),
    focusAreas: 'Planning • Code • Infrastructure • Containers • Continuous Integration • Continuous Delivery • Continuous Deployment',
  },
  {
    prefix: 'Foundation',
    title: 'Module 7: Capstone Project',
    link: '/foundations/module-07',
    description: (
      <>
        Self-driven project to put everything together and create an industry-grade project which
        includes defining the requirements, setting the plan, implementation, then reviewing and
        refinement.
      </>
    ),
    focusAreas: 'Requirements • Planning • Implementation • Review',
  },
  {
    prefix: 'Foundation',
    title: 'Next Steps',
    link: '/foundations/next-steps',
    description: (
      <>
        Now, it's time to face the real world and prepare for the next step. Together, we will craft
        your CV and cover letter. Then, create a skills radar chart to know your strengths and areas and
        what you need to develop more. Also, discuss DevOps certificates and explore the following steps
        as a DevOps engineer.
      </>
    ),
    focusAreas: '',
  },
  {
    prefix: 'Practicing',
    title: '🛠️ More Hands-on Projects 🛠️',
    link: '/projects',
    description: (
      <>
        The HiveBox was a great hands-on project! What about more? Find out more end-to-end and use-case hands-on projects.
        Docker Best Practices, Release Automation, Deployment Automation, Multi-Environment Setup, and more.
      </>
    ),
    focusAreas: '',
  },
  {
    prefix: 'Job Finding',
    title: '💬 Interview Preparation 💬',
    link: '/interview',
    description: (
      <>
        How to prepare for the DevOps interview? It doesn't matter what your role is (DevOps Engineer or Software Engineer),
        what your level is (Junior, Medior, or Senior), here are interview questions and best practices.
      </>
    ),
    focusAreas: '',
  },
  {
    prefix: 'Advanced',
    title: '📈 Career Growth 📈',
    link: '/growth',
    description: (
      <>
        Congratulations! You're now a DevOps Engineer; what are other advanced or promising career paths?
        There are many opportunities in different areas, such as DevOps, DevSecOps, Cloud, SRE, Platform, DataOps, MLOps, AIOps, and more.
      </>
    ),
    focusAreas: '',
  },
  {
    prefix: 'FAQ',
    title: 'ℹ️ Frequently Asked Questions ℹ️',
    link: '/faq',
    description: (
      <>
        The most frequently asked questions about the Dynamic DevOps Roadmap.
        It's highly recommended that you read this page before starting with the roadmap.
      </>
    ),
    focusAreas: '',
  },
];

function FocusAreas({ data }: FocusAreasData) {
  if (data) {
    return (
      <><span className="timeline-focus-areas">Focus areas:</span> {data}</>
    );
  }
  return '';
}

function Feature({ prefix, title, link, description, focusAreas }: FeatureItem) {
  return (
    <li className="event" data-prefix={prefix}>
      <h3><Link to={link}>{title}</Link></h3>
      <p>{description}</p>
      <FocusAreas data={focusAreas} />
    </li>
  );
}


export function HomepageFeaturesModulesOnly(): JSX.Element {
  return (
    <section id="career-roadmap" className="section timeline-outer">
      <div className="container" id="timeline-content">
        <div className="row">
          <ul className="timeline">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeaturesModules(): JSX.Element {
  return (
    <>
      <Heading as="h2" className={styles.featuresHeader} id="walkthrough">
        Dynamic DevOps Roadmap Walkthrough
      </Heading>
      <div className={styles.walkthrough}>
        <HomepageFeaturesModulesOnly />
      </div>
      <div className="featuresButton">
        <Link title="Roadmap Modules"
          className="button button--secondary button--lg" to="/getting-started">
          Start Now →
        </Link>
      </div>
    </>
  );
}

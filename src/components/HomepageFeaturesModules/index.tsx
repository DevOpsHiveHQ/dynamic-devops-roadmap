import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  mark: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    mark: '⬣',
    title: 'Introduction',
    description: (
      <>
        Overview • Learning Strategy<br />
        Focus Areas • Soft Skills
      </>
    ),
  },
  {
    title: 'Welcome to DevOps World',
    mark: '1',
    description: (
      <>
        Overview • Software Production<br />
        DevOps Methodology
      </>
    ),
  },
  {
    title: 'Basics - DevOps Core',
    mark: '2',
    description: (
      <>
        Code • Operating System<br />
        Containers
      </>
    ),
  },
  {
    title: 'Start - Laying Base',
    mark: '3',
    description: (
      <>
        Planning • Code • Containers<br />
        Continuous Integration
      </>
    ),
  },
  {
    title: 'Expand - Constructing Shell',
    mark: '4',
    description: (
      <>
        Planning • Code • Containers • Observability<br />
        Continuous Integration/Delivery • Infrastructure
      </>
    ),
  },
  {
    title: 'Transform - Finishing Structure',
    mark: '5',
    description: (
      <>
        Planning • Code • Infrastructure • Containers<br />
        Observability • Continuous Delivery
      </>
    ),
  },
  {
    title: 'Optimize - Keep Improving',
    mark: '7',
    description: (
      <>
        Planning • Code • Infrastructure • Containers<br />
        Continuous Integration/Delivery/Deployment
      </>
    ),
  },
  {
    title: 'Capstone Project',
    mark: '8',
    description: (
      <>
        Requirements • Planning<br />
        Implementation • Review
      </>
    ),
  },
  {
    title: 'Next Steps',
    mark: '9',
    description: (
      <>
        Congratulations, you finished the roadmap!<br />
        Here what you should do next.
      </>
    ),
  },
];

function Feature({ title, mark, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ padding: '1rem 0'}}>
        <span className="featuresHexagon">{mark}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeaturesModules(): JSX.Element {
  return (
    <>
      <Heading as="h2" className={styles.featuresHeader}>
        Dynamic DevOps Roadmap Phases
      </Heading>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <div className="featuresButton">
        <Link title="Roadmap Modules"
          className="button button--secondary button--lg" to="/getting-started">
          Start Now →
        </Link>
      </div>
    </>
  );
}

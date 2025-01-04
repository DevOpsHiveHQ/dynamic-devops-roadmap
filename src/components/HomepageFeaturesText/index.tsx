import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    description: (
      <>
        <ul className={styles.featuresList}>
          <li>The main audience of Dynamic DevOps Roadmap is DevOps Engineer role (like DevOps, Cloud, Platform, SRE).</li>
          <li>Yet, it's still helpful for all software engineers, such as Frontend, Backend, QA, etc., to learn and use DevOps methodologies in daily work.</li>
        </ul>
      </>
    ),
  },
  {
    description: (
      <>
        <ul className={styles.featuresList}>
          <li>The Dynamic DevOps Roadmap follows a "Guided Learning" model, which puts learners at the heart of the learning journey.</li>
          <li>It supports the learner's journey towards understanding the DevOps problems and hands-on application without spoon-feeding.</li>
        </ul>
      </>
    ),
  },
  {
    description: (
      <>
        <ul className={styles.featuresList}>
          <li>Simply put, you cannot start a DevOps position by merely learning the tools! It didn't work in the past and will not work in the future!</li>
          <li>It's even more complicated in an early career without much previous software industry experience (like Dev or Ops).</li>
        </ul>
      </>
    ),
  },
];

function Feature({ description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeaturesText(): JSX.Element {
  return (
    <>
      <div style={{background: 'var(--ifm-color-light)'}}>
        <Heading as="h2" className={styles.featuresHeader} id="summary">
          Dynamic DevOps Roadmap in Nutshell
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
          <Link title="Getting Started"
            className="button button--secondary button--lg" to="/getting-started">
            More Details →
          </Link>
        </div>
      </div>
    </>
  );
}

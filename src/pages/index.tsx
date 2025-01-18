import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeaturesText from '@site/src/components/HomepageFeaturesText';
import HomepageFeaturesModules from '@site/src/components/HomepageFeaturesModules';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Link title="Roadmap Get Started"
          aria-label="Get started page" href="/getting-started">
          <img title="Roadmap Modules" alt="Dynamic DevOps Roadmap Modules"
            src="img/dynamic-devops-roadmap-modules-homepage.png" width="90%" />
        </Link>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{fontWeight: '600'}}>{siteConfig.tagline}</p>
        <p className="hero__subtitle">{siteConfig.customFields.description}</p>
        <div className={clsx(styles.buttons, 'hero-buttons')}>
          <Link title="Roadmap Get Started"
            className="button button--secondary button--lg"
            to="/getting-started">
            ⚡ Get Started ⚡
          </Link>
          <Link title="Roadmap FAQ"
            className="button button--primary-right button--lg" to="/faq">
            FAQ →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`A FREE Pragmatic DevOps learning`}
      description="A FREE pragmatic DevOps learning to kickstart your DevOps career in the Cloud Native era following the Agile MVP style! (also mentorship and bootcamp)">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageFeaturesModules />
        <HomepageFeaturesText />
      </main>
    </Layout>
  );
}

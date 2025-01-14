import Link from '@docusaurus/Link';
import {AudienceSwitch} from '../Audience';
import styles from './styles.module.css';

const ModuleHeader = () => {
  return (
    <div className={styles.moduleHeader}>
      <span className={styles.backToIndex}>
        <Link title="Back to the roadmap index page." to="/getting-started#roadmap-index">
          Back to roadmap index
        </Link>
      </span>
      <span>
        <AudienceSwitch/>
      </span>
    </div>
  );
};

export default ModuleHeader

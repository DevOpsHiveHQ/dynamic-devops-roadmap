import Link from '@docusaurus/Link';
import {AudienceSwitch} from '../Audience';
import styles from './styles.module.css';

const ModuleHeader = () => {
  return (
    <div className={styles.moduleHeader}>
      <span className={styles.backToIndex}>
        <Link to="/getting-started#roadmap-index">Back to the Roadmap Index</Link>
      </span>
      <span>
        <AudienceSwitch/>
      </span>
    </div>
  );
};

export default ModuleHeader

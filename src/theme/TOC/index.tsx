import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import Link from '@docusaurus/Link';
import type { WrapperProps } from '@docusaurus/types';

function SidebarButton() {

  const divStyle = {
    paddingTop: 32
  };

  const linkStyle = {
    whiteSpace: 'normal'
  };

  return (
    <div style={divStyle}>
      <Link style={linkStyle}
        title="Community Newsletter"
        rel="noopener noreferrer"
        className="button button--secondary button--lm"
        to="https://newsletter.devopsroadmap.io/subscribe">
        Subscribe to Community →
      </Link>
    </div>
  );
}

type Props = WrapperProps<typeof TOCType>;

export default function TOCWrapper(props: Props): JSX.Element {
  return (
    <div style={{ position: 'sticky', top: 76 }}>
      <TOC {...props} />
      <SidebarButton />
    </div>
  );
}

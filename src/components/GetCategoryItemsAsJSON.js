import React from 'react';
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/plugin-content-docs/client';
import CodeBlock from '@theme/CodeBlock';

/*
Usage:
    import GetCategoryItemsAsJSON from '@site/src/components/GetCategoryItemsAsJSON';
    <GetCategoryItemsAsJSON />
*/

const GetCategoryItemsAsJSON = () => {
  return (
    <>
        <DocCardList items={useCurrentSidebarCategory().items} />
        <CodeBlock className="language-json">{JSON.stringify(useCurrentSidebarCategory().items, null, 2)}</CodeBlock>
    </>
  );
};

export default GetCategoryItemsAsJSON;

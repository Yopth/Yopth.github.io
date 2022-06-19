import React from 'react';

import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import HomepageHeader from '../components/HomepageHeader.tsx';
import Car from '../components/Car';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The is the Pandy's composition hub">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Car />
      </main>
    </Layout>
  );
}

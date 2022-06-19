import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.scss';

export default function HomepageHeader(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <h1 className='hero__title'>「 {siteConfig.title} 」</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs-engh/intro'
          >
            Go to 学点英语 👳
          </Link>
          <Link
            className='button button--secondary button--lg'
            to='/docs-tech/intro'
          >
            Go to 技术文章 💻
          </Link>
        </div>
      </div>
    </header>
  );
}

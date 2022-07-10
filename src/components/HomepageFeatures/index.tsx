import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    // title: 'Easy to Use',
    title: '人生路长',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        路漫漫其修远兮，吾将上下而求索。
      </>
    ),
  },
  {
    // title: 'Focus on What Matters',
    title: '笔耕不辍',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        妓女不能等有了性欲才接客，作家不能等有了灵感才写作。
      </>
    ),
  },
  {
    // title: 'Powered by React',
    title: '积极向上',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        生命是一朵早晚会凋谢的鲜花，但是花开不是为了花落。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={clsx("text--center padding-horiz--md", styles.content)}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

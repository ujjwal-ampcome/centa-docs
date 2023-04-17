import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This page will give you a quick review of the stages involved in deveploping our application
      </>
    ),
  },
  {
    title: 'Question Creation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Question creation starts with Work Requests, admin can create work requests and can see all created requests by other users too in this table.

        You also get an overview of the question creation, its work requests and setup


      </>
    ),
  },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
<div className="text--center padding-horiz--md">
        {
          (title === 'Getting Started') ? 
            <a href='/docs/intro'><h3>{title}</h3></a> : 
              (title === 'Question Creation') ? 
                <a href='/docs/category/question-creation'><h3>{title}</h3></a> : 
                    null
        }
          <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

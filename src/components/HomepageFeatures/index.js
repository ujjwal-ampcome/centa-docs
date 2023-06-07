import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Getting Started",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        This page will give you a quick review of the stages involved in
        understanding our application
      </>
    ),
  },
  {
    title: "Users",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>A brief overview of user roles that can be assigned to any ams user </>
    ),
  },
  {
    title: "Question Creation",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Question creation is the process of developing questions that can be
        used to assess knowledge, skills, and understanding of a particular
        topic or subject.
      </>
    ),
  },

  {
    title: "Paper Setting",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        The process of creating paper which involves participation from Product
        Managers, Paper Setter & Paper Approver
      </>
    ),
  },
  {
    title: "Results",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        In the assessment management system, the "Results" section typically
        encompasses various functionalities related to test events, evaluations,
        and candidate registration.
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

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {title === "Getting Started" ? (
          <a href="/docs/intro">
            <h3>{title}</h3>
          </a>
        ) : title === "Question Creation" ? (
          <a href="/docs/category/question-creation">
            <h3>{title}</h3>
          </a>
        ) : title === "Users" ? (
          <a href="/docs/users">
            <h3>{title}</h3>
          </a>
        ) : title === "Paper Setting" ? (
          <a href="/docs/category/paper-setting">
            <h3>{title}</h3>
          </a>
        ) : title === "Results" ? (
          <a href="/docs/category/results">
            <h3>{title}</h3>
          </a>
        ) : null}

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

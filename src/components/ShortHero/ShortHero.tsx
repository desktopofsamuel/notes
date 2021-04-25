// @flow strict
import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import type { Edges } from "../../types";
import * as styles from "./ShortHero.module.scss";
import Img from "gatsby-image";

type Props = {
  edges: Edges
};

const ShortHero = ({ edges }: Props) => {
  return (
    <div className={styles["feed"]}>
      {edges.map(edge => (
        <div className={styles["feed__item"]} key={edge.node.fields.slug}>
          <div className={styles["feed__item-image"]}>
            {!!edge.node.frontmatter.socialImage ? (
              <Img
                className={styles["feed__item-image"]}
                fluid={edge.node.frontmatter.socialImage.childImageSharp.fluid}
                alt={edge.node.frontmatter.title}
              />
            ) : !!edge.node.frontmatter.externalImage ? (
              <img
                className={styles["feed__item-image"]}
                src={edge.node.frontmatter.externalImage}
                alt={edge.node.frontmatter.title}
              />
            ) : (
              <span className={styles["feed__item-separator"]} />
            )}
          </div>
          <div className={styles["feed__item-contentwrapper"]}>
            <div className={styles["feed__item-titlewrapper"]}>
              <h2 className={styles["feed__item-title"]}>
                <a
                  className={styles["feed__item-title-link"]}
                  href={edge.node.frontmatter.url}
                  target="_blank"
                >
                  {edge.node.frontmatter.title}
                </a>
              </h2>
              <a
                className={styles["feed__item-url"]}
                href={edge.node.frontmatter.url}
                target="_blank"
              >
                →
              </a>

              {/*           <div className={styles["feed__item-meta"]}>
<time
              className={styles["feed__item-meta-time"]}
              dateTime={moment(edge.node.frontmatter.date).format(
                "MMMM D, YYYY"
              )}
            >
              {moment(edge.node.frontmatter.date).fromNow()}
            </time>
          </div> */}
            </div>
            <div
              className={styles["feed__item-description"]}
              dangerouslySetInnerHTML={{
                __html: `${edge.node.html}`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortHero;

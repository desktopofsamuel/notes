// @flow strict
import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import type { Edges } from "../../types";
import styles from "./ShortFeed.module.scss";
import Img from "gatsby-image";

type Props = {
  edges: Edges
};

const ShortFeed = ({ edges }: Props) => {
  return (
    <div className={styles["feed"]}>
      {edges.map(edge => (
        <div className={styles["feed__item"]} key={edge.node.fields.slug}>
          <div className={styles["feed__item-title-wrapper"]}>
            <h2 className={styles["feed__item-title"]}>
              <Link
                className={styles["feed__item-title-link"]}
                to={edge.node.fields.slug}
              >
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <a
              className={styles["feed__item-url"]}
              href={edge.node.frontmatter.url}
              target="_blank"
            >
              →
            </a>
          </div>
          <p className={styles["feed__item-description"]}>
            {edge.node.frontmatter.description || edge.node.excerpt}
          </p>
          <div className={styles["feed__item-meta"]}>
            <time
              className={styles["feed__item-meta-time"]}
              dateTime={moment(edge.node.frontmatter.date).format(
                "MMMM D, YYYY"
              )}
            >
              {moment(edge.node.frontmatter.date).fromNow()}
            </time>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortFeed;

// @flow strict
import React from "react";
import * as styles from "./Content.module.scss";
import moment from "moment";
import { Link } from "gatsby";

type Props = {
  body: string;
  title: string;
  date: string;
  link: string;
};

const Content = ({ body, title, date, link }: Props) => (
  <div className={styles["content"]}>
    <div className={styles["content__meta"]}>
      <Link to={link}>
        <time className={styles["content__meta-date"]}>
          {moment(date).format("D MMM YYYY")}
        </time>
      </Link>
      <h1 className={styles["content__meta-title"]}>{title}</h1>
    </div>
    <div
      className={styles["content__body"]}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;

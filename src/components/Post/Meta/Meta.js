// @flow strict
import React from "react";
import moment from "moment";
import styles from "./Meta.module.scss";
import { Link } from "gatsby";

type Props = {
  date: string
};

const Meta = ({ date, link }: Props) => (
  <div className={styles["meta"]}>
    <Link to={link} className={styles["meta__date"]}>
      {moment(date).format("D MMM YYYY")}
    </Link>
  </div>
);

export default Meta;

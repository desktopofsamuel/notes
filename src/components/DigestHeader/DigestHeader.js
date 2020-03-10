import React from "react";
import { Link } from "gatsby";
import type { Edges } from "../../types";
import styles from "./DigestHeader.module.scss";

type Props = {
  children: Node
};

const DigestHeader = ({ children, ...props }: Props) => {
  return <div className={styles["digest"]}>{children}</div>;
};
export default DigestHeader;

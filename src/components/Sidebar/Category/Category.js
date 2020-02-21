// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Category.module.scss";

type Props = {
  category: {
    label: string,
    path: string
  }[]
};

const Category = ({ category }: Props) => (
  <nav className={styles["category"]}>
    <ul className={styles["category__list"]}>
      {category.map(item => (
        <li className={styles["category__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["category__list-item-link"]}
            activeClassName={styles["category__list-item-link--active"]}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Category;

// @flow strict
import React from "react";
import { withPrefix, Link } from "gatsby";
import { author } from "./Author.module.scss";

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  };
  isIndex?: boolean;
};

const Author = ({ author, isIndex }: Props) => (
  <div className={author["author"]}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={author["author__photo"]}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    {isIndex === true ? (
      <h1 className={author["author__title"]}>
        <Link className={author["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={author["author__title"]}>
        <Link className={author["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <div className={author["author__bio"]}>
      <div dangerouslySetInnerHTML={{ __html: author.fullbio }} />
    </div>
  </div>
);

export default Author;

// @flow strict
import React from "react";
import { Link } from "gatsby";
import Author from "./Author";
import Comments from "./Comments";
import Content from "./Content";
import Tags from "./Tags";
import { post } from "./Post.module.scss";
import type { Node } from "../../types";

type Props = {
  post: Node,
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={post["post"]}>
      <Link className={post["post__home-button"]} to="/">
        所有文章
      </Link>

      <div className={post["post__content"]}>
        <Content body={html} title={title} date={date} link={slug} />
      </div>

      <div className={post["post__footer"]}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={post["post__comments"]}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;

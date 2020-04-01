// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { useSiteMetadata } from "../hooks";
import type { MarkdownRemark } from "../types";

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate = ({ data }: Props) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
    author
  } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const postSlug = data.markdownRemark.fields.slug;
  const { title: postTitle, description: postDescription } = frontmatter;
  const metaImage = frontmatter.socialImage
    ? frontmatter.socialImage.childImageSharp.fluid.src
    : null;
  const metaDescription =
    postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout
      title={`${postTitle} | ${siteTitle} | ${siteSubtitle}`}
      description={metaDescription}
      socialImage={metaImage}
      slug={postSlug}
      isPost
    >
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
  }
`;

export default PostTemplate;

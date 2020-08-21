// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { MarkdownRemark } from "../types";
import OpenGraph from "../../static/opengraph.png";

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
  },
};

const PageTemplate = ({ data }: Props) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
  } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const postSlug = data.markdownRemark.fields.slug;
  const { title: pageTitle, description: pageDescription } = frontmatter;
  const metaImage =
    frontmatter.socialImage !== null
      ? frontmatter.socialImage.childImageSharp.fluid.src
      : OpenGraph;
  const metaDescription =
    pageDescription !== null ? pageDescription : siteDescription;

  return (
    <Layout
      title={`${pageTitle} | ${siteTitle} | ${siteSubtitle}`}
      description={metaDescription}
      socialImage={metaImage}
      slug={postSlug}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
        socialImage {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;

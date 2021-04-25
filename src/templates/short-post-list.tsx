// @flow strict
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import DigestHeader from "../components/DigestHeader";
import ShortHero from "../components/ShortHero";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { AllMarkdownRemark } from "../types";

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext,
};

const ShortPostList = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout title={`#地圖 | ${siteTitle}`} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page title="#Digest">
        <div>
          <Link to="/digest-rss.xml">訂閱</Link>
        </div>
        <DigestHeader>
          <ShortHero edges={edges} />
        </DigestHeader>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ShortPostList {
    allMarkdownRemark(
      filter: {
        frontmatter: { template: { eq: "digest" }, draft: { ne: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          excerpt
          frontmatter {
            title
            date
            category
            description
            url
            externalImage
            socialImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
          html
        }
      }
      totalCount
    }
  }
`;
export default ShortPostList;

// Filter if Social Image is null
/* socialImage: { ne: null } */

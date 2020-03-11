// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import ImageFeed from "../components/ImageFeed";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { AllMarkdownRemark } from "../types";

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const TravelList = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout title={`#地圖 | ${siteTitle}`} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page title="#地圖">
        <ImageFeed edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TravelList {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          template: { eq: "post" }
          draft: { ne: true }
          category: { eq: "地圖" }
        }
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
            socialImage {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default TravelList;

// Filter if Social Image is null
/* socialImage: { ne: null } */

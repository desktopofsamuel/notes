/* // @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useTravelList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TravelListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              template: { eq: "post" }
              draft: { ne: true }
              category: { eq: "地圖" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark;
};

export default useTravelList;
 */

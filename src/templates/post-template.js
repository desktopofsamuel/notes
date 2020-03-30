// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
	data: {
		markdownRemark: MarkdownRemark,
	},
};

const PostTemplate = ({ data }: Props) => {
	const { title: siteTitle, subtitle: siteSubtitle, description: siteDescription } = useSiteMetadata();
	const { frontmatter } = data.markdownRemark;
	const { title: postTitle, description: postDescription } = frontmatter;
	const postImage = frontmatter.socialImage.publicURL;
	const metaDescription = postDescription !== null ? postDescription : data.markdownRemark.excerpt;

	return (
		<Layout title={`${postTitle} | ${siteTitle} | ${siteSubtitle}`} description={metaDescription} socialImage={postImage}>
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
          publicURL
        }
      }
      excerpt
    }
  }
`;

export default PostTemplate;

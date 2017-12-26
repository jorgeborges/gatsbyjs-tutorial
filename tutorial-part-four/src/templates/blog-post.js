import React from "react";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ data.site.siteMetadata.title } - { post.frontmatter.title }</title>
      </Helmet>
      <h1>{ post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
import React from "react";
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div style={{margin: '2em'}}>
      <h1>{post.frontmatter.title}</h1>
      <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author}</h4>
      <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`;

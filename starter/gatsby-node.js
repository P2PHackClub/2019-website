const path = require('path')
const _ = require("lodash")
module.exports.onCreateNode = ({node,actions}) =>{
    const {createNodeField} = actions
    if(node.internal.type == 'MarkdownRemark'){
       const slug = path.basename(node.fileAbsolutePath,'.md')
       createNodeField({
           node,
           name: 'slug',
           value: slug
       })
    }
}
module.exports.createPages = async ({graphql,actions})=>{
    const { createPage } = actions
    const tagTemplate = path.resolve(`src/templates/tags.js`)
    const blogTemplate = path.resolve(`src/templates/page.js`)
    const res = await graphql(`
    query{
        allMarkdownRemark(
            filter: { fields: { draft: { eq: false } } }
        ){
            edges{
                node{
                    fields{
                        slug
                    }
                    frontmatter{
                        tags
                    }
                }
            }
        }
    }
    `)
            
              tagSet = new Set();
            const posts = res.data.allMarkdownRemark.edges
            posts.forEach((post)=>{
                const {slug } = post.node.fields
                const {tags} = post.node.frontmatter
                    createPage({
                        component:blogTemplate,
                        path:`/blog/${slug}`,
                        context:{
                            slug
                        }
                    })
                    if(tags){
                        tags.forEach((tag)=>{
                            tagSet.add(tag);
                        })
                    }    
                // }
            })
            
                tagArray = Array.from(tagSet)
              tagArray.forEach((tag)=>{
                createPage({
                    component:tagTemplate,
                    path: `/tags/${_.kebabCase(tag)}`,
                    context:{
                        tag
                    }
                })
            })
    
}
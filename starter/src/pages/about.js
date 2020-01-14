import React from 'react'
import {  StaticQuery,graphql} from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import config from '../../data/siteConfig'
const Aboutpage = () =>{
    const query = graphql`
    query{
        site{
            siteMetadata{
                githubUsername
                twitterUsername
                linkedInUsername
            }
        }
    }
    `
    return(
        <Layout>
            <Helmet title={`Me - ${config.userName}`}/>
        <div>
            <h2>About me</h2>
            <p>Hi ! I am <strong>Aman Kumar</strong> a Web enthusiast and Junior year student at IIT Patna. I like to spend my leisure time working on web projects.</p>
            <br/>
            <h3 id="around-the-web">Around the web</h3><br/>
            <StaticQuery query={query} render={
                ({site:{
                    siteMetadata:{
                        githubUsername:github,
                        twitterUsername:twitter,
                        linkedInUsername:linkedin
                    }
                }})=>{
                    return(
                        <ul>
                            <li>Github: <a href={`https://github.com/${github}`}>{github}</a></li>
                            <li>Twitter: <a href={`https://twitter.com/${twitter}`}>{twitter}</a></li>
                            <li>LinkedIn: <a href={`https://linkedin.com/in/${linkedin}`}>{linkedin}</a></li>
                        </ul>
                    )
                }
            } />
        </div>
        </Layout>
        
    )
}
export default Aboutpage
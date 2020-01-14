import React from "react"
import { Link,graphql,useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `);
    return(
        <footer>
            <h2><Link to="/">{data.site.siteMetadata.title}</Link></h2>
            <p>{data.site.siteMetadata.title} is fiscally sponsored by Hack Club Bank, a project by the The Hack Foundation (d.b.a Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</p>
            <ul>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to = "/missions">Missions</Link></li>
                    <li><Link to = "/blog">Blog</Link></li>
            </ul>
            <hr></hr>
            <p>© 2020 {data.site.siteMetadata.title}</p>
        </footer>
    )
}
export default Footer
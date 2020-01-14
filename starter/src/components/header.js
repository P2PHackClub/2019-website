import React from "react"
// import  'bulma/bulma.sass'
import { Link,graphql,useStaticQuery } from 'gatsby'
import headerStyles from './modules/header.module.scss'
const Header = () => {
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
        <div className={headerStyles.container}>
            <header>
                <ul className={headerStyles.list}>
                    <li><Link to="/" className={headerStyles.title} activeClassName={headerStyles.active_nav_list}>{data.site.siteMetadata.title}</Link></li>
                    <li><Link to ="/about" activeClassName={headerStyles.active_nav_list}>About</Link></li>
                    <li><Link to = "/missions" activeClassName={headerStyles.active_nav_list}>Missions</Link></li>
                    <li><Link to = "/blog" activeClassName={headerStyles.active_nav_list}>Blog</Link></li>
                </ul>
            </header>
        </div>
    )
}
export default Header
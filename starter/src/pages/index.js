import React from "react"
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import '../styles/index.scss'
import config from '../../data/siteConfig'
const Indexpage = ()=>{
    return(
    <Layout>
        <Helmet title={config.siteTitle}/>
        <p>BUILD A TEXT-ADVENTURE GAME WITH JS --></p>
        <h1>Hack. Build. Create</h1>
        <p>A middle-school club at <a href="https://www.peaktopeak.org/">Peak to Peak Charter School</a>, where we build hardware and software projects.</p>
        <p><b>Thursdays, 3:15-4:00pm</b></p>

        <h2>Recent Missions</h2>

        <h2>News</h2>
        <h3>New website design! <span>| <time dateTime="2019-01-12">January 12th, 2019</time></span></h3>
        <p>We are proud to present our new website design!</p>
 
        <h2>Partners</h2>
        <p>These are the organizations and companies that help us make our club the best it can be. Thank you!</p>

    </Layout>
        )
}

export default Indexpage

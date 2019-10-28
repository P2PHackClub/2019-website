import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { OutlineButton } from '@hackclub/design-system'

import Layout from '../components/layout';
import OrpheusFlag from '../components/OrpheusFlag'
import Logo from '../components/Logo'
import '../typography.css'

const IndexPage = ({ data }) => (
  <Layout>
  <a href="https://hackclub.com/">
  <OrpheusFlag />
  </a>
    <div align="center">
      <MainLogo>
        <Logo />
      </MainLogo>
      <Title>P2P Hack Club</Title>
      <Subtitle>A club at Peak to Peak Charter school,<br /> where we build hardware and software projects!<br /> Thursdays, 3:15-4:00pm</Subtitle>
      <Link to="/build-your-first-website">
        <OutlineButton>
          Mission Start!
        </OutlineButton>
      </Link>
    </div>
  </Layout>

)
export default IndexPage

const Title = styled.h1`
  font-family: 'DPComic', cursive;
  color: #1E1E1E;
  font-size: 80px;
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  line-height: 0px;
  padding-top: 5px;
`

const MainLogo = styled.div`
  width: 300px;
  height: 344px;
  padding-top: 10.5px;
`

const Subtitle = styled.h2`
  font-family: 'Inconsolata-Regular', monospace;
  color: #474747;
  font-size: 40px;
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  line-height: 55px;
  padding-top: 5px;
`

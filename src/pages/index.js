import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout';
import Logo from '../../content/assets/logo.svg'
import '../typography.css'

const IndexPage = ({ data }) => (
  <Layout>
    <div align="center">
      <Logo height="429" width="376.14" />
      <Title>P2P Hack Club</Title>
    </div>
  </Layout>
)
export default IndexPage

const Title = styled.h1`
  font-family: 'DPComic', cursive;
  font-size: 99px;
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
}

`

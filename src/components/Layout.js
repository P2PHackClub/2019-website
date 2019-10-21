import React from "react"
import Helmet from 'react-helmet'
import { ThemeProvider } from '@hackclub/design-system'

export default ({ children }) => (
  <ThemeProvider webfonts>
    <Helmet title="P2P Hack Club"> {/*TODO: Remove hardcoding*/}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta description="A club at Peak to Peak Charter school, where we build hardware and software projects!"/> {/*TODO: Remove hardcoding*/}
    </Helmet>
    {children}
  </ThemeProvider>
)

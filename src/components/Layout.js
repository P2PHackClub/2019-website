import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider, theme } from '@hackclub/design-system'

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({
  title = {data.site.siteMetadata.title},
  desc = {data.site.siteMetadata.description},
  url = {data.site.siteMetadata.url},
  path = '/',
  children
}) => (
  <ThemeProvider webfonts>
    <Helmet title={{data.site.siteMetadata.title}}>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      {meta([
        { name: 'description', content: desc },
        { property: 'og:site_name', content: title },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url + path }
      ])}
    </Helmet>
    {children}
  </ThemeProvider>
)

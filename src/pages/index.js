import React from "react"
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { ThemeProvider, Box, Link, Image, Heading, Card, Icon, Text, Flex, Button } from '@hackclub/design-system'

export default () => (

<ThemeProvider webfonts>

<Helmet
      title="P2P Hack Club - Main Page"
      meta={[
        { name: 'description', content: 'A student run middle-school club at Peak to Peak Charter school where we build amazing things.' },
        { name: 'keywords', content: 'hack, peak, charter' },
      ]}
    />

<Box align="center" py={5}>
    <Link href="https://hackclub.com">
      <Image
        src="https://i.imgur.com/jiegsaK.jpg"
        width={200}
        mx="auto"
        alt="P2P Hack Club Logo"
      />
      </Link>
</Box>

<Heading m={3} align="center">
P2P Hack Club
</Heading>

<Subtitle m={3} align="center">
A student run middle-school club at Peak to Peak Charter school where we build amazing things. Future meetings are expected on Thursdays. For more information, you can talk to Reema, Siddharth, Arihant, or JP
</Subtitle>

<CardGroup>
<Card
  boxShadowSize="sm"
  my={4}
  p={3}
  color="black"
  bg="white"
>

<div style={{ color: '#A87EEA' }}>
    <Icon glyph="event-code" size={64}/>
    <Text m={0.5} bold>
      Next Meeting
    </Text>
    <Text>
    October 17th from 3:15-4:00pm in S297.
    </Text>
  </div>

</Card>



</CardGroup>


<CardGroup>
<a href="/missions/hackclubmeeting-1/">
<Button>
Mission Start!
</Button>
</a>
</CardGroup>

</ThemeProvider>

)

const CardGroup = styled(Flex)`

  text-align: center;
  justify-content: center;
  flex-wrap: wrap;

`

const Subtitle = styled(Text)`
  max-width: 500px
  text-align: center;
  margin:0 auto;
`

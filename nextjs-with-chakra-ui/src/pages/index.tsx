import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/commons/Hero'
import { Container } from '../components/commons/Container'
import { Main } from '../components/commons/Main'
import { DarkModeSwitch } from '../components/commons/DarkModeSwitch'
import { CTA } from '../components/commons/CTA'
import { Footer } from '../components/commons/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />

    <Main>

      <Text color="text">
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>TypeScript</Code>.
      </Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    
    <CTA />

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>

  </Container>
)

export default Index

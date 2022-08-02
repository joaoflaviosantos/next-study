import { Button, color, Flex, Heading, Input } from '@chakra-ui/react'

import { Container } from '../components/commons/Container'
import { DarkModeSwitch } from '../components/commons/DarkModeSwitch'

const Login = () => (
	<Container height="100vh">

		<Flex height="100vh" alignItems="center" justifyContent="center" _dark={{ color: 'black' }}>

			<Flex direction="column" bg="gray.100" p={12} rounded={6}>

				<Heading mb={6}>Welcome back!</Heading>

				<Input 
				placeholder="email@mail.com" 
				_placeholder={{ color: 'gray.500' }} 
				variant="filled" mb={3} type="email" 
				/>

				<Input 
				placeholder="**********" 
				_placeholder={{ color: 'gray.500' }} 
				variant="filled" 
				mb={6} 
				type="password" 
				/>

				<Button colorScheme="teal">Login</Button>

			</Flex>

		</Flex>

		<DarkModeSwitch />
		
	</Container>
)

export default Login

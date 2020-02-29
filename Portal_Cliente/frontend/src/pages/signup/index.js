import React from 'react'
import { MyContext } from '../../context'
import { FaSwimmer } from "react-icons/fa"
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  Box
} from '@chakra-ui/core'
import Form from '../../components/Form'

function Signup() {
  return (
    <MyContext.Consumer>
      {context => (
        <Flex w="100vw" h="90vh" align="center" justify="center">
          <Form submit={context.handleSignupSubmit} title="Signup" >
            <FormControl isRequired>
              <InputGroup  >
                <InputLeftAddon children={<Box as={FaSwimmer} size="20px" color="#1e4e8c" />} />
                <Input
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={context.state.formSignup.name}
                  onChange={context.handleSignupInput}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftAddon children={<Icon name="email" color="#1e4e8c" /> } />
                <Input
                  onChange={context.handleSignupInput}
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={context.state.formSignup.email}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftAddon children={<Icon name="lock"  color="#1e4e8c" /> } />
                <Input
                  onChange={context.handleSignupInput}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={context.state.formSignup.password}
                />
              </InputGroup>
            </FormControl>
          </Form>
        </Flex>
      )}
    </MyContext.Consumer>
  )
}

export default Signup
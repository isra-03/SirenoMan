import React from 'react'
import { MyContext } from '../context'
import { NavLink } from 'react-router-dom'
import { Flex, Text} from '@chakra-ui/core'

const styles = {
    
  style: {
    padding: '20px'
  },
  activeStyle: {
    color: '#9DECF9'
  }
}

export default function Navbar() {
  return (
    <MyContext.Consumer>
      {context => (
        <Flex
          w="100vw"
          h="10vh"
          bg="#4299E1"
          align="center"
          justify="flex-end"
          
        >
          {!context.state.isLogged && (
            <>
              <NavLink {...styles} exact to="/">
              <Text as="i" color="#EDF2F7" >Home</Text>
              </NavLink>
              <NavLink {...styles} exact to="/signup">
              <Text as="i" color="#EDF2F7">Signup</Text>               
              </NavLink>
              <NavLink {...styles} exact to="/login">
                <Text as="i" color="#EDF2F7" >Login</Text>
              </NavLink>
            </>
          )}
          {context.state.isLogged && context.state.isCoach && (
            <>
              <NavLink {...styles} exact to="/">
                Home
              </NavLink>
              <NavLink {...styles} exact to="/booking">
                Booking
              </NavLink>
              <NavLink {...styles} exact to="/perfil">
                Perfil
              </NavLink>
              <button onClick={context.handleLogout}>Logout</button>
            </>
          )}
          {context.state.isLogged && !context.state.isCoach && (
            <>
              <NavLink {...styles} exact to="/">
                Home
              </NavLink>
              <NavLink {...styles} exact to="/booking">
                Booking
              </NavLink>
              <NavLink {...styles} exact to="/program">
                Program
              </NavLink>
              <button onClick={context.handleLogout}>Logout</button>
            </>
          )}
        </Flex>
      )}
    </MyContext.Consumer>
  )
}
import React, { Component } from 'react'
import { MyContext } from '../../context'
import {ListItem, ListIcon,List, Box, Image, Text, Link, StarIcon, Avatar  } from '@chakra-ui/core'
import { MdSettings } from "react-icons/md"

class Program extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {context => (
           <>
           <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
           <Avatar size="xl" name="S M" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fibricenov%2Fnadadores%2F&psig=AOvVaw1vajRRHTPhuTfyq3yRL4b3&ust=1583268543348000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiVqpDV_OcCFQAAAAAdAAAAABAD" />
      <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fibricenov%2Fnadadores%2F&psig=AOvVaw1vajRRHTPhuTfyq3yRL4b3&ust=1583268543348000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiVqpDV_OcCFQAAAAAdAAAAABAD" alt='Coach' />

      <Box p="6">
         <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            / Coach Alan Martinez.
            <br></br>    Comunicación efectiva. Motivación. Planificación y organización. Enseñanza de valores. Conocimiento. Empatía. Paciencia Control y gestión.
          </Box>
        </Box>
      </Box>
    </Box>
    <br></br>
<br></br>

           <List spacing={3}>
  <ListItem>
    <ListIcon icon="check-circle" color="green.500" />
    Clases de natación individual
  </ListItem>
  <ListItem>
    <ListIcon icon="check-circle" color="green.500" />
    Flotacion y Supervivencia
  </ListItem>
  <ListItem>
    <ListIcon icon={MdSettings} color="green.500" />
    CLASES DE NATACIÓN INDIVIDUAL
  </ListItem>
</List>
  
           </>
          )}
        </MyContext.Consumer>
      )
    }
  }
  
  export default Program
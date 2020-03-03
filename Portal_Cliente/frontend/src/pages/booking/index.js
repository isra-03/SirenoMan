
import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import { Select, ListItem, ListIcon,List, Box, Image, Text, Link, StarIcon, Avatar } from "@chakra-ui/core";
import { MdSettings } from "react-icons/md"

export default function Booking ({ history }) {
    const context = useContext(MyContext)
    //component did mount
    useEffect(() => { 
        if (!context.state.isLogged) return history.push('/login')
  })
  const handleChange=async(e)=>{
    await context.handleChange(e,'allPrograms')
  }
  return (
    <MyContext.Consumer>
{context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return ( 
            <> 
{ /*         <List spacing={context.state.allPrograms}>
//  <ListItem>
//    <ListIcon icon="check-circle" color="green.500" />
//    Clases de natación individual
//  </ListItem>
//  
//  <ListItem>
//    <ListIcon icon={MdSettings} color="green.500" />
//    CLASES DE NATACIÓN INDIVIDUAL
//  </ListItem>
</List> */}
    <Select onChange={(e)=>handleChange(e)} value={context.state.allPrograms}>
  {context.state.allPrograms.map((programa,indx)=><option key={indx} value={programa._id}>{programa.tipo}</option>)
  
  }
</Select>

</>)

        else return <>Loading...</>
      }}
    </MyContext.Consumer>
)
}
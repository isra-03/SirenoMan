
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
    await context.handleChange(e,'formBooking')
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
    <Select name = "programa" onChange={(e)=>handleChange(e)} value={context.state.formBooking.programa}>
  {context.state.allPrograms.map((programa,indx)=><option key={indx} value={programa._id}>{programa.lugar}-{programa.tipo}</option>)
  }
</Select>
<Select name = "dia" onChange={(e)=>handleChange(e)} value={context.state.formBooking.dia}>
    <option value="lunes">Lunes</option>
    <option value="marte">Martes</option>
    <option value="sabado">Sabado</option>
    <option value="domingo">Domingo</option>
</Select>
<Select name = "horario" onChange={(e)=>handleChange(e)} value={context.state.formBooking.horario}>
    <option value="09:00-10:00">09:00-10:00</option>
    <option value="11:00-12:00">11:00-12:00</option>
    <option value="18:00-19:00">18:00-19:00</option>
 </Select>

</>)

        else return <>Loading...</>
      }}
    </MyContext.Consumer>
)
}
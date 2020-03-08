
import React, { useEffect, useContext} from 'react'
import { MyContext } from '../../context'
import { Select, Heading, Box,Stack, Text, Avatar, Divider, Flex, Badge, Button } from "@chakra-ui/core";
import { TiArrowSortedDown } from "react-icons/ti"

export default function Booking ({ history }) {
    const context = useContext(MyContext)
    //component did mount
   useEffect(() => { 
        if (!context.state.isLogged) return history.push('/login')
  })
  const handleChange=async(e)=>{
    await context.handleChange(e,'formBooking')
  }
  const submitBooking = async (e) => {const data = await context.createBooking(e)
  return data
  }
  return (

    <MyContext.Consumer>
{context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return ( 
            <Flex direction="column" alignItems="center"> 
            

<Flex maxW="sm" borderWidth="5px" rounded="lg" overflow="hidden">
  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6puEnP4id1wIGQjwHe_ZVF2JZxZ5pZ7USN2rYGxP4gDTDj2x6" />
  <Box ml="3">
    <Box fontWeight="bold">
      <Badge ml="1" variantColor="green">
        New
      </Badge>
    </Box>
    <Text fontSize="md">Padre {loggedUser.name}</Text>
  </Box>
</Flex>
 
<br></br>
<Box as="form" onSubmit={submitBooking} display="flex" w="50vw" align="center" justify="center">
   <Flex direction="column" alignItems="center">
    <Select icon={TiArrowSortedDown} color="#1e4e8c" iconSize={5} variant="filled" name = "programa" onChange={(e)=>handleChange(e)} value={context.state.formBooking.programa}>
    <option >Selecciona un programa</option>

  {context.state.allPrograms.map((programa,indx)=><option key={indx} value={programa._id}>{programa.tipo} en {programa.lugar}</option>)
  }
</Select>
<Divider />
<Select icon={TiArrowSortedDown} color="#1e4e8c" iconSize={5} variant="filled" name = "dia" onChange={(e)=>handleChange(e)} value={context.state.formBooking.dia}>
<option >Selecciona un día</option>
    <option value="lunes">Lunes</option>
    <option value="martes">Martes</option>
    <option value="sabado">Sabado</option>
    <option value="domingo">Domingo</option>
</Select>
<Divider />
<Select icon={TiArrowSortedDown} color="#1e4e8c" iconSize={5} variant="filled" name = "horario" onChange={(e)=>handleChange(e)} value={context.state.formBooking.horario}>
<option >Selecciona un horario</option>

    <option value="09:00-10:00">09:00-10:00</option>
    <option value="11:00-12:00">11:00-12:00</option>
    <option value="18:00-19:00">18:00-19:00</option>
 </Select>
 <Divider />
 <Select icon={TiArrowSortedDown} color="#1e4e8c" iconSize={5} variant="filled" name = "cantidad" onChange={(e)=>handleChange(e)} value={context.state.formBooking.cantidad}>
 <option >Selecciona la cantidad de asistentes</option>

    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
 </Select>
 <Divider />

 <Button type="submit" width="200px" marginTop="15px" alignSelf="center" variantColor="blue">Agregar Reservación </Button>
 </Flex>
</Box>
<br></br>
<Stack isInline spacing={8} align="center" display="flex" justifyContent="space-around" wrap="wrap" direction="row">
{context.state.userBookings.map((el,indx)=>
  (<Box key={indx} p={2} shadow="md" borderWidth="3px" flex="1" rounded="md" >
      <Heading fontSize="xl">{el.programa.tipo} {el.programa.lugar}</Heading>
      <Text mt={4}>{el.dia} {el.horario}</Text>
      <Text>Costo total ${el.costoTotal}</Text>
      <Text>{el.numPersonas} persona(s)</Text>
    </Box>))}
    </Stack>



</Flex>)

        else return <>Loading...</>
      }}
    </MyContext.Consumer>
)
}
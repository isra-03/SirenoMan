import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Box, Image, Text, Link,  } from '@chakra-ui/core'

class Home extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
         <>
         <Box p={4} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Image
      rounded="lg"
      width={{ md: 40 }}
      src="/image/inici1.jpg"
      alt="Woman paying for a purchase"
    />
  </Box>
  <Box  mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text 
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="sm"
      letterSpacing="wide"
      color="teal.600"
    >
     Clases
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      //href="#"
    >
      Sistema Lógico de Enseñanza de la Natacións
    </Link>
    <Text mt={2} color="gray.500" >
    Aquí puedes aprender técnicas para sobrevivir al pánico en el agua. La coordinadora de la institución, 
    Cecilia del Castillo, asegura que tan sólo en una clase se nota el avance de una persona tímida. Se aceptan niños desde cuatro años hasta adultos mayores. 
    Existen horarios flexibles y personales para cada categoría. Las personas con discapacidad tienen la puerta abierta. De hecho este método fue concebido para personas con debilidad visual. 
    También reciben niños con autismo, síndrome de Down, parálisis cerebral o que no tengan alguna extremidad. Todos los instructores están capacitados y certificados con el Sistema Lógico de Enseñanza de la Natación que incluye salvamento acuático, 
    primeros auxilios y resucitación cardiopulmonar.
    </Text>
  </Box>
</Box>
<br></br>
<br></br>
<Box p={4} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Image
      rounded="lg"
      width={{ md: 40 }}
      src="/image/inici2.jpg"
      alt="Woman paying for a purchase"
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="sm"
      letterSpacing="wide"
      color="teal.600"
    >
     Rehabilitacion
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      ¿Qué es la natación terapéutica?
    </Link>
    <Text mt={2} color="gray.500">
    La terapia aplicada en la natación terapéutica está basada en ejercicios muy diversos y tratando de dirigirlos a la zona afectada para un mejor resultado en cuanto a la afección, 
    estos ejercicios casi en la mayoría de los casos son ejercicios de flotación, estos ejercicios son recomendados ya que a través de la flotación el cuerpo tiende a pesar menos y de esta forma se evita que al momento de llevar a cabo los ejercicios se ocasione un trauma mayor del que ya padece el paciente.
    </Text>
  </Box>
</Box>

         </>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Home
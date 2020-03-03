import React from 'react'
import { MyContext } from '../context'
import { Box, Image, Text, Link,  } from '@chakra-ui/core'

function homeCard() {
    return  (
        <MyContext.Consumer>
          {context => {
            <Box p={4} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Image
      rounded="lg"
      width={{ md: 40 }}
      src="/image/inici1.jpg"
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
     Clases
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      Sistema Lógico de Enseñanza de la Natacións
    </Link>
    <Text mt={2} color="gray.500">
    Aquí puedes aprender técnicas para sobrevivir al pánico en el agua. La coordinadora de la institución, 
    Cecilia del Castillo, asegura que tan sólo en una clase se nota el avance de una persona tímida. Se aceptan niños desde cuatro años hasta adultos mayores. 
    Existen horarios flexibles y personales para cada categoría. Las personas con discapacidad tienen la puerta abierta. De hecho este método fue concebido para personas con debilidad visual. 
    También reciben niños con autismo, síndrome de Down, parálisis cerebral o que no tengan alguna extremidad. Todos los instructores están capacitados y certificados con el Sistema Lógico de Enseñanza de la Natación que incluye salvamento acuático, 
    primeros auxilios y resucitación cardiopulmonar.
    </Text>
  </Box>
</Box>
          }}
    </MyContext.Consumer>
    )
}

export default homeCard
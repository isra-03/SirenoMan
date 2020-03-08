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
<br></br>

<Box p={4} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Image
      rounded="lg"
      width={{ md: 40 }}
      src="/image/inici3.jpg"
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
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      Otros beneficios de la natación
    </Link>
    <Text mt={2} color="gray.500">
    Nadar es uno de los pocos ejercicios físicos que benefician al cuerpo globalmente ya que potencia la fuerza, la resistencia y la flexibilidad al mismo tiempo.
    Tiene todos los beneficios cardiovasculares de correr, a la vez que algunos de los beneficios musculares del ejercicio de pesas y otros de los efectos potenciadores de la resistencia física vinculados a las clases de danza o aerobic.
    </Text>
  </Box>
</Box>
<br></br>

<Box p={4} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Image
      rounded="lg"
      width={{ md: 40 }}
      src="/image/inici4.jpg"
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
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      Natación para niños
    </Link>
    <Text mt={2} color="gray.500">
    La natación para niños resulta una de las mejores prácticas deportivas. No solo porque permite a los pequeños adquirir mayor destreza en los medios acuáticos sino también porque les brinda salud y bienestar.
    Dentro del agua pueden ejecutarse diversas actividades. Por ejemplo, la fisioterapia, la práctica deportiva, la matronatación y la natación lúdica. Esta última es ideal para los niños.
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
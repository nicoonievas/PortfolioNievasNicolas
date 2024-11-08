import React from 'react'; 
import { Box, Image, Text, Heading, useColorModeValue } from '@chakra-ui/react';

const Home = () => {
    // Usamos useColorModeValue para cambiar el color de texto según el modo
    const textColor = useColorModeValue("black", "white");  // Negro en modo claro, blanco en modo oscuro

    return (
        <Box width="100%" display="flex" justifyContent="center" alignItems="center" my={4}>
            <Image
                src="/retrato.jpg"
                alt="Nicolas Nievas"
                borderRadius="full"
                width="300px" // Imagen tres veces más grande
                height="300px"
                mr={10}
            />
            <Box>
                <Heading as="h1" fontSize="36px" fontWeight="bold" color={textColor}>
                    Hola! Soy Nicolas Nievas
                </Heading>
                <br />
                <Text fontSize="20px" color={textColor}>
                    Estudiante de la carrera Analista de Sistemas en Instituto Leibnitz <br /> Villa María - Córdoba
                    <br /> <br /> <br />
                    Me apasiona el aprendizaje y la programación.
                    <br />
                    <br />
                    Mis lenguajes de programación favoritos son Javascript y React,
                    <br />
                    utilizo estas tecnologías para crear aplicaciones web.
                    <br />
                    <br />
                    Para las bases de datos utilizo SQL Server, MySQL y MongoDB.
                    <br />
                    <br />
                    Aunque no tengo experiencia en el desarrollo de software, me gusta aprender
                    <br />
                    y trabajar en proyectos nuevos.
                </Text>
            </Box>
        </Box>
    );
}

export default Home;

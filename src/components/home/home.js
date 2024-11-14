import React from 'react'; 
import { Box, Image, Text, Heading, useColorModeValue, Link } from '@chakra-ui/react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
    const textColor = useColorModeValue("black", "white");

    return (
        <Box width="100%" display="flex" justifyContent="center" alignItems="center" my={4}>
            <Image
                src="/retrato.jpg"
                alt="Nicolas Nievas"
                borderRadius="full"
                width="300px"
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
                <Box mt={4} display="flex" justifyContent="center" gap={4}>
                    <Link href="https://www.linkedin.com/in/nicolas-nievas-659853148/" isExternal color="blue.500" fontSize="24px">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://www.instagram.com/nicoonievas/" isExternal color="purple.500" fontSize="24px">
                        <FaInstagram />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;

import { 
    Box, 
    FormControl, 
    FormLabel, 
    FormHelperText, 
    Textarea, 
    Input, 
    Button, 
    useToast 
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const form = useRef();
    const toast = useToast();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                () => {
                    toast({
                        title: 'Mensaje enviado.',
                        description: 'Tu mensaje fue enviado exitosamente.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                    form.current.reset();
                },
                (error) => {
                    toast({
                        title: 'Error al enviar.',
                        description: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                    console.error('FAILED...', error.text);
                }
            );
    };

    return (
        <Box width="100%" display="flex" justifyContent="center" alignItems="center" my={4}>
            <Box width="40%" padding="4" boxShadow="lg" border="1px solid #66b2b2" borderRadius="md">
                <form ref={form} onSubmit={sendEmail}>
                    <FormControl isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input name="from_name" placeholder="Nombre" />
                    </FormControl>

                    <FormControl isRequired mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input name="user_email" type="email" />
                        <FormHelperText>Nunca compartiremos su correo</FormHelperText>
                    </FormControl>

                    <FormControl isRequired mt={4}>
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea name="message" placeholder="Déjame tu mensaje y te contactaré a la brevedad" />
                    </FormControl>

                    <FormControl mt={4} textAlign="center">
                        <Button type="submit" colorScheme="teal" variant="outline">
                            Enviar
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </Box>
    );
};

export default Contacto;

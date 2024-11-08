import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';  // Importa ReactMarkdown
import remarkGfm from 'remark-gfm';  // Importa remark-gfm para mejorar la sintaxis de Markdown (como tablas, listas, etc.)

function ModalInfo({ repoOwner, repoName, githubToken }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/README.md`, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('README no disponible');
        }

        const readmeData = await response.json();
        const decodedContent = readmeData.content ? atob(readmeData.content) : 'README no disponible';
        setReadmeContent(decodedContent);
      } catch (error) {
        console.error(`Error fetching README for ${repoName}:`, error);
        setError('Este repositorio no contiene README');
      }
    };

    if (isOpen) fetchReadme();
  }, [isOpen, repoOwner, repoName, githubToken]);

  return (
    <>
      <Button marginLeft={"2"} onClick={onOpen}>Ver README</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{repoName} README</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {error ? (
              <Text color="red.500">{error}</Text>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {readmeContent}
              </ReactMarkdown>  
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalInfo;

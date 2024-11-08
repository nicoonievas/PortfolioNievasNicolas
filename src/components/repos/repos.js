import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Box } from '@chakra-ui/react';
import ModalInfo from '../contact/modal';

const Repos = () => {
  const [repos, setRepos] = useState([]);
  
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  
  const languageLogos = {
    JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    Python: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    TypeScript: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();
        setRepos(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, [GITHUB_TOKEN]);

  return (
    <Box width="100%" display="flex" justifyContent="center" alignItems="center" padding="4">
      <Box maxWidth="800px" width="100%">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            mb={4}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '250px' }}
              src={languageLogos[repo.language] || 'https://fontawesome.com/social/code?f=classic&s=&v=5'}
              alt={repo.language}
            />
            <Stack>
              <CardBody>
                <Heading size="md">{repo.name}</Heading>
                <Text py="2">{repo.description || 'Sin descripción'}</Text>
                <Text py="2"><strong>Lenguaje utilizado:</strong> {repo.language || 'No especificado'}</Text>
              </CardBody>
              <CardFooter>
                <Button as="a" href={repo.html_url} target="_blank" rel="noopener noreferrer" variant="solid" colorScheme="blue">
                  Ver repositorio
                </Button>
                <ModalInfo repoOwner={repo.owner.login} repoName={repo.name} githubToken={GITHUB_TOKEN} />
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Repos;

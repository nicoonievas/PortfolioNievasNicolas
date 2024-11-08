import ToggleColorMode from '../togglecolormode';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Heading, useColorModeValue } from '@chakra-ui/react';
import Repos from '../repos/repos';
import Contacto from '../contact/contact';
import Home from '../home/home';

const Header = () => {
  const textColor = useColorModeValue("black", "white");
  return (
    <Tabs position='relative' variant='unstyled'>
      <TabList display="flex" justifyContent="center" marginTop="5">
        <Tab>Sobre mi</Tab>
        <Tab>Proyectos</Tab>
        <Tab>Contacto</Tab>
        <ToggleColorMode />
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
      <TabPanels>
        <TabPanel>
          <p></p>
          <Home />
        </TabPanel>
        <TabPanel>
        <Heading as="h1" fontSize="26px" fontWeight="bold" color={textColor}>
                        Proyectos
                    </Heading>
          <Repos />
        </TabPanel>
        <TabPanel>
        <Heading as="h1" fontSize="26px" fontWeight="bold" color={textColor}>
                        Contacto
                    </Heading>
          <Contacto />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Header;

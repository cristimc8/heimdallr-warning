import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GradientBody height="100vh" />

      <Bubbles />
    </ChakraProvider>
  );
}

export default App;

import Header from './components/Header';
import Footer from './components/Footer';
import AllRoutes from './pages/AllRoutes';
import './App.css';
import { Box, useColorModeValue } from '@chakra-ui/react';

function App() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Header />
      <AllRoutes />
      <Footer />
    </Box>
  )
}

export default App;

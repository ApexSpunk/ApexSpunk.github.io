import Header from './components/Header';
import Footer from './components/Footer';
import AllRoutes from './pages/AllRoutes';
import './App.css';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box bg='gray.100'>
      <Header />
      <AllRoutes />
      <Footer />
    </Box>
  )
}

export default App;

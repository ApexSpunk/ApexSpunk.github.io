import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//linear-gradient(145deg, #e2e8ec, #ffffff);
function Header() {

    // make navbar sticky on scroll

    const [navbar, setNavbar] = React.useState(false)

    useEffect(() => {
        const changeBackground = () => {
            console.log(window.scrollY)
            if (window.scrollY > 80) {
                setNavbar(true)
            }

            if(window.scrollY == 0){
                setNavbar(false)
            }
        }
    
        window.addEventListener('scroll', changeBackground)
    }, [navbar])





    return (
        <Box top='0' py={navbar ? 1 : 3} position={navbar ? 'sticky' : 'relative'} zIndex='1' bg={navbar ? 'gray.100' : 'transparent'} boxShadow={navbar ? 'md' : 'none'} transition='all 0.5s ease-in-out'>
            <Flex height={20} alignItems="center" justifyContent="center" px={{ base: 4, sm: 16 }}>
                <Link to='/'>
                    <Box>
                        <Image src="./developer-1.png" alt="logo" objectFit={'cover'} mt={navbar ? 0 : 2} h={navbar ? '36' : '52'} transition='all 0.5s ease-in-out' />
                    </Box>
                </Link>
                <Spacer />
                <Flex display={{ base: 'none', md: 'flex' }} gap={{ base: 5, xl: 10 }} align="center" fontWeight="semibold" fontSize='14px'>
                    <Link to="/store" >
                    <Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>HOME</Text>
                    </Link>
                    <Link to="/store"><Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>ABOUT ME</Text></Link>
                    <Link to="/store"><Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>SKILLS</Text></Link>
                    <Link to="/store"><Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>PROJECTS</Text></Link>
                </Flex>
                <Box className='button' rounded='lg' px='8' py='4' ml={'50px'} align="center" fontWeight="semibold" fontSize='14px' color="#ff014f">
                    <Link to="/login">
                        <Box align="center">
                            <Text>CONTACT</Text>
                        </Box>
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default Header
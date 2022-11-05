import {
    Box,
    Flex,
    Text,
    IconButton,
    Image,
    Spacer,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
//linear-gradient(145deg, #e2e8ec, #ffffff);
function Header() {

    // make navbar sticky on scroll

    const [navbar, setNavbar] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const { isOpen: open, onToggle } = useDisclosure();

    useEffect(() => {
        const changeBackground = () => {
            console.log(window.scrollY)
            if (window.scrollY > 150) {
                setIsOpen(true)
            }

            if (window.scrollY > 120) {
                setNavbar(true)
            }

            if (window.scrollY === 0) {
                setNavbar(false)
                setIsOpen(false)
            }
        }

        window.addEventListener('scroll', changeBackground)
    }, [navbar])




    return (
        <Box py={navbar ? 1 : 3} position={navbar ? 'sticky' : 'relative'} zIndex='12' bg={navbar ? 'gray.100' : 'gray.100'} boxShadow={navbar ? 'md' : 'none'} transition='all 0.5s ease-in-out' top={isOpen ? '0' : '-30%'}>
            <Flex height={20} alignItems="center" justifyContent="center" px={{ base: 4, sm: 4 }}>
                <Link to='/'>
                    <Box>
                        <Image src="./developer-1.png" alt="logo" objectFit={'cover'} mt={navbar ? 0 : 2} h={navbar ? '36' : '52'} transition='all 0.5s ease-in-out' ml={{ base: '-20px', md: '0' }} />
                    </Box>
                </Link>
                <Spacer />
                <Flex display={{ base: 'none', md: 'flex' }} gap={{ base: 5, lg: 8, xl: 12 }} align="center" fontWeight="semibold" fontSize='14px'>
                    <Link to="/" activeClass="activeLink" >
                        <Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>HOME</Text>
                    </Link>
                    <Link activeClass="activeLink" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                        <Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>ABOUT ME</Text>
                        <Box w='4' h='1' position='absolute' mt='1' />
                    </Link>
                    <Link activeClass="activeLink" to="project" spy={true} smooth={true} offset={-70} duration={500}>
                        <Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>PROJECTS</Text>
                        <Box w='4' h='1' position='absolute' mt='1' />
                    </Link>
                    <Link activeClass="activeLink1" to="skill" spy={true} smooth={true} offset={-70} duration={500}>
                        <Text _hover={{ color: 'red' }} transition='all 0.5s ease-in-out'>SKILLS</Text>
                        <Box w='4' h='1' position='absolute' mt='1' />
                    </Link>
                </Flex>
                <Flex
                    rounded='lg' align="center" fontWeight="semibold" fontSize='14px' color="#ff014f"
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            open ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={9} h={9} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Box className='button' rounded='lg' px='8' py='4' ml={'50px'} mr='6' align="center" fontWeight="semibold" fontSize='14px' color="#ff014f" display={{ base: 'none', md: 'flex' }}>
                    <Link to="/login">
                        <Box align="center">
                            <Text>CONTACT</Text>
                        </Box>
                    </Link>
                </Box>
            </Flex>
            {
                open && (
                    <Box pb={4} display={{ md: 'none' }} position='absolute' top='87px' left='0' right='0' zIndex='1' bg={navbar ? 'gray.100' : 'gray.100'} boxShadow={navbar ? 'md' : 'none'} transition='all 0.5s ease-in-out'>
                        <Box as={'nav'} spacing={4} display='grid' gridTemplateColumns='repeat(1, 1fr)' gridGap={4} p={4} justifyContent='center' alignItems='center' margin='auto' h='88vh'>
                            <Box textAlign={'center'} display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='8' fontSize='20px' fontWeight='bold' color='gray.600'>
                                <Link to="/">
                                    Home
                                </Link>
                                <Link to="about">
                                    About Me
                                </Link>
                                <Link to="skills">
                                    Skills
                                </Link>
                                <Link to="projects">
                                    Projects
                                </Link>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                )

            }
        </Box>





















    )
}

export default Header
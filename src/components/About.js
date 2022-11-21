import { Box, Flex, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
function About() {

    // slide from left when scroll reaches this component

    const slideLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        }
    }

    const slideRight = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        }
    }

    const { scrollY } = useScroll()

    useEffect(() => {
        return scrollY.onChange((latest) => {
            console.log("Page scroll: ", latest)
        })
    }, [scrollY])




    return (
        <Box mt='20' id='about' mx={{ base: '8', md: '12', lg: '24', xl: '32' }} position={'relative'} zIndex={10}>
            <Box textAlign={'center'}>
                <Text fontSize='4xl' fontWeight='bold' mt='12'>About Me</Text>
            </Box>
            <Box display='flex' justifyContent='space-between' w='48' mb='20' mx='auto' alignContent={'center'}>
                <Box w='30%' h={"6px"} bg='#ff014f' mt='10px' />
                <Spacer />
                <Text fontSize='md' fontWeight='bold' color='#ff014f'>ABOUT</Text>
                <Spacer />
                <Box w='30%' h={"6px"} bg='white' mt='10px' />
            </Box>
            <Grid templateColumns="repeat(10, 1fr)" gap={8}>
                <GridItem display='flex' justifyContent='center' alignItems='center' colSpan={{ base: 10, lg: 4 }}>
                    <Box className='layout' borderRadius='2xl' as={motion.div} variants={slideLeft} initial="hidden" animate="visible">
                        <Image src="./banner.png" alt="logo" objectFit={'cover'} mt='2' />
                    </Box>
                </GridItem>
                <GridItem display='flex' justifyContent='center' alignItems='center' colSpan={{ base: 10, lg: 6 }} as={motion.div} variants={slideRight} initial="hidden" animate="visible">
                    <Box>
                        <Flex alignItems="center">
                            <Image mt='4' src="https://rainbowit.net/html/inbio/assets/images/icons/quote.png" opacity={.3} alt="logo" h={{ base: '20px', md: '30px', lg: '100px', xl: '150px' }} display={{ base: 'none', md: 'block' }} />
                            <Spacer />
                            <Text fontSize='3xl' textAlign='center' mt='4' fontWeight='bold' color='gray.500' mx={{ base: '0', md: '6', lg: '10', xl: '10' }}>
                                " Aspiring Full Stack WEB DEVELOPER "
                            </Text>
                            <Spacer />
                            <Spacer />
                        </Flex>
                        <Box className='layout' borderRadius='2xl' p='8' mt='5'>
                            <Text color="gray.900" mt={4} className='test' lineHeight={2} fontSize={{ base: 'md', md: 'sm', lg: 'sm', xl: 'md' }}>
                                I'm <strong>Chandan Kumar</strong> a Solution Driven and responsible full-stack web developer capable of developing customer-focused websites using HTML, CSS, JavaScript & React.Js. Looking forward to work in a fast-paced environment and playing a key role in a company's growth. I enjoy learning new things. I'm currently working on my skills and learning new technologies. I'm looking for a job as a Web Developer.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default About
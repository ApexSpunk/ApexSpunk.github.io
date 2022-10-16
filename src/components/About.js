import { Box, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
    return (
        <Box mx={32} mt='4'>
            <Box textAlign={'center'}>
            <Text fontSize='4xl' fontWeight='bold' mt='12'>About Me</Text>
            </Box>
            <Box display='flex' justifyContent='space-between' w='48' mb='12' mx='auto' alignContent={'center'}>
                <Box w='30%' h={2} bg='#ff014f' mt='2'/>
                <Spacer />
                <Text fontSize='md' fontWeight='bold' color='#ff014f'>ABOUT</Text>
                <Spacer />
                <Box w='30%' h={2} bg='white' mt='2' />
            </Box>


            <Grid templateColumns="repeat(10, 1fr)" gap={8}>
                <GridItem colSpan={4}>
                    <Box className='layout' borderRadius='2xl' >
                        <Image src="./banner.png" alt="logo" objectFit={'cover'} mt='2' />
                    </Box>
                </GridItem>
                <GridItem colSpan={6}>
                    <Image mt='4' src="https://rainbowit.net/html/inbio/assets/images/icons/quote.png" opacity={.3} h='24' alt="logo" />
                    <Box className='layout' borderRadius='2xl' p='8' mt='6'>
                        <Text fontSize="md" color="gray.900" mt={4} className='test' lineHeight={2}>
                            I'm <strong>Chandan Kumar</strong> a Solution Driven and responsible full-stack web developer capable of developing customer-focused websites using HTML, CSS, JavaScript & React.Js. Looking forward to work in a fast-paced environment and playing a key role in a company's growth. I enjoy learning new things. I'm currently working on my skills and learning new technologies. I'm looking for a job as a Web Developer. 
                        </Text>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default About

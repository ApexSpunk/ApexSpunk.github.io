import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'

function ProjectItem({ project, slideLeft, slideRight, index }) {

    const { colorMode } = useColorMode()


    const { name, description, img, live, github, features, techStacks } = project
    setTimeout(() => {
        document.querySelector('.image-wrap').style.display = 'block'
    }, 1000)

    return (
        <Grid templateColumns="repeat(2, 1fr)" className={colorMode === 'light' ? 'layout' : 'darklayout'} gap={8} p='6' rounded='xl' mb='12' cursor={'pointer'} transition={'all 0.2s ease-in-out'} _hover={{ transform: 'scale(1.02)', boxShadow: 'lg' }} as={motion.div} variants={index % 2 === 0 ? slideLeft : slideRight} initial="hidden" whileInView='visible'>
            <GridItem display={'grid'} colSpan={{ base: 2, md: 1 }}>
                <Box className="image-wrap" rounded={'xl'} as={motion.div} initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5 } } }} transition={{ duration: 5.5 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }} whileInView='visible'>
                    <img src={img} />
                </Box>
                <Flex mb='1' gap={4} mx='12' mt='6'>
                    <Box transition={'all 0.3s ease-in-out'} _hover={{ transform: 'translateY(-5px)' }} w='100%'>
                        <a href={github} target="_blank" rel="noreferrer">
                            <Box className={colorMode === 'light' ? 'button' : 'darkbutton'} rounded='lg' px='8' py='4' align="center" fontWeight="semibold" fontSize='14px' display='flex' justifyContent='center' gap='2' color={useColorModeValue('gray.700', 'white')}>
                                <BsGithub fontSize='20px' />
                                &nbsp; Github
                            </Box>
                        </a>
                    </Box>
                    <Box transition={'all 0.3s ease-in-out'} _hover={{ transform: 'translateY(-5px)' }} w='100%'>
                        <a href={live} target="_blank" rel="noreferrer">
                            <Box className={colorMode === 'light' ? 'button' : 'darkbutton'} rounded='lg' px='8' py='4' align="center" fontWeight="semibold" fontSize='14px' color={useColorModeValue('gray.700', 'white')}>
                                <LinkIcon w={4} h={4} _groupHover={{ color: 'white' }} />
                                &nbsp; Deployed
                            </Box>
                        </a>
                    </Box>
                </Flex>
            </GridItem >
            <GridItem colSpan={{ base: 2, md: 1 }} mt={{ base: '0', md: '1', lg: '2' }}>
                <Box borderRadius='2xl' pr='4'>
                    <Text fontSize="2xl" color={useColorModeValue('gray.900', 'white')} fontWeight='semibold' className='test' lineHeight={2}>
                        {name}
                    </Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.900', 'white')} mt={2} className='test' lineHeight={1.5}>
                        {description}
                    </Text>
                </Box>
                <Box borderRadius='2xl' mt='0' p='4' px='0'>
                    <Text fontSize="xl" color={useColorModeValue('gray.900', 'white')} fontWeight='semibold' className='test' lineHeight={2}>
                        Tech Stack
                    </Text>
                    <Flex gap='2' flexWrap={'wrap'}>
                        {techStacks.map((techStack, index) => (
                            <GridItem key={index} bg='blue.50' shadow='md' rounded='xl' p='2' colSpan={1} w={{ base: '16', lg: '12', xl: '62px' }} h={{ base: '16', lg: '12', xl: '62px' }}
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.05)', cursor: 'pointer', boxShadow: 'lg' }}>
                                <Box p='1'>
                                    <Image src={techStack.img} alt="logo" objectFit={'cover'} m='auto' rounded='xl' />
                                </Box>
                            </GridItem>
                        ))}
                    </Flex>
                </Box>
                <Box display={{ base: 'block', md: 'none', lg: 'grid' }} mt={{ base: '2', md: '4', lg: '4' }} >
                    <Text fontSize="xl" mt='-2' mb='1' color={useColorModeValue('gray.900', 'white')} fontWeight='semibold' className='test' lineHeight={2}>
                        Key Features
                    </Text>
                    <Box color='white'>
                        <Box p='4' bg='gray.600' borderRadius='2xl'>
                            <Flex gap='2'>
                                <Grid templateColumns="repeat(1, 1fr)" ml='4' columnGap={6} w='80%' rowGap={0}>
                                    {
                                        features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))
                                    }
                                </Grid>
                                <Box w='24' border='1px solid white' rounded='xl' cursor='pointer' transition='all 0.2s' _hover={{ bg: 'white', color: 'black' }} p='2' align="center" fontWeight="semibold" fontSize='14px' color="white" ml='4'>
                                    <Image src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="logo" objectFit={'cover'} mt='2' rounded='xl' transition={'all 0.2s'} _hover={{ transform: 'scale(1.1)' }} className='github' />
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>


            </GridItem>
        </Grid >
    )
}

export default ProjectItem
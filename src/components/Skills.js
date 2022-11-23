import { Box, Image, Spacer, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import '../Animate.css'
import { motion } from 'framer-motion'

function Skills() {
    const skills = [
        {
            name: 'HTML',
            img: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png'
        },
        {
            name: 'CSS',
            img: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'
        },
        {
            name: 'JavaScript',
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        },
        {
            name: 'React',
            img: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'
        },
        {
            name: 'NodeJs',
            img: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
        },
        {
            name: 'MongoDB',
            img: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png'
        },
        {
            name: 'Express',
            img: 'https://miro.medium.com/max/1200/0*iechRr4efJARJmnK.jpg'
        },
        {
            name: 'REST API',
            img: 'https://miro.medium.com/max/300/1*1RDFnS8FgAOQFegtuynxWw.png'
        },
        {
            name: 'Git',
            img: 'https://cdn.iconscout.com/icon/free/png-512/git-226092.png'
        },
        {
            name: 'Github',
            img: 'https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png'
        },
        {
            name: "Heroku",
            img: "https://cledara-public.s3.eu-west-2.amazonaws.com/heroku.png"
        },
        {
            name: "Chakra UI",
            img: "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
        },


    ]
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box id="skill">

            <div className={colorMode === "light" ? "area" : "areadark"}>
                <Box maxW="1200px" mx="auto" p="5" pb='24' position={'relative'} zIndex={10}>
                    <Box textAlign={'center'}>
                        <Text fontSize='4xl' color='white' fontWeight='bold' mt='12'>My Skills</Text>
                    </Box>
                    <Box display='flex' justifyContent='space-between' w='40' mb='20' mx='auto' alignContent={'center'}>
                        <Box w='25%' h={"6px"} bg='white' mt='10px' />
                        <Spacer />
                        <Text fontSize='md' fontWeight='bold' color='white'>SKILLS</Text>
                        <Spacer />
                        <Box w='25%' h={"6px"} bg='white' mt='10px' />
                    </Box>
                    <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap="5" mt="10">
                        {skills.map((skill, index) => (
                            <motion.div transition={{ type: "spring", damping: 3 }} style={{ padding: '24px', textAlign: 'center', borderRadius: '10%', backgroundColor: 'white', cursor: 'pointer' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}>
                                <Box as={motion.div} key={index}>
                                    <Box>
                                        <Image src={skill.img} alt={skill.name} w="100px" mx="auto" />
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </Box >
    )
}

export default Skills
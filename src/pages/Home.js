import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Github from '../components/Github'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
//5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
function Home() {

  let animationText = ['Web Developer', 'Coder', 'Problem Solver']
  const [text, setText] = useState(0)
  const [cursor, setCursor] = useState(true)



  useEffect(() => {
    let i = 0
    let j = 0
    let text = ''
    let speed = 100
    let wait = 2000
    let erase = false

    const typeWriter = () => {
      if (j < 0) {
        j = 0
        i++
        erase = false
      }
      if (i < animationText.length) {
        if (j < animationText[i].length) {
          if (!erase) {
            text += animationText[i].charAt(j)
            j++
            speed = 100
          } else {
            text = text.slice(0, -1)
            j--
            speed = 50
          }
          setText(text)
          setTimeout(typeWriter, speed)
        } else {
          if (!erase) {
            erase = true
            setTimeout(() => {
              setCursor(false)
            }, 500)
            setTimeout(() => {
              setCursor(true)
            }, 1000)
            j--
            setTimeout(typeWriter, wait)
          }
        }
      } else {
        i = 0
        setTimeout(typeWriter, speed)
      }
    }
    typeWriter()


  }, [])










  return (
    <Box >
      <Grid mx={{ base: '4', md: '4', lg: 12, xl: 16 }} templateColumns="repeat(5, 1fr)" mt='8'>
        <GridItem colSpan={{ base: 5, md: 3 }} justifyContent='center' alignItems='center' display={'grid'} position={'relative'} zIndex={10}>
          <Box>
            <Box>
              <Text fontSize="md">
                WELCOME TO MY WORLD
              </Text>
              <Text fontSize={{ base: '3xl', md: '3xl', lg: '5xl', xl: '6xl' }} fontWeight="bold" mt={3}>
                Hi, I'm <Text as="span" color="#ff014f">Chandan Kumar</Text>
              </Text>
              <Text fontSize={{ base: '2xl', md: '2xl', lg: '4xl', xl: '5xl' }} fontWeight="bold" color="#ff014f">
                a <Text as="span" color="gray.900">
                  {text}
                  {cursor ? <Text as="span" fontWeight={'thin'} color="#ff014f">|</Text> : null}
                </Text>
              </Text>
              <Text fontSize={{ base: 'sm', md: 'sm', lg: 'md', xl: 'md' }} color="gray.900" mt={4} className='test' lineHeight={2} w='90%'>
                I'm a Web Developer from India. I'm passionate about Web Development and I enjoy learning new things. I'm currently working on my skills and learning new technologies. I'm looking for a job as a Web Developer.
              </Text>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={{ base: '8', md: '8', lg: '16', xl: '32' }}>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <Box>
                  <Text fontSize="md" color="gray.900">
                    Useful Links
                  </Text>
                  <Box display="flex" alignItems="center" gap={4} mt='4'>
                    <Box className='button' p='3' borderRadius='lg'>
                      <Image src="./port.png" alt="logo" h={10} />
                    </Box>
                    <Box className='button' p='4' borderRadius='lg'>
                      <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" h={8} />
                    </Box>
                    <Box className='button' p='5' borderRadius='lg' w={16} display='flex' justifyContent='center' alignItems='center' >
                      <Image src="https://rainbowit.net/html/inbio/assets/images/icons/icons-03.png" alt="logo" h={6} />
                    </Box>
                  </Box>
                </Box>
              </GridItem>
              <GridItem colSpan={1} display={{ base: 'none', md: 'block' }}>
                <Box>
                  <Box display="flex" alignItems="center" gap={4} mt='10'>
                    <Box className='button' p='4' borderRadius='lg' w='50%' gap='2' display='flex' justifyContent='center' alignItems='center'>
                      <Image src="./download.png" alt="logo" h={6} />
                      <Text fontSize='xl' fontWeight="thin">Resume</Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Box mt={{ base: 2, md: '-10px', lg: '-30px', xl: '-70px' }}>
            <Image src="./blur_edges (8).jpg" alt="logo" />
          </Box>
        </GridItem>
      </Grid>
      <Divider mt='8' color={'gray.900'} />
      <About />
      <Divider mt='8' color={'gray.900'} />
      <Projects />
      <Divider mt='8' color={'gray.900'} />
      <Skills />
      <Divider mt='8' color={'gray.900'} />
      <Github />
    </Box>
  )
}

export default Home

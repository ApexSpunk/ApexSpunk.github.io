import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import About from '../components/About'
//5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
function Home() {

  let animationText = ['Web Developer', 'Coder', 'Problem Solver']
  const [text, setText] = useState(0)
  const [written, setWritten] = useState(true)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    let i = 0
    let j = 0
    let text = ''
    let speed = 100
    let wait = 2000
    let erase = false

    const typeWriter = () => {
      console.log(i,j,text,speed,wait,erase)
      if(j < 0){
        j = 0
        i++
        erase = false
        setWritten(true)
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
            setTimeout(()=>{
              setCursor(false)
            }, 500)
            setTimeout(()=>{
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
    <Box mx='16'>
      <Grid templateColumns="repeat(5, 1fr)"  mt='8'>
        <GridItem colSpan={{base:5, md:3}} justifyContent='center' alignItems='center' display={'grid'}>
          <Box>
            <Box>
              <Text fontSize="md">
                WELCOME TO MY WORLD
              </Text>
              <Text fontSize={{base:'5xl',md:'3xl', lg:'5xl', xl:'6xl'}} fontWeight="bold" mt={3}>
                Hi, I'm <Text as="span" color="#ff014f">Chandan Kumar</Text>
              </Text>
              <Text fontSize={{base:'4xl',md:'2xl', lg:'4xl', xl:'5xl'}} fontWeight="bold" color="#ff014f">
                a <Text as="span" color="gray.900">
                  {text}
                  {cursor ? <Text as="span" fontWeight={'thin'} color="#ff014f">|</Text> : null}
                </Text>
              </Text>
              <Text fontSize={{base:'md',md:'sm', lg:'md', xl:'md'}} color="gray.900" mt={4} className='test' lineHeight={2} w='90%'>
                I'm a Web Developer from India. I'm passionate about Web Development and I enjoy learning new things. I'm currently working on my skills and learning new technologies. I'm looking for a job as a Web Developer.
              </Text>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={{base:'8',md:'8', lg:'16', xl:'32'}}>
              <GridItem colSpan={1} >
                <Box>
                  <Text fontSize="md" color="gray.900">
                    Useful Links
                  </Text>
                  <Box display="flex" alignItems="center" gap={4} mt='4'>
                    <Box className='button' p='5' borderRadius='lg'>
                      <Image src="https://rainbowit.net/html/inbio/assets/images/icons/icons-01.png" alt="logo" h={6} />
                    </Box>
                    <Box className='button' p='5' borderRadius='lg'>
                      <Image src="https://rainbowit.net/html/inbio/assets/images/icons/icons-02.png" alt="logo" h={6} />
                    </Box>
                    <Box className='button' p='5' borderRadius='lg' w={16} display='flex' justifyContent='center' alignItems='center' >
                      <Image src="https://rainbowit.net/html/inbio/assets/images/icons/icons-03.png" alt="logo" h={6} />
                    </Box>
                  </Box>
                </Box>
              </GridItem>
              <GridItem colSpan={1}>
                <Box>
                  <Text fontSize="md" color="gray.900">
                    Available On
                  </Text>
                  <Box display="flex" alignItems="center" gap={4} mt='4'>
                    <Box className='button' p='5' borderRadius='lg'>
                      <Image src="https://rainbowit.net/html/inbio/assets/images/icons/icons-01.png" alt="logo" h={6} />
                    </Box>
                    <Box className='button' p='5' borderRadius='lg'>
                      <Image src="https://rainbowit.net/html/inbio/assets/images/icons/icons-02.png" alt="logo" h={6} />
                    </Box>
                    <Box className='button' p='5' borderRadius='lg' w={16} display='flex' justifyContent='center' alignItems='center'>
                      <Image src="https://rainbowit.net/html/inbio/assets/images/icons/icons-03.png" alt="logo" h={6} />
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem colSpan={{base:5, md:2}}>
          <Box mt={{base:2,md:'-10px',lg:'-30px',xl:'-70px'}}>
            <Image src="./blur_edges (8).jpg" alt="logo" />
          </Box>
        </GridItem>
      </Grid>
      <Divider mt='8' color={'gray.900'} />
      <About />
    </Box>
  )
}

export default Home
import { Box, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function Github() {
    return (
        <Box mt='20' position={'relative'} zIndex={10}>
            <Box textAlign={'center'}>
                <Text fontSize='4xl' fontWeight='bold' mt='12'>Github Stats</Text>
            </Box>
            <Box display='flex' justifyContent='space-between' w='60' mb='20' mx='auto' alignContent={'center'}>
                <Box w='30%' h={"6px"} bg='#ff014f' mt='10px' />
                <Spacer />
                <Text fontSize='md' fontWeight='bold' color='#ff014f'>Github</Text>
                <Spacer />
                <Box w='30%' h={"6px"} bg='white' mt='10px' />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' mt='10' mb='10' flexDirection={{ base: 'column', md: 'row' }} gap='4'>
                <Image src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ApexSpunk&theme=2077" alt="github" />
                <Image src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=ApexSpunk&theme=2077" alt="github" />
            </Box>
            <Box mx={{ base: '0', md: '4', lg: 12, xl: 48 }} display='flex' justifyContent='center' alignItems='center' mt='10' mb='10' bg='white' borderRadius='10px' color='white' fontWeight='bold' cursor='pointer' p='8'>
                <Image src="https://ghchart.rshah.org/ApexSpunk" alt="github" w='full' />
            </Box>
        </Box>
    )
}

export default Github
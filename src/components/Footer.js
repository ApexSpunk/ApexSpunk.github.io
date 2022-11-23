import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    // simple footer
    <Box>
      <Box textAlign={'center'} mt='20' p='4' bg={useColorModeValue('gray.900', 'gray.100')} color={useColorModeValue('gray.100', 'gray.900')}>
        <Text fontSize='md' fontWeight='bold'>© 2021 ApexSpunk</Text>
      </Box>
    </Box>
  )
}

export default Footer
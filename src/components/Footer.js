import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    // simple footer
    <Box>
      <Box textAlign={'center'} mt='20' bg='gray.500' p='6' color='white'>
        <Text fontSize='md' fontWeight='bold'>© 2021 ApexSpunk</Text>
      </Box>
    </Box>
  )
}

export default Footer
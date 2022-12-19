import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Spacer,
    Stack,
    Text,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsLinkedin, BsMailbox, BsMailbox2, BsPerson, BsTwitter, BsVoicemail } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail, MdPhone } from 'react-icons/md';


function Contact() {
    const { hasCopied, onCopy } = useClipboard('indspunk@gmail.com');

    return (
        <Flex
            align="center"
            justify="center"
            id="contact">
            <Box
                borderRadius="lg"
                w='100%'
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}>
                <Box>
                    <Box textAlign={'center'}>
                        <Text fontSize='4xl' fontWeight='bold'>Contact Me</Text>
                    </Box>
                    <Box display='flex' justifyContent='space-between' w='60' mb='20' mx='auto' alignContent={'center'}>
                        <Box w='30%' h={"6px"} bg='#ff014f' mt='10px' />
                        <Spacer />
                        <Text fontSize='md' fontWeight='bold' color='#ff014f'>CONTACT</Text>
                        <Spacer />
                        <Box w='30%' h={"6px"} bg='white' mt='10px' />
                    </Box>
                    <Flex alignItems='center' justifyContent='center' align='center' gap='6' w={{xl:'600px',lg:"400px",md:"300px"}} mx='auto' mb='12' shadow='md' p='4' rounded='md'>
                        <Text display='flex' alignItems='center' justifyContent='center' align='center' gap='2' fontSize='xl' fontWeight='bold' textAlign='center'><MdEmail /> indspunk@gmail.com</Text>
                        <Text display='flex' alignItems='center' justifyContent='center' align='center' gap='2' fontSize='xl' fontWeight='bold' textAlign='center'><MdPhone /> +91 7903481181</Text>
                    </Flex>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }} >
                        <Stack
                            w='full'
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}>
                            <Stack
                                align="center"
                                justify="space-around"
                                direction={{ base: 'row', md: 'column' }}>
                                <Tooltip
                                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                                    closeOnClick={false}
                                    hasArrow>
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Link href="#">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="#">
                                    <IconButton
                                        aria-label="twitter"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsTwitter size="28px" />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="#">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>
                            <Box
                                borderRadius="lg"
                                w='full'
                                p={8}
                                className={useColorModeValue('layout', 'darklayout')}>
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<BsPerson />} />
                                            <Input type="text" name="name" placeholder="Your Name" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<MdOutlineEmail />} />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={6}
                                            resize="none"
                                        />
                                    </FormControl>

                                    <Button
                                        colorScheme="blue"
                                        bg="blue.400"
                                        color="white"
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        isFullWidth>
                                        Send Message
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}

export default Contact;
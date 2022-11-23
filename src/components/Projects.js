import { Box, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectItem from './ProjectItem';

function Projects({ slideUp, slideLeft, slideRight }) {
    const projects = [
        {
            name: "Myntra Clone",
            img: "./myntra.png",
            description: 'Myntra is an e-commerce website that sells clothing, footwear, accessories, beauty products, and lifestyle products. It is an Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India and is owned by Flipkart.',
            techStacks: [
                {
                    name: "React Js",
                    img:
                        "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                },
                {
                    name: "Node Js",
                    img:
                        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                },
                {
                    name: "Javascript",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                },
                {
                    name: "SQL",
                    img:
                        "https://user-images.githubusercontent.com/45159366/57836466-a1be6800-7775-11e9-9dc3-99a19b647b6b.png"
                },
                {
                    name: "Python",
                    img:
                        "https://accupixel.co.uk/wp-content/uploads/2021/08/1200px-Python-logo-notext.svg_.png"
                },
                {
                    name: "MongoDB",
                    img:
                        "https://icons-for-free.com/iconfiles/png/512/mongodb+plain-1324760553187258418.png"
                },
                {
                    name: "React Hooks",
                    img:
                        "https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"
                }
            ],
            features: [
                "Users can login & signup",
                "Category Wise Products",
                "Add To Cart | Products & Cart Page"
            ],
            github: "https://github.com/ApexSpunk/ruthless-store-61",
            live: "https://myntra.indspunk.com/",
            id: 1,
        },
        {
            name: "Airtables Clone",
            img: "./airtable.png",
            description: 'Airtable is a cloud-based software company that develops a NoSQL database and a visual development environment for building applications. It is a spreadsheet-database hybrid that combines the power of a database with the flexibility of a spreadsheet.',
            techStacks: [
                {
                    name: "React Js",
                    img:
                        "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                },
                {
                    name: "Node Js",
                    img:
                        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                },
                {
                    name: "Javascript",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                },
                {
                    name: "SQL",
                    img:
                        "https://user-images.githubusercontent.com/45159366/57836466-a1be6800-7775-11e9-9dc3-99a19b647b6b.png"
                },
                {
                    name: "Python",
                    img:
                        "https://accupixel.co.uk/wp-content/uploads/2021/08/1200px-Python-logo-notext.svg_.png"
                },
                {
                    name: "MongoDB",
                    img:
                        "https://icons-for-free.com/iconfiles/png/512/mongodb+plain-1324760553187258418.png"
                },
                {
                    name: "React Hooks",
                    img:
                        "https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"
                }
            ],
            features: [
                "Authentication",
                "Dashboard | Tables | Records",
                "Add & Delete Records"
            ],
            github: "https://github.com/ApexSpunk/eight-club-5364",
            live: "https://airtable.indspunk.com/",
            id: 2,
        },
        {
            name: "Shop.com Clone",
            img: "./shop.png",
            description: 'Shop.com is an online shopping website that sells clothing, footwear, accessories, beauty products, and lifestyle products. It is an Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India and is owned by Flipkart.',
            techStacks: [
                {
                    name: "React Js",
                    img:
                        "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                },
                {
                    name: "Node Js",
                    img:
                        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                },
                {
                    name: "Javascript",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                },
                {
                    name: "SQL",
                    img:
                        "https://user-images.githubusercontent.com/45159366/57836466-a1be6800-7775-11e9-9dc3-99a19b647b6b.png"
                },
                {
                    name: "Python",
                    img:
                        "https://accupixel.co.uk/wp-content/uploads/2021/08/1200px-Python-logo-notext.svg_.png"
                },
                {
                    name: "MongoDB",
                    img:
                        "https://icons-for-free.com/iconfiles/png/512/mongodb+plain-1324760553187258418.png"
                },
                {
                    name: "React Hooks",
                    img:
                        "https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"
                }
            ],
            features: [
                "User Authentication",
                "ADD To Cart | Remove From Cart",
                "Product Listing | Cart Page"
            ],
            github: "https://github.com/ApexSpunk/deranged-bikes-7325",
            live: "https://shop.indspunk.com/",
            id: 2,
        },

    ];
    return (
        <Box mt='20' id='project' mx={{ base: '0', md: '4', lg: 12, xl: 28 }} position={'relative'} zIndex={10}>
            <Box textAlign={'center'}>
                <Text fontSize='4xl' fontWeight='bold' mt='12'>My Projects</Text>
            </Box>
            <Box display='flex' justifyContent='space-between' w='60' mb='20' mx='auto' alignContent={'center'}>
                <Box w='25%' h={"6px"} bg='#ff014f' mt='10px' />
                <Spacer />
                <Text fontSize='md' fontWeight='bold' color='#ff014f'>PROJECTS</Text>
                <Spacer />
                <Box w='25%' h={"6px"} bg='white' mt='10px' />
            </Box>
            {
                projects.map((project, index) => <ProjectItem key={index} project={project} slideLeft={slideLeft} slideRight={slideRight} slideUp={slideUp} />)
            }
        </Box>
    )
}

export default Projects


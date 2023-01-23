import { Box, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from 'react-multi-carousel';
import ProjectItem from './ProjectItem';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Projects({ slideUp, slideLeft, slideRight }) {
    const projects = [
        [{
            name: "Edutalks - Won Hackathon",
            img: "./edutalks.jpg",
            description: 'Edutalks is a website that provides a platform for educators to share their knowledge and experience through courses. The site features a wide range of topics, from business to technology, and is designed to be a one-stop shop for all your learning needs. This project is winner of the Hackathon 2023.',
            techStacks: [
                {
                    name: "Next Js",
                    img:
                        "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
                },
                {
                    name: "Next Auth",
                    img:
                        "https://next-auth.js.org/img/logo/logo-sm.png"
                },
                {
                    name: "Javascript",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                },
                {
                    name: "Chakra UI",
                    img: 'https://www.coffeeclass.io/logos/chakra-ui.png'
                },
                {
                    name: "Firebase",
                    img: 'https://assets.stickpng.com/thumbs/5847f40ecef1014c0b5e488a.png'
                },
                {
                    name: "MongoDB",
                    img:
                        "https://icons-for-free.com/iconfiles/png/512/mongodb+plain-1324760553187258418.png"
                },
                {
                    name: "React Hooks",
                    img:
                        "redux.png"
                }
            ],
            features: [
                "Users can login & signup",
                "Category Wise Products",
                "Add To Cart | Products & Cart Page"
            ],
            github: "https://github.com/ApexSpunk/Edutalks",
            live: "https://edutalks.indspunk.com/",
            id: 1,
        }, {
            name: "TechRapid - In Production",
            img: "./techrapid.jpg",
            description: 'TechRapid is a cutting-edge technology company dedicated to providing innovative solutions for a connected world. this is frontend of the project built with Next Js and Chakra UI.',
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
                        "redux.png"
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
        }, ],
        [{
            name: "Finovista.com - In Production",
            img: "./finovista.jpg",
            description: 'Finovista offers wide range of solutions for the banking and financial services industry. One of its key features is its mail server & admin panel, which is hosted on Amazon Web Services (AWS) and provides secure and efficient management of email communications for businesses. As a member of the Finovista team, I was responsible for maintaining and troubleshooting the mail server & admin panel and ensuring its smooth operation.',
            techStacks: [
                {
                    name: "Next Js",
                    img:
                        "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
                },
                {
                    name: "Next Auth",
                    img:
                        "https://next-auth.js.org/img/logo/logo-sm.png"
                },
                {
                    name: "Javascript",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                },
                {
                    name: "Tailwind CSS",
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
                },
                {
                    name: "Chakra UI",
                    img: 'https://www.coffeeclass.io/logos/chakra-ui.png'
                },
                {
                    name: "MongoDB",
                    img:
                        "https://icons-for-free.com/iconfiles/png/512/mongodb+plain-1324760553187258418.png"
                },
                {
                    name: "React Hooks",
                    img:
                        "redux.png"
                }
            ],
            features: [
                "Authentication",
                "Dashboard | Tables | Records",
                "Add & Delete Records"
            ],
            github: "https://github.com/ApexSpunk/finovista",
            live: "https://finovista.com/",
            id: 2,
        }, {
            name: "Airtables Clone",
            img: "./img/airtables.jpg",
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
                        "redux.png"
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
        }],
        [{
            name: "Myntra Clone",
            img: "./myntra.jpg",
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
                    name: "Chakra UI",
                    img: 'https://www.coffeeclass.io/logos/chakra-ui.png'
                },
                {
                    name: "Javascript",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                },
                {
                    name: "MongoDB",
                    img:
                        "https://icons-for-free.com/iconfiles/png/512/mongodb+plain-1324760553187258418.png"
                },
                {
                    name: "React Hooks",
                    img:
                        "redux.png"
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
        }, {
            name: "Shop.com Clone",
            img: "./img/shop.jpg",
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
                        "redux.png"
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
        }],

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
                projects.map((proj, ind) => <Carousel responsive={responsive}>{proj.map((project, index) => <ProjectItem key={index} index={ind} project={project} slideLeft={slideLeft} slideRight={slideRight} slideUp={slideUp} />)}</Carousel>)
            }
        </Box>
    )
}

export default Projects


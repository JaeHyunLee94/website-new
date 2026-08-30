import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  //SimpleGrid,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { useColorModeValue } from '@chakra-ui/react'
// import { GridItem } from '../components/grid-item'
import {IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

const Home = () => {
  const logoSize = 60 // Adjust this value to change all logo sizes globally

  return (
  <Layout>
    <Container maxW="800px" px={6} mx="auto">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        (Generated with {' '}
          <Link as={NextLink} href="https://www.meshy.ai/discover" passHref scroll={false}>
            MeshyAI
          </Link>)
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title"mt={5} mb={5}>
            JaeHyun Lee
          </Heading>

          <Text>Computer Graphics Researcher</Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="right"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="200px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/jh_cropped.jpeg"
              alt="Profile image"
              width="200"
              height="200"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
        Hi! 👋👋👋<br /><br />
        I’m a second-year Ph.D. student in Computer Sciences department at the {' '}
          <Link as={NextLink} href="https://www.wisc.edu/" passHref scroll={false}>University of Wisconsin-Madison</Link>, advised by {' '}
          <Link as={NextLink} href="https://pages.cs.wisc.edu/~sifakis/" passHref scroll={false}>
            Prof. Eftychios Sifakis
          </Link>.<br /><br />
        My research interests lie primarily in computer graphics, particularly physics-based simulation.
         I aim to simulate <b>complex</b> real-world phenomena <b>accurately</b> and <b>efficiently</b>, under limited computational budget.<br /><br />
        Before beginning my Ph.D., I earned my B.S. and M.S. in Mechanical Engineering and Computer Science at {' '}
          <Link as={NextLink} href="https://www.korea.edu/sites/en/index.do" passHref scroll={false}>
            Korea University
          </Link>.
         During that time, I was a member of {' '}
          <Link as={NextLink} href="https://media.korea.ac.kr/english/" passHref scroll={false}>
            MediaLab
          </Link>, where I was fortunate to be advised by {' '}
          <Link as={NextLink} href="https://perso.telecom-paristech.fr/kum/" passHref scroll={false}>
            Prof. Kiwon Um
          </Link> and {' '}
          <Link as={NextLink} href="https://media.korea.ac.kr/people/jhan/" passHref scroll={false}>
            Prof. JungHyun Han
          </Link>.
        
        <br /><br />
        Email: jaehyun.lee [at] wisc [dot] edu
        </Paragraph>


        {/* <Text color="red.400" fontWeight="bold" mt={4}>
          📢 I am actively seeking internship opportunities for 2026 Summer!
        </Text> */}


        <Heading as="h3" variant="section-title" mt={10}>
          Research Keywords
        </Heading>
        <List spacing={2} pl={4} styleType="disc">
          <ListItem>Computer Graphics</ListItem>
          <ListItem>Physics-based simulation</ListItem>
          <ListItem>High-Performance Computing</ListItem>
          <ListItem>Sparse data structure</ListItem>
          <ListItem>Scalable simulation</ListItem>
          {/* <ListItem>Computational Geometry</ListItem> */}
          <ListItem>Machine Learning</ListItem>
      </List>


        
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/publications"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Publications
          </Button>


          <Button
          as={NextLink}
          href="/CV_jaehyun.pdf"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          ml={4}
          >
          CV
          </Button>
        </Box>

      

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <BioSection>
          <BioYear>2026.8</BioYear>
          One paper accepted to <b>SIGGRAPH Asia 2026</b>!
        </BioSection>
        <BioSection>
          <BioYear>2026.2</BioYear>
          Will be interning at <Link as={NextLink} href="https://research.nvidia.com/labs/prl/" passHref scroll={false}>NVIDIA High-Fidelity Physics Research</Link> Team this Summer!
        </BioSection>
        <BioSection>
          <BioYear>2025.11</BioYear>
          One paper accepted to <b>CAVW</b> journal!
        </BioSection>
        <BioSection>
          <BioYear>2024.8</BioYear>
          Started Ph.D. program in Computer Sciences at University of Wisconsin-Madison!
        </BioSection>

      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <Box display="flex" alignItems="center" mb={4}>
          <Box flexShrink={0} mr={4}>
            <Image
              src="/images/logo/uwm_crestonly.png"
              alt="UW-Madison Logo"
              width={logoSize}
              height={logoSize}
            />
          </Box>
          <BioSection mb={0}>
            <BioYear>2024.9 - present</BioYear>
            Ph.D. in Computer Scienses, UW-Madison
          </BioSection>
        </Box>
        <Box display="flex" alignItems="center" mb={4}>
          <Box flexShrink={0} mr={4}>
            <Image
              src="/images/logo/ku.png"
              alt="Korea University Logo"
              width={logoSize}
              height={logoSize}
            />
          </Box>
          <BioSection mb={0}>
            <BioYear>2021.9 - 2024.2</BioYear>
            M.S. in Computer Science, Korea University
          </BioSection>
        </Box>
        <Box display="flex" alignItems="center" mb={4}>
          <Box flexShrink={0} mr={4}>
            <Image
              src="/images/logo/ku.png"
              alt="Korea University Logo"
              width={logoSize}
              height={logoSize}
            />
          </Box>
          <BioSection mb={0}>
            <BioYear>2015.3 - 2021.2</BioYear>
            B.S. in Mechanical Engineering, Korea University
            <Text fontSize="sm" fontStyle="italic" color="gray.500" sx={{ textIndent: 0 }} pl="5em">(Military service 2015.5 - 2017.2)</Text>
          </BioSection>
        </Box>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Box display="flex" alignItems="center" mb={4}>
          <Box flexShrink={0} mr={4}>
            <Image
              src="/images/logo/nvidia.png"
              alt="NVIDIA Logo"
              width={logoSize}
              height={logoSize}
            />
          </Box>
          <BioSection mb={0}>
            <BioYear>2026.5 - 2026.8</BioYear>
            Research Intern, <Link as={NextLink} href="https://research.nvidia.com/labs/prl/" passHref scroll={false}>NVIDIA High-Fidelity Physics Research Team</Link>
          </BioSection>
        </Box>
      </Section>


      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JaeHyunLee94" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/jaehyun_lee1994/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jaehyun-lee-4970921aa/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>

        </List>



      </Section>
    </Container>
  </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
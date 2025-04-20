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
// import { GridItem } from '../components/grid-item'
import {IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxW="1000px" px={6} mx="auto">
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Japan!
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" mb={5}>
            JaeHyun Lee
          </Heading>
          
          <p>Computer Graphics Researcher</p>
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
              src="/images/jaehyun.jpg"
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
        I’m a first-year Ph.D. student in Computer Sciences at the {' '}
          <Link as={NextLink} href="https://www.wisc.edu/" passHref scroll={false}>
            University of Wisconsin-Madison
          </Link>, currently working with {' '}
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
          <Link as={NextLink} href="https://media.korea.ac.kr/" passHref scroll={false}>
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
          {/* Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
        </Paragraph>


        <Heading as="h3" variant="section-title" mt={10}>
          Research Keywords
        </Heading>
        <List spacing={2} pl={4} styleType="disc">
          <ListItem>Physical Simulation</ListItem>
          <ListItem>High-Performance Computing</ListItem>
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

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <BioSection>
          <BioYear>2024.8</BioYear>
          Started Ph.D. program in Computer Sciences at University of Wisconsin-Madison!
        </BioSection>

      </Section> */}


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2024.9 - present</BioYear>
          Ph.D. in Computer Scienses, UW-Madison 
        </BioSection>
        <BioSection>
          <BioYear>2021.9 - 2024.2</BioYear>
          M.S. in Computer Science, Korea University
        </BioSection>
        <BioSection>
          <BioYear>2015.3 - 2021.2</BioYear>
          B.S. in Mechanical Engineering, Korea University
        </BioSection>
      </Section>
{/* 
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}

      <Section delay={0.3}>
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
          {/* <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem> */}
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;200k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}
{/* 
        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

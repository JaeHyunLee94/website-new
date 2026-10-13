import NextLink from 'next/link'
import { Container, Heading, Box, Text, Link, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import CiteButton from '../../components/cite-button'

const bibtex = `@article{lee2023inversion,
  title     = {Inversion alleviation for stable elastic body simulation},
  author    = {Lee, JaeHyun and Kim, Seung-wook and Um, Kiwon and Kee, Min Hyung and Han, JungHyun},
  journal   = {Computer Animation and Virtual Worlds},
  volume    = {34},
  number    = {3-4},
  pages     = {e2183},
  year      = {2023},
  publisher = {Wiley Online Library}
}`

const LinkBtn = ({ href, children }) => (
  <Link
    as={NextLink}
    href={href}
    target="_blank"
    px={4}
    py={2}
    borderWidth={1}
    borderRadius="md"
    fontSize={14}
    _hover={{ textDecoration: 'none', bg: 'teal.50' }}
  >
    {children}
  </Link>
)

const Inversion1 = () => (
  <Layout title="Inversion Alleviation">
    <Container maxW="860px" px={6} mx="auto">

      <Section delay={0.1}>
        <Heading as="h2" fontSize={26} mt={6} mb={3}>
          Inversion alleviation for stable elastic body simulation
        </Heading>

        <Text fontSize={15} mb={1}>
          <b>JaeHyun Lee</b>,{' '}
          <Link as={NextLink} href="https://rtg.hufs.ac.kr/people/" target="_blank" color="inherit">Seung-wook Kim</Link>,{' '}
          <Link as={NextLink} href="https://perso.telecom-paristech.fr/kum/" target="_blank" color="inherit">Kiwon Um</Link>,{' '}
          <Link as={NextLink} href="https://minh702.github.io/" target="_blank" color="inherit">Min Hyung Kee</Link>,{' '}
          <Link as={NextLink} href="https://media.korea.ac.kr/people/jhan/" target="_blank" color="inherit">JungHyun Han</Link>
        </Text>

        <Text fontSize={14} fontStyle="italic" mb={6}>
          Computer Animation and Virtual Worlds (CAVW), 2023
        </Text>

        <Box display="flex" gap={3} flexWrap="wrap" mb={8}>
          <LinkBtn href="https://onlinelibrary.wiley.com/doi/10.1002/cav.2183">[paper]</LinkBtn>
          <LinkBtn href="https://www.youtube.com/watch?v=4UWKqwnEQkk">[video]</LinkBtn>
          <Box px={4} py={2} borderWidth={1} borderRadius="md" fontSize={14}>
            <CiteButton bibtex={bibtex} />
          </Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box mb={8}>
          <video autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '12px' }}>
            <source src="/videos/inversion1.mp4" type="video/mp4" />
          </video>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={18} mb={3}>Abstract</Heading>
        <Divider mb={4} />
        <Text fontSize={14} lineHeight={1.8}>
          {/* TODO: add abstract */}
        </Text>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" fontSize={18} mt={8} mb={3}>Video</Heading>
        <Divider mb={4} />
        <Box borderRadius="12px" overflow="hidden">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/4UWKqwnEQkk"
            title="Inversion alleviation for stable elastic body simulation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px' }}
          />
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Inversion1
export { getServerSideProps } from '../../components/chakra'

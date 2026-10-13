import NextLink from 'next/link'
import { Container, Heading, Box, Text, Link, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

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
        <Box textAlign="center" mt={6} mb={6}>
          <Heading as="h2" fontSize={26} mb={5}>
            Inversion alleviation for stable elastic body simulation
          </Heading>

          <Text fontSize={17} fontStyle="italic" mb={6}>
            Computer Animation and Virtual Worlds (CAVW), 2023
          </Text>

          <Text fontSize={15} mb={4} letterSpacing="0.01em">
            <b>JaeHyun Lee</b><sup>1</sup>
            {'    '}
            <Link as={NextLink} href="https://rtg.hufs.ac.kr/people/" target="_blank" color="teal.500">Seung-wook Kim</Link><sup>2</sup>
            {'    '}
            <Link as={NextLink} href="https://perso.telecom-paristech.fr/kum/" target="_blank" color="teal.500">Kiwon Um</Link><sup>3</sup>
            {'    '}
            <Link as={NextLink} href="https://minh702.github.io/" target="_blank" color="teal.500">Min Hyung Kee</Link><sup>1</sup>
            {'    '}
            <Link as={NextLink} href="https://media.korea.ac.kr/people/jhan/" target="_blank" color="teal.500">JungHyun Han</Link><sup>1</sup>
          </Text>

          <Text fontSize={13} color="gray.500" mb={8} letterSpacing="0.02em">
            <sup>1</sup>Korea University&nbsp;&nbsp;
            <sup>2</sup>Hankuk University of Foreign Studies&nbsp;&nbsp;
            <sup>3</sup>Télécom Paris
          </Text>

          <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
            <LinkBtn href="https://onlinelibrary.wiley.com/doi/10.1002/cav.2183">[paper]</LinkBtn>
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
          In general, it is not easy to simulate an elastic body that undergoes large deformations.
          Especially when its elements are inverted or tangled, i.e., when its vertices penetrate
          its polygons, simulation often fails. In this paper, we propose a simple yet highly
          effective method for alleviating the inversion problems of elastic bodies. Our experiments
          made with typical optimization-based solvers demonstrate that the proposed method
          successfully stabilizes the solvers and produces visually plausible motions. We believe
          that our method can be widely adopted by a variety of state-of-the-art elastic-body
          simulators thanks to its simplicity.
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

      <Section delay={0.5}>
        <Heading as="h3" fontSize={18} mt={8} mb={3}>BibTeX</Heading>
        <Divider mb={4} />
        <Box as="pre" fontSize={13} p={4} bg="gray.100" borderRadius="md" whiteSpace="pre-wrap" fontFamily="mono" overflowX="auto">
          {bibtex}
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Inversion1
export { getServerSideProps } from '../../components/chakra'

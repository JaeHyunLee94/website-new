import NextLink from 'next/link'
import { Container, Heading, Box, Text, Link, Divider, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import CiteButton from '../../components/cite-button'

const bibtex = `@inproceedings{lee2026mloperator,
  title     = {Machine Learning Operator Lexicon for Partial Differential Equation Solvers on Irregular and Sparse Domains},
  author    = {Lee, JaeHyun and Sifakis, Eftychios},
  booktitle = {SIGGRAPH Asia 2026 Conference Papers},
  year      = {2026},
  doi       = {10.1145/3829340.3842319}
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

const MLOperator = () => (
  <Layout title="ML Operator Lexicon">
    <Container maxW="860px" px={6} mx="auto">

      <Section delay={0.1}>
        <Heading as="h2" fontSize={26} mt={6} mb={3}>
          Machine Learning Operator Lexicon for Partial Differential Equation Solvers on Irregular and Sparse Domains
        </Heading>

        <Text fontSize={15} mb={1}>
          <b>JaeHyun Lee</b>,{' '}
          <Link as={NextLink} href="https://pages.cs.wisc.edu/~sifakis/" target="_blank" color="inherit">Eftychios Sifakis</Link>
        </Text>

        <Text fontSize={14} fontStyle="italic" mb={6}>
          SIGGRAPH Asia 2026 Conference Papers
        </Text>

        <Box display="flex" gap={3} flexWrap="wrap" mb={8}>
          <LinkBtn href="/papers/mloperator/paper.pdf">[paper]</LinkBtn>
          <LinkBtn href="/papers/mloperator/paper_lowres.pdf">[paper (low res)]</LinkBtn>
          <LinkBtn href="/videos/mloperator_supp.mp4">[video]</LinkBtn>
          <LinkBtn href="/papers/mloperator/supplementary_material.pdf">[supplement]</LinkBtn>
          <Box px={4} py={2} borderWidth={1} borderRadius="md" fontSize={14}>
            <CiteButton bibtex={bibtex} />
          </Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box mb={8}>
          <img
            src="/images/publications/papers_2138s2-file2.gif"
            alt="teaser"
            style={{ width: '100%', borderRadius: '12px' }}
          />
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
          <video controls width="100%" style={{ borderRadius: '12px' }}>
            <source src="/videos/mloperator_supp.mp4" type="video/mp4" />
          </video>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default MLOperator
export { getServerSideProps } from '../../components/chakra'

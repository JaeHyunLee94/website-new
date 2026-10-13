import NextLink from 'next/link'
import { Container, Heading, Box, Text, Link, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

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
        <Box textAlign="center" mt={6} mb={6}>
          <Heading as="h2" fontSize={26} mb={5}>
            Machine Learning Operator Lexicon for Partial Differential Equation Solvers on Irregular and Sparse Domains
          </Heading>

          <Text fontSize={17} fontStyle="italic" mb={6}>
            SIGGRAPH Asia 2026 Conference Papers
          </Text>

          <Text fontSize={15} mb={4} letterSpacing="0.01em">
            <b>JaeHyun Lee</b><sup>1</sup>
            {'    '}
            <Link as={NextLink} href="https://pages.cs.wisc.edu/~sifakis/" target="_blank" color="teal.500">Eftychios Sifakis</Link><sup>1,2</sup>
          </Text>

          <Text fontSize={13} color="gray.500" mb={8} letterSpacing="0.02em">
            <sup>1</sup>University of Wisconsin-Madison&nbsp;&nbsp;
            <sup>2</sup>NVIDIA
          </Text>

          <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
            <LinkBtn href="/papers/mloperator/paper.pdf">[paper]</LinkBtn>
            <LinkBtn href="/papers/mloperator/paper_lowres.pdf">[paper (low res)]</LinkBtn>
            <LinkBtn href="/papers/mloperator/supplementary_material.pdf">[supplement]</LinkBtn>
          </Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box mb={2} mx="auto" maxW="700px">
          <video autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '12px' }}>
            <source src="/videos/mloperator_teaser.mp4" type="video/mp4" />
          </video>
        </Box>
        <Text fontSize={13} color="gray.600" textAlign="center" maxW="700px" mx="auto" mb={8} lineHeight={1.6}>
          <b>Fig. 1.</b> Overview of the proposed operator lexicon and its 3D PDE applications.
          Our formulation expresses PDE solvers through machine-learning operators,
          applying differential operators via convolution and handling boundary conditions
          through localized masking and shifting operations. This unified abstraction
          supports a broad range of PDEs and 3D applications, including sparse fluid simulation,
          dense fluid simulation, heat-transfer PDE coupled with fluid simulation,
          inverse coefficient reconstruction, and inverse fluidic control.
        </Text>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={18} mb={3}>Abstract</Heading>
        <Divider mb={4} />
        <Text fontSize={14} lineHeight={1.8}>
          Solvers for grid-based discretizations of Partial Differential Equations (PDEs)
          are ubiquitous in computer graphics. However, efficient implementation of
          such solvers is contingent on specific design choices for grid data structures
          (especially for sparse domains), hand-tuned kernels for specific platforms
          (CPU vs GPU), and typically relies on the lexicon of sparse linear algebra
          to express its algorithmic building blocks. Meanwhile, modern hardware
          and software stacks are increasingly optimized around machine learning
          (ML) workloads, where tensor operators such as convolution, masking, and
          pooling form the dominant computational vocabulary. We introduce an
          ML-operator abstraction for discrete PDE solvers on sparse and irregular
          domains. Our formulation separates solver computation into uniform stencil
          actions, pointwise coefficient operations, masking, reductions, and localized
          boundary corrections, yielding a compact operator pipeline that supports
          practical boundary conditions and matrix-free execution. Unlike neural PDE
          methods, our approach does not learn a solver. It uses ML operators to express
          and execute established numerical discretizations. We demonstrate that
          this abstraction accommodates multigrid, multigrid-preconditioned Krylov
          solvers, and adjoint differentiation on practical 3D problems, including
          sparse, irregular, and inverse settings. The same operator-level view also
          exposes concrete backend optimization targets. Through a sparse domain
          optimization case study, we show that targeted improvements to a key operator
          can substantially improve performance over an existing baseline.
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

export default MLOperator
export { getServerSideProps } from '../../components/chakra'

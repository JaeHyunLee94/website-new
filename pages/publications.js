import NextLink from 'next/link'
import { Container, Heading, SimpleGrid, Box, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem } from '../components/grid-item'


const thumbInversion1 = '/videos/inversion1.mp4'
const thumbInversion2 = '/videos/inversion2.mp4'
const thumbDimension = '/videos/dimension.mp4'
// const thumbConvSolve = '/videos/convsolve.mp4'


const Publications = () => (
  <Layout title="Publications">
    <Container maxW="1000px" px={6} mx="auto">
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>



      <SimpleGrid columns={{sm:1}} gap={6}>

        <Section>
          <PubGridItem
            title="Machine Learning Operator Lexicon for Partial Differential Equation Solvers on Irregular and Sparse Domains"
            thumbnail="/images/publications/papers_2138s2-file2.gif"
            journal="SIGGRAPH Asia 2026"
            author={
              <><b>JaeHyun Lee</b> and <Link as={NextLink} href="https://pages.cs.wisc.edu/~sifakis/" target="_blank" color="inherit">Eftychios Sifakis</Link></>
            }
            project_page="none"
            paper="/papers/mloperator/paper.pdf"
            paper_lowres="/papers/mloperator/paper_lowres.pdf"
            video="/videos/mloperator_supp.mp4"
            code="none"
            supp="/papers/mloperator/supplementary_material.pdf"
            bibtex={`@inproceedings{lee2026mloperator,
  title     = {Machine Learning Operator Lexicon for Partial Differential Equation Solvers on Irregular and Sparse Domains},
  author    = {Lee, JaeHyun and Sifakis, Eftychios},
  booktitle = {SIGGRAPH Asia 2026 Conference Papers},
  year      = {2026},
  doi       = {10.1145/3829340.3842319}
}`}
          >
          </PubGridItem>
        </Section>

        {/* <Section>
          <PubGridItem
            id="convsolve"
            title="Convolutional PDE solver"
            thumbnail={thumbConvSolve}
            journal="(to be submitted)"
            project_page="none"
            // author="none"
            paper="none"
            video="https://www.notion.so/Convolution-Solver-video-28b939b1e3fc807caa45ee0fadc3afc2?source=copy_link"
            code="none"
            slides="none"
          >
          </PubGridItem>
        </Section> */}


        <Section>
          <PubGridItem
            id="dimension_expansion"
            title="Dimension Expansion for Untangling Mass-spring System"
            thumbnail={thumbDimension}
            journal="Computer Animation and Virtual Worlds (CAVW), 2025"
            project_page="none"
            author={
                <><Link as={NextLink} href="https://rtg.hufs.ac.kr/people/" target="_blank" color="inherit">Seung-wook Kim</Link>, HuiSeong Lee, <b>JaeHyun Lee</b>, <Link as={NextLink} href="https://perso.telecom-paristech.fr/kum/" target="_blank" color="inherit">Kiwon Um</Link>, and <Link as={NextLink} href="https://media.korea.ac.kr/people/jhan/" target="_blank" color="inherit">JungHyun Han</Link></>
            }
            // <p>Seung-wook Kim, HuiSeong Lee, <b>JaeHyun Lee</b>, Kiwon Um, and JungHyun Han</p>
            paper="https://onlinelibrary.wiley.com/doi/10.1002/cav.70079"
            video="https://drive.google.com/file/d/1dB_Nc5k5oSwC9TaKBFeRLPEFaWt_ckt4/view"
            code="none"
            slides="none"
            bibtex={`@article{kim2025dimension,
  title     = {Dimension Expansion for Untangling Mass-Spring System},
  author    = {Kim, Seung-wook and Lee, HuiSeong and Lee, JaeHyun and Um, Kiwon and Han, JungHyun},
  journal   = {Computer Animation and Virtual Worlds},
  volume    = {36},
  number    = {6},
  pages     = {e70079},
  year      = {2025},
  publisher = {Wiley Online Library}
}`}
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="inversion2"
            title="Momentum-preserving Inversion Alleviation for Elastic Material Simulation"
            thumbnail={thumbInversion2}
            journal="Computer Animation and Virtual Worlds (CAVW), 2024"
            project_page="none"
            author={
              <><Link as={NextLink} href="https://heejojeong.github.io/" target="_blank" color="inherit">Heejo Jeong</Link>, <Link as={NextLink} href="https://rtg.hufs.ac.kr/people/" target="_blank" color="inherit">Seung-wook Kim</Link>, <b>JaeHyun Lee</b>, <Link as={NextLink} href="https://perso.telecom-paristech.fr/kum/" target="_blank" color="inherit">Kiwon Um</Link>, Min Hyung Kee, and <Link as={NextLink} href="https://media.korea.ac.kr/people/jhan/" target="_blank" color="inherit">JungHyun Han</Link></>
            }
            // <p>Heejo Jeong, Seung-wook Kim, <b>JaeHyun Lee</b>, Kiwon Um, Min Hyung Kee, and JungHyun Han</p>
            paper="https://onlinelibrary.wiley.com/doi/10.1002/cav.2249"
            video="https://www.youtube.com/watch?v=ht_7iMMiJic"
            code="none"
            slides="none"
            bibtex={`@article{jeong2024momentum,
  title     = {Momentum-preserving inversion alleviation for elastic material simulation},
  author    = {Jeong, Heejo and Kim, Seung-wook and Lee, JaeHyun and Um, Kiwon and Kee, Min Hyung and Han, JungHyun},
  journal   = {Computer Animation and Virtual Worlds},
  volume    = {35},
  number    = {3},
  pages     = {e2249},
  year      = {2024},
  publisher = {Wiley Online Library}
}`}
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="inversion1"
            title="Inversion alleviation for stable elastic body simulation"
            thumbnail={thumbInversion1}
            journal="Computer Animation and Virtual Worlds (CAVW), 2023"
            project_page="none"
            author={
              <><b>JaeHyun Lee</b>, <Link as={NextLink} href="https://rtg.hufs.ac.kr/people/" target="_blank" color="inherit">Seung-wook Kim</Link>, <Link as={NextLink} href="https://perso.telecom-paristech.fr/kum/" target="_blank" color="inherit">Kiwon Um</Link>, Min Hyung Kee, and <Link as={NextLink} href="https://media.korea.ac.kr/people/jhan/" target="_blank" color="inherit">JungHyun Han</Link></>
            }
            // <p><b>JaeHyun Lee</b>, Seung-wook Kim, Kiwon Um, Min Hyung Kee, and JungHyun Han</p>
            paper="https://onlinelibrary.wiley.com/doi/10.1002/cav.2183"
            video="https://www.youtube.com/watch?v=4UWKqwnEQkk"
            code="none"
            slides="none"
            bibtex={`@article{lee2023inversion,
  title     = {Inversion alleviation for stable elastic body simulation},
  author    = {Lee, JaeHyun and Kim, Seung-wook and Um, Kiwon and Kee, Min Hyung and Han, JungHyun},
  journal   = {Computer Animation and Virtual Worlds},
  volume    = {34},
  number    = {3-4},
  pages     = {e2183},
  year      = {2023},
  publisher = {Wiley Online Library}
}`}
          >
          </PubGridItem>
        </Section>




       

       
      </SimpleGrid>

    <Box align="center" h="5em">
    </Box>
    </Container>
  </Layout>
)

export default Publications
export { getServerSideProps } from '../components/chakra'
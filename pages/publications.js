import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
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
            thumbnail="/images/publications/teaser_mloperator.png"
            journal="SIGGRAPH Asia 2026"
            author={
              <><b>JaeHyun Lee</b> and Eftychios Sifakis</>
            }
            project_page="none"
            paper="none"
            video="none"
            code="none"
            slides="none"
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
                <>Seung-wook Kim, HuiSeong Lee, <b>JaeHyun Lee</b>, Kiwon Um, and JungHyun Han</>
            }
            // <p>Seung-wook Kim, HuiSeong Lee, <b>JaeHyun Lee</b>, Kiwon Um, and JungHyun Han</p>
            paper="https://onlinelibrary.wiley.com/doi/10.1002/cav.70079"
            video="https://drive.google.com/file/d/1dB_Nc5k5oSwC9TaKBFeRLPEFaWt_ckt4/view"
            code="none"
            slides="none"
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
              <>Heejo Jeong, Seung-wook Kim, <b>JaeHyun Lee</b>, Kiwon Um, Min Hyung Kee, and JungHyun Han</>
            }
            // <p>Heejo Jeong, Seung-wook Kim, <b>JaeHyun Lee</b>, Kiwon Um, Min Hyung Kee, and JungHyun Han</p>
            paper="https://onlinelibrary.wiley.com/doi/10.1002/cav.2249"
            video="https://www.youtube.com/watch?v=ht_7iMMiJic"
            code="none"
            slides="none"
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
              <><b>JaeHyun Lee</b>, Seung-wook Kim, Kiwon Um, Min Hyung Kee, and JungHyun Han</>
            }
            // <p><b>JaeHyun Lee</b>, Seung-wook Kim, Kiwon Um, Min Hyung Kee, and JungHyun Han</p>
            paper="https://onlinelibrary.wiley.com/doi/10.1002/cav.2183"
            video="https://www.youtube.com/watch?v=4UWKqwnEQkk"
            code="none"
            slides="none"
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
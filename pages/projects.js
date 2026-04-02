import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem } from '../components/grid-item'

const thumbBlackHole = '/videos/projects_blackhole.mp4'
const thumbFEM = '/videos/projects_fem.mp4'
const thumbMPMCUDA = '/videos/projects_mpm_cuda.mp4'
const thumbStableFluid = '/videos/stable_fluid.mp4'
const thumbSand = '/videos/projects_sand.mp4'
const thumbSpatialHashing = '/videos/projects_collision.mp4'
const thumbCloth = '/videos/projects_cloth.mp4'
const thumbAge = '/videos/projects_age.mp4'




const Projects = () => (
  <Layout title="Projects">
    <Container maxW="1000px" px={6} mx="auto">
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      Some intersting projects related to Computer Graphics :)

      <SimpleGrid columns={{sm:1}} gap={6}>
        <Section>
          <PubGridItem
            id="Blackhole"
            title="Ray Tracing Schwarzschild black hole"
            thumbnail={thumbBlackHole}
            video="none"
            // journal={"SIGGRAPH Asia 2023, Tokyo, Japan"}
            project_page="none"
            paper = "none"
            code="https://github.com/JaeHyunLee94/BlackHoleRendering"
            slides="none"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem
            id="fem"
            title= "Real-time FEM simulation"
            thumbnail={thumbFEM}
            project_page="none"
            // author="none"
            paper="none"
            video="none"
            code="https://github.com/JaeHyunLee94/FEM_3d_taichi"
            slides="none"
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="mpmcuda"
            title= "GPU accelerated MPM engine"
            thumbnail={thumbMPMCUDA}
            project_page="none"
            // author="none"
            paper="none"
            video="none"
            code="https://github.com/JaeHyunLee94/mpm_solver?tab=readme-ov-file"
            slides="none"
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="stablefluid"
            title= "Real-time 3D stable fluid simulation"
            thumbnail={thumbStableFluid}
            project_page="none"
            // author="none"
            paper="none"
            video="none"
            code="https://github.com/JaeHyunLee94/Stable_Fluid_3D_taichi"
            slides="none"
          >
          </PubGridItem>
        </Section>


        <Section>
          <PubGridItem
            id="granular"
            title= "Granular (sand) simulation"
            thumbnail={thumbSand}
            project_page="none"
            // author="none"
            paper="none"
            video="none"
            code="https://github.com/JaeHyunLee94/Sand_taichi"
            slides="none"
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="spatialhashing"
            title= "Spatial Hasing collision detection"
            thumbnail={thumbSpatialHashing}
            project_page="none"
            // author="none"
            paper="https://dl.acm.org/doi/10.1145/3450626.3459878"
            video="https://www.youtube.com/watch?v=WLLNjNcQA80&feature=youtu.be"
            code="https://github.com/JaeHyunLee94/Spatial-hasing"
            slides="none"
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="clothsim"
            title= "Cloth Simulation"
            thumbnail={thumbCloth}
            project_page="none"
            // author="none"
            paper="none"
            video="none"
            code="https://github.com/JaeHyunLee94/Cloth-simulation"
            slides="none"
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="ageprediction"
            title= "Real Time Age predictor with CNN"
            thumbnail={thumbAge}
            project_page="none"
            // author="none"
            paper="none"
            video="none"
            code="https://github.com/JaeHyunLee94/age-prediction-pytorch"
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

export default Projects
export { getServerSideProps } from '../components/chakra'
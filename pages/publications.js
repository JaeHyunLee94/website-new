import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem } from '../components/grid-item'


import thumbInversion1 from '../public/images/publications/inversion1.gif'
import thumbInversion2 from '../public/images/publications/inversion2.gif'



const Publications = () => (
  <Layout title="Publications">
    <Container maxW="1000px" px={6} mx="auto">
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <SimpleGrid columns={{sm:1}} gap={6}>

        <Section>
          <PubGridItem
            id="inversion2"
            title="Momentum-preserving Inversion Alleviation for Elastic Material Simulation"
            thumbnail={thumbInversion2}
            journal="Computer Animation and Virtual Worlds (CAVW), 2024"
            project_page="none"
            author=<p>Heejo Jeong, Seung-wook Kim, <b>JaeHyun Lee</b>, Kiwon Um, Min Hyung Kee, and JungHyun Han</p>
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
            author=<p><b>JaeHyun Lee</b>, Seung-wook Kim, Kiwon Um, Min Hyung Kee, and JungHyun Han</p>
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
import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} This website is built based on the Takuya Matsuyama's website
    </Box>
  )
}

export default Footer

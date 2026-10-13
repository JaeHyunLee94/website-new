import { Box, Link, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverCloseButton, Button, useClipboard } from '@chakra-ui/react'

const CiteButton = ({ bibtex }) => {
  const { hasCopied, onCopy } = useClipboard(bibtex)
  return (
    <Popover placement="bottom-start" isLazy>
      <PopoverTrigger>
        <Link as="span" cursor="pointer">[cite]</Link>
      </PopoverTrigger>
      <PopoverContent width="580px">
        <PopoverCloseButton />
        <PopoverBody pt={6} pb={3}>
          <Box as="pre" fontSize={11} p={3} bg="gray.100" borderRadius="md" whiteSpace="pre-wrap" fontFamily="mono" overflowX="auto">
            {bibtex}
          </Box>
          <Button size="xs" mt={2} colorScheme="teal" onClick={onCopy}>
            {hasCopied ? 'Copied!' : 'Copy'}
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default CiteButton

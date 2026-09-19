import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, Link, LinkBox, LinkOverlay, SimpleGrid, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverCloseButton, Button, useClipboard } from '@chakra-ui/react'
import { Global } from '@emotion/react'

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

var make_link = function (url, text) {
  var none="none"
  if (!url || none.localeCompare(url) == 0) {
    return null
  }
  return <Link as={NextLink} href={url} target="_blank">[{text}]</Link>
}

var join_links = function (links) {
  const filtered = links.filter(Boolean)
  if (filtered.length === 0) return null
  return filtered.reduce((acc, el, i) => i === 0 ? [el] : [...acc, ' | ', el], [])
}

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/publications/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

// export const PubGridItem = ({ children, id, title, thumbnail, journal, author, project_page, paper, video, code }) => (
//   <SimpleGrid columns={{sm: 1, md: 4}} gap={4}>
//     <Box w={{sm:"100%", md: "100%"}} textAlign="center">
//       <LinkBox
//         as={NextLink}
//         href={`/publications/${id}`}
//         scroll={false}
//         cursor="pointer"
//       >
//         <Image
//           src={thumbnail}
//           alt={title}
//           className="grid-item-thumbnail"
//         />
//       </LinkBox>
//     </Box>
//     <Box w={{sm: "100%", md: "300%"}} textAlign="left">
//       <LinkBox
//         as={NextLink}
//         href={`/publications/GCA`}
//         scroll={false}
//         cursor="pointer"
//       >
//         <LinkOverlay as="div" href={`/publications/${id}`}>
//           <Text mt={2} fontSize={20}>
//             {title}
//           </Text>
//           <Text fontSize={14}>
//             {author}
//           </Text>
//           <Text fontSize={14} color="grey" fontStyle="italic">
//             {journal}
//           </Text>
//         </LinkOverlay>
//         {make_link (`${project_page}`, "project page", true)}
//         {make_link (`${paper}`, "paper", true)} 
//         {make_link (`${video}`, "video", true)} 
//         {make_link (`${code}`, "code", false) }
//       </LinkBox>
//     </Box>
//   </SimpleGrid>
// )

export const PubGridItem = ({ title, thumbnail, journal, author, project_page, paper, video, code, supp, bibtex }) => {
  const isVideo = thumbnail && (thumbnail.endsWith('.mp4') || thumbnail.endsWith('.webm'))

  return (
    <SimpleGrid columns={{sm: 1, md: 4}} gap={4}>
      {thumbnail && (
        <Box w={{sm:"100%", md: "100%"}} textAlign="center">
          {isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="grid-item-thumbnail"
              style={{ width: '100%', borderRadius: '12px' }}
            >
              <source src={thumbnail} type="video/mp4" />
            </video>
          ) : (
            <img
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          )}
        </Box>
      )}
      <Box w={{sm: "100%", md: "300%"}} textAlign="left">
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>
          {author}
        </Text>
        <Text fontSize={14} fontStyle="italic">
          {journal}
        </Text>
        <Text as="div" fontSize={14}>
          {join_links([
            make_link(`${project_page}`, "project page"),
            make_link(`${paper}`, "paper"),
            make_link(`${video}`, "video"),
            supp ? make_link(`${supp}`, "supplement") : null,
            make_link(`${code}`, "code"),
            bibtex ? <CiteButton bibtex={bibtex} /> : null,
          ])}
        </Text>
      </Box>
    </SimpleGrid>
  )
}

export const PubGridItemLink = ({ id, title, thumbnail, journal, author, project_page, paper, video, code }) => (
  <SimpleGrid columns={{sm: 1, md: 4}} gap={4}>
    <Box w={{sm:"100%", md: "100%"}} textAlign="center">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
      />
    </Box>
    <Box w={{sm: "100%", md: "300%"}} textAlign="left">
      <Text mt={2} fontSize={20}>
        {' '}
        <Link as={NextLink} href={`/publications/${id}`} variants="pub_title">
          {title}
        </Link>
      </Text>
      <Text fontSize={14}>
        {author}
      </Text>
      <Text fontSize={14} color="grey" fontStyle="italic">
        {journal}
      </Text>
      <Text fontSize={14}>
        {join_links([
          make_link(`${project_page}`, "project page"),
          make_link(`${paper}`, "paper"),
          make_link(`${video}`, "video"),
          make_link(`${code}`, "code"),
        ])}
      </Text>
    </Box>
  </SimpleGrid>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
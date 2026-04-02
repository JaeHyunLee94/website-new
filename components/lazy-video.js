import { useEffect, useRef, useState } from 'react'
import { Box, Spinner, Center } from '@chakra-ui/react'

const LazyVideo = ({ src, alt, fallbackSrc, ...props }) => {
  const videoRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <Box ref={videoRef} position="relative" {...props}>
      {!isLoaded && (
        <Center position="absolute" top="0" left="0" right="0" bottom="0">
          <Spinner size="lg" color="teal.500" />
        </Center>
      )}
      {isVisible && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: 'auto',
            display: isLoaded ? 'block' : 'none',
          }}
        >
          <source src={src} type="video/mp4" />
          {fallbackSrc && <img src={fallbackSrc} alt={alt} />}
        </video>
      )}
    </Box>
  )
}

export default LazyVideo

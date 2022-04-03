import { ChakraProvider } from '@chakra-ui/react'
import css from '../pages/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
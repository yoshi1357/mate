import React, { type FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Router } from './router/Router'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'red.100',
        color: 'red.800'
      }
    }
  }
})

const App: FC = () => {
  return (
    <div id="main">
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ChakraProvider>
    </div>
  )
}

export default App

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
  const title: string = 'Hello TypeScript React'
  return (
    <div id="main">
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Router />
                <h1>{title}</h1>
            </BrowserRouter>
        </ChakraProvider>
    </div>
  )
}

export default App

import React, { type FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
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
          <RecoilRoot>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
          </RecoilRoot>
        </ChakraProvider>
    </div>
  )
}

export default App

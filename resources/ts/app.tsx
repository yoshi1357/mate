import React, { type FC } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Router } from "./router/Router";


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
                <h1>{title}</h1>
                <Router />
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/users">会員一覧</Link>
                    </li>
                    <li>
                        <Link to="/communities">コミュニティ一覧</Link>
                    </li>
                    <li>
                        <Link to="/matched">マッチング</Link>
                    </li>
                    <li>
                        <Link to="/compatibility_test">相性診断</Link>
                    </li>
                    <li>
                        <Link to="/mypage">マイページ</Link>
                    </li>
                </ul>
            </BrowserRouter>
        </ChakraProvider>
    </div>
  )
}

const container = document.getElementById('app') as HTMLInputElement
const root = createRoot(container)
root.render(<App />)

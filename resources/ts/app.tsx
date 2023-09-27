import React, { type FC } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { TopPage } from './components/TopPage'
import { MyPage } from './components/MyPage'
import { PostPage } from './components/PostPage'

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
                <Routes>
                    <Route path="/" element={<TopPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/posts" element={<PostPage />} />
                </Routes>
                <h1>{title}</h1>
                <ul>
                    <li>
                        <Link to="/">Top</Link>
                    </li>
                    <li>
                        <Link to="/mypage">My</Link>
                    </li>
                    <li>
                        <Link to="/posts">Post</Link>
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

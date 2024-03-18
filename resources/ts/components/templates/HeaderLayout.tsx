import React, { memo, type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../organisms/layout/Header'
import { Container } from '@chakra-ui/react'

export const HeaderLayout: FC = memo(function HeaderLayout () {
  return (
    <>
        <Header />
        <Container h='100vh' w='100vw'>
          <Outlet />
        </Container>
    </>
  )
})

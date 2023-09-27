import React, { memo, type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../organisms/layout/Header'

export const HeaderLayout: FC = memo(function HeaderLayout () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
})
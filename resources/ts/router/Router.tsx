import React, { memo, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/pages/LoginPage'
import { MyPage } from '../components/pages/MyPage'
import { UserIndexPage } from '../components/pages/UserIndexPage'
import { CommunityIndexPage } from '../components/pages/CommunityIndexPage'
import { MatchedPage } from '../components/pages/MatchedPage'
import { CompatibilityTestPage } from '../components/pages/CompatibilityTestPage'
import { HeaderLayout } from '../components/templates/HeaderLayout'

export const Router: FC = memo(function Router () {
  return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<HeaderLayout />}>
                <Route path="/users" element={<UserIndexPage />} />
                <Route path="/communities" element={<CommunityIndexPage />} />
                <Route path="/matched" element={<MatchedPage />} />
                <Route path="/compatibility_test" element={<CompatibilityTestPage />} />
                <Route path="/mypage" element={<MyPage />} />
            </Route>
        </Routes>
  )
})

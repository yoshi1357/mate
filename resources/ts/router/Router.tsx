import React, { memo, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/pages/LoginPage'
import { MyPage } from '../components/pages/MyPage'
import { UserIndexPage } from '../components/pages/UserIndexPage'
import { CommunityIndexPage } from '../components/pages/CommunityIndexPage'
import { MatchedPage } from '../components/pages/MatchedPage'
import { CompatibilityTestPage } from '../components/pages/CompatibilityTestPage'
import { HeaderLayout } from '../components/templates/HeaderLayout'
import { NotFound } from '../components/pages/404'
import { UserDetailPage } from '../components/pages/UserDetailPage'
import { UserCreatePage } from '../components/pages/UserCreatePage'
import { PublicLayout } from '../components/templates/PublicLayout'
import { PrivateLayout } from '../components/templates/PrivateLayout'
import { GeneralLayout } from '../components/templates/GeneralLayout'

export const Router: FC = memo(function Router () {
  return (
        <Routes>
            <Route element={<PublicLayout />}>
              {/* 非ログインユーザーでも閲覧できるRoute */}
              <Route element={<GeneralLayout />}>
                {/* 非ログインユーザーのみ閲覧できるRoute */}
                <Route path="/" element={<LoginPage />} />
              </Route>
              <Route path="/users/create" element={<UserCreatePage />} />
            </Route>
            <Route element={<PrivateLayout />}>
              {/* ログインユーザーのみ閲覧できるRoute */}
              <Route element={<HeaderLayout />}>
                  <Route path="/users">
                    <Route index={true} element={<UserIndexPage />} />
                    <Route path=":id" element={<UserDetailPage />} />
                  </Route>
                  <Route path="/communities" element={<CommunityIndexPage />} />
                  <Route path="/matched" element={<MatchedPage />} />
                  <Route path="/compatibility_test" element={<CompatibilityTestPage />} />
                  <Route path="/mypage" element={<MyPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
  )
})

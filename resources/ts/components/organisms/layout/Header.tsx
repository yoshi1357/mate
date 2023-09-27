import React, { type FC, memo } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Header: FC = memo(function Header () {
  return (
    <Box as="nav" bg="pink.400" w="100%" p={4} color="white">
        <Flex justify="center">
        <Box pr={4} mr={4}>
            <Link to="/">Login</Link>
        </Box>
        <Box pr={4} mr={4}>
            <Link to="/users">会員一覧</Link>
        </Box>
        <Box pr={4} mr={4}>
            <Link to="/communities">コミュニティ一覧</Link>
        </Box>
        <Box pr={4} mr={4}>
            <Link to="/matched">マッチング</Link>
        </Box>
        <Box pr={4} mr={4}>
            <Link to="/compatibility_test">相性診断</Link>
        </Box>
        <Box pr={4} mr={4}>
            <Link to="/mypage">マイページ</Link>
        </Box>
        </Flex>
    </Box>
  )
})

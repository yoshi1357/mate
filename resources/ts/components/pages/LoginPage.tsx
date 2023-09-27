import React, { memo, type FC, useState, type ChangeEvent } from 'react'
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'

export const LoginPage: FC = memo(function LoginPage () {
  const [userId, setUserId] = useState('')
  const { login, loading } = useAuth()

  const onClick = (): void => { login(userId) }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserId(e.target.value)
  }

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Mate
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={6} px={10}>
          <Input placeholder="email" onChange={handleChange}></Input>
          <PrimaryButton
            disabled={userId === ''}
            loading={loading}
            onClick={onClick}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})

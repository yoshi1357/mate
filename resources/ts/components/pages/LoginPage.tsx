import React, { memo, type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {
  Heading,
  Box,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Flex,
  Divider,
  FormErrorMessage,
  Center,
  Button,
} from '@chakra-ui/react'
import { useCookies } from 'react-cookie'

import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  email: string
  password: string
}

export const LoginPage: FC = memo(function LoginPage () {
  const [cookies, setCookie, removeCookie] = useCookies(['']);
  const { login, loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({
    defaultValues: { email: 'john.doe@example.com', password: 'password' },
    mode: 'onBlur'
  })

  const onSubmit = handleSubmit((data) => { login(data.email, data.password) })

  useEffect(() => {
    // 認証情報がセットされていなければ一般ユーザーとしてセットする
    if (!cookies[import.meta.env.VITE_AUTHORITY]) {
      setCookie(import.meta.env.VITE_AUTHORITY, import.meta.env.VITE_GENERAL);
    }
  }, [])

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Mate
        </Heading>
        <Divider my={4} />
        <form>
          <Stack spacing={6} py={6} px={10}>
            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="email"
                {...register('email', {
                  required: {
                    value: true,
                    message: '入力が必須の項目です。'
                  }
                })}
              />
              <FormErrorMessage>
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.password)}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: '入力が必須の項目です。'
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'アルファベットのみ入力してください。'
                  },
                  minLength: {
                    value: 8,
                    message: '8文字以上入力してください。'
                  }
                })}
              />
              <FormErrorMessage>
                {errors.password?.message}
              </FormErrorMessage>
            </FormControl>
            <Center>
              <Link to={'users/create'}>
                新規登録
              </Link>
            </Center>
            <PrimaryButton type="submit" disabled={!isValid} loading={loading} onClick={onSubmit}>
              ログイン
            </PrimaryButton>
          </Stack>
        </form>
      </Box>
    </Flex>
  )
})

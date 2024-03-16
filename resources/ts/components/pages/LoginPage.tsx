import React, { memo, type FC } from 'react'
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
  FormErrorMessage
} from '@chakra-ui/react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'

interface FormData {
  email: string
  password: string
}

export const LoginPage: FC = memo(function LoginPage () {
  // const [userId, setUserId] = useState('')
  const { login, loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: { email: 'Sincere@april.biz', password: 'password' },
    mode: 'onBlur'
  })

  const onSubmit = handleSubmit((data) => { login(data.email, data.password) })

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
                    message: '入力が必須の項目です。',
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'アルファベットのみ入力してください。',
                  },
                  minLength: {
                    value: 8,
                    message: '8文字以上入力してください。',
                  }
                })}
              />
              <FormErrorMessage>
                {errors.password?.message}
              </FormErrorMessage>
            </FormControl>
            <PrimaryButton type="submit" disabled={!isValid} loading={loading} onClick={onSubmit}>
              ログイン
            </PrimaryButton>
          </Stack>
        </form>
      </Box>
    </Flex>
  )
})

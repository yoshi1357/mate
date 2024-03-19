import { Badge, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
export const PasswordInput = memo(() => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<FormControl isInvalid={Boolean(errors.password)}>
			<VStack>
				<FormLabel htmlFor="password">
					<Badge colorScheme='red' mr={2}>必須</Badge>
					パスワード
				</FormLabel>
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
			</VStack>
		</FormControl>
	)
})

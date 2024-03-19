// EmailInput.tsx
import { FormControl, FormLabel, Input, FormErrorMessage, VStack, Badge } from '@chakra-ui/react';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

export const EmailInput = memo(() => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<FormControl isInvalid={Boolean(errors.email)}>
			<VStack>
				<FormLabel htmlFor="email">
					<Badge colorScheme='red' mr={2}>必須</Badge>
					メールアドレス
				</FormLabel>
				<Input
					id="email"
					type="email"
					placeholder='sample@email.com'
					{...register('email', {
						required: 'メールアドレスは必須です。',
						pattern: {
							value: /^[^@]+@[^@]+\.[^@]+$/,
							message: '無効なメールアドレス形式です。'
						}
					})}
				/>
				<FormErrorMessage>
					{errors.email?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	);
});

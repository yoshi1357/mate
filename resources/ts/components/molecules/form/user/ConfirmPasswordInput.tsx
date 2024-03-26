// ConfirmPasswordInput.tsx
import React, { memo } from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage, VStack, Badge } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export const ConfirmPasswordInput = memo(() => {
	const { register, watch, formState: { errors } } = useFormContext();
	const password = watch('password');

	const passwordValidationOption = {
		validate: {
			message: (value: string): string | null => value === password
			? null
			: 'パスワードが一致しません'
		}
	}

	return (
		<FormControl isInvalid={Boolean(errors.password_digest)}>
			<VStack>
				<FormLabel htmlFor="password_digest">
					<Badge colorScheme='red' mr={2}>必須</Badge>
					確認用パスワード
				</FormLabel>
				<Input
					id="password_digest"
					type="password"
					placeholder='password'
					{...register('password_digest', passwordValidationOption)}
				/>
				<FormErrorMessage>
					{errors.password_digest?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	);
});

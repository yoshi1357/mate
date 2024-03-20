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
		<FormControl isInvalid={Boolean(errors.confirmPassword)}>
			<VStack>
				<FormLabel htmlFor="confirmPassword">
					<Badge colorScheme='red' mr={2}>必須</Badge>
					確認用パスワード
				</FormLabel>
				<Input
					id="confirmPassword"
					type="password"
					placeholder='password'
					{...register('confirmPassword', passwordValidationOption)}
				/>
				<FormErrorMessage>
					{errors.confirmPassword?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	);
});

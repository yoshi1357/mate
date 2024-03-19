// ContentInput.tsx
import { FormControl, FormLabel, Textarea, FormErrorMessage, VStack, Badge } from '@chakra-ui/react';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

export const ContentInput = memo(() => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<FormControl isInvalid={Boolean(errors.content)}>
			<VStack>
				<FormLabel htmlFor="content">
					<Badge colorScheme='red' mr={2}>必須</Badge>
					自己紹介
				</FormLabel>
				<Textarea
					id="content"
					placeholder="500文字以下で内容を入力してください"
					size="lg"
					{...register('content', {
						required: '内容の入力は必須です。',
						maxLength: {
							value: 500,
							message: '500文字以下で入力してください。'
						}
					})}
				/>
				<FormErrorMessage>
					{errors.content?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	);
});

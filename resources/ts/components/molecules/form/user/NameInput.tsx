import { Badge, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
export const NameInput = memo(() => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<FormControl isInvalid={Boolean(errors.name)}>
			<VStack>
				<FormLabel htmlFor="name">
					<Badge colorScheme='red' mr={2}>必須</Badge>
					名前
				</FormLabel>
				<Input
					id="name"
					type="text"
					placeholder="たろう"
					{...register('name', {
						required: {
							value: true,
							message: '入力が必須の項目です。'
						},
					})}
				/>
				<FormErrorMessage>
					{errors.name?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	)
})

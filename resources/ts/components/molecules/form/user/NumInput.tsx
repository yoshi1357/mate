import {
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	VStack,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Badge,
} from '@chakra-ui/react'
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
	labelText: string
	label: string
	min: number
	max: number
	required?: string | boolean
}

export const NumInput = memo((props: Props) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const { labelText, label, min, max, required = false } = props
	return (
		<FormControl isInvalid={Boolean(errors.label)}>
			<VStack>
				<FormLabel htmlFor={label}>
					{ required ? (
						<Badge colorScheme='red' mr={2}>必須</Badge>
					) : (
						<Badge mr={2}>任意</Badge>
					)}
					{labelText}
				</FormLabel>
				<NumberInput>
					<NumberInputField
						{...register(label, {
							required: {
								value: true,
								message: '入力が必須の項目です。'
							},
							pattern: {
								value: /^[0-9]+$/,
								message: '半角英数字のみ入力してください。'
							},
							min: {
								value: min,
								message: `${min}以上を入力してください。`
							},
							max: {
								value: max,
								message: `${max}以下を入力してください。`
							}
						})}
					/>
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
				<FormErrorMessage>
					{errors.label?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	)
})

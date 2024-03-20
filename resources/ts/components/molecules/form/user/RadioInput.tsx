import { Badge, FormControl, FormErrorMessage, FormLabel, HStack, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { type Radio as RadioType } from '../../../../types/parts/radio';

interface Props {
	labelText: string
	label: string
	radioList: RadioType[]
	required?: string | boolean
}

export const RadioInput = memo((props: Props) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const { radioList, labelText, label, required = false } = props;

	return (
		<FormControl as="fieldset" isInvalid={Boolean(errors[label])}>
			<VStack>
				<FormLabel htmlFor={label}>
					{ required ? (
						<Badge colorScheme='red' mr={2}>必須</Badge>
					) : (
						<Badge mr={2}>任意</Badge>
					)}
					{labelText}
				</FormLabel>
				<RadioGroup>
					<HStack spacing={4}>
						{radioList.map((radio) => (
							<Radio key={radio.id} {...register(label, { required: radio.required })} value={radio.value}>{radio.label}</Radio>
						))}
					</HStack>
				</RadioGroup>
				<FormErrorMessage>
					{errors[label]?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	)
})

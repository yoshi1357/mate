import React, { memo } from 'react';
import { FormControl, FormLabel, Select, FormErrorMessage, VStack, Badge } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { type Select as SelectType } from '../../../../types/parts/select';

interface Props {
	selectList: SelectType[]
	labelText: string
	label: string
	required: string | boolean
}

export const SelectBoxInput = memo((props: Props) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const { selectList, labelText, label, required } = props;

	return (
		<FormControl isInvalid={Boolean(errors.bodyShape)}>
			<VStack>
				<FormLabel htmlFor={label}>
					{ required ? (
						<Badge colorScheme='red' mr={2}>必須</Badge>
					) : (
						<Badge mr={2}>任意</Badge>
					)}
					{labelText}
				</FormLabel>
				<Select id={label} placeholder={`${labelText}を選択してください`} {...register(label, { required })}>
					{selectList.map((select) => (
						<option key={select.id} value={select.value}>{select.label}</option>
					))}
				</Select>
				<FormErrorMessage>
					{errors.bodyShape?.message}
				</FormErrorMessage>
			</VStack>
		</FormControl>
	);
});

import { memo, type FC, useCallback } from 'react';
import {
	Box,
	Button,
	Center,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
} from '@chakra-ui/react';

import { type User } from '../../types/api/user';
import { UserCard } from '../organisms/user/UserCard';
import { useNavigate } from 'react-router-dom';

interface Props {
	isOpen: boolean
	onClose: () => void
	user: User | null
}

export const UserModal: FC<Props> = memo((props: Props) => {
	const navigation = useNavigate();
	const { isOpen, onClose, user } = props;
	const userClick = useCallback((id: number) => {
		navigation(`${id}`)
  }, [])

	return user ? (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>ユーザー詳細</ModalHeader>
					<ModalCloseButton />
						<ModalBody>
							<Stack spacing={4} textAlign="center">
								<Center>
									<UserCard id={user?.id} name={user?.name} userClick={() => userClick(user?.id)} />
								</Center>
								<Box>
									住所: {user?.address.city}
								</Box>
								<Box>
									メールアドレス: {user?.email}
								</Box>
								<Box>
									電話番号: {user?.phone}
								</Box>
							</Stack>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								Close
							</Button>
						</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	) : (
		<Center>ユーザ詳細データが存在しません</Center>
	)
});

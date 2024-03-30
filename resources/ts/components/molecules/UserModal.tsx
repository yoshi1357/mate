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
import { DataNotFound } from '../pages/DataNotFound';
import { type UserReturn } from '../../types/api/userReturn';

interface Props {
	isOpen: boolean
	onClose: () => void
	user: UserReturn | null
}

export const UserModal: FC<Props> = memo((props: Props) => {
	const navigation = useNavigate();
	const { isOpen, onClose, user } = props;
	const userClick = useCallback((id: number) => {
		navigation(`${id}`)
  }, [])

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>ユーザー詳細</ModalHeader>
					<ModalCloseButton />
						<ModalBody>
							{
								user ? (
									<Stack spacing={4} textAlign="center">
										<Center>
											<UserCard id={user?.id} name={user?.name} images={user?.images} userClick={() => userClick(user?.id)} />
										</Center>
										<Box>
											メールアドレス: {user?.email}
										</Box>
										<Box>
											年齢: {user?.age}
										</Box>
										<Box>
											身長: {user?.height}
										</Box>
									</Stack>
								) : (
									<DataNotFound>
										指定されたユーザーが存在しません
									</DataNotFound>
								)
							}
						</ModalBody>
						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								Close
							</Button>
						</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
});

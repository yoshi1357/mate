import { Box, Center, Container, Stack, useDisclosure } from '@chakra-ui/react'
import { memo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUserById } from '../../hooks/useGetUserById';
import { UserCard } from '../organisms/user/UserCard';
import { CarouselModal } from '../molecules/CarouselModal';
import { LoadingPage } from './LoadingPage';
import { DataNotFound } from './DataNotFound';

export const UserDetailPage = memo(() => {
	const { id } = useParams();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getUserById, user, isLoading } = useGetUserById();

	useEffect(() => {
		getUserById({ id: Number(id) });
	}, [getUserById, id])

	const userClick = useCallback((id: number): void => {
		onOpen();
	}, [onOpen])

	if (isLoading) {
		return (
			<LoadingPage />
		);
	}

	if (!user) {
		return (
			<DataNotFound>
				指定されたユーザーが存在しません
			</DataNotFound>
		);
	}

	return (
		<Container>
			<Center p={6}>
				<Stack spacing={4}>
					<UserCard id={user.id} name={user.name} userClick={userClick} />
					<CarouselModal isOpen={isOpen} onClose={onClose} images={['https://picsum.photos/200', 'https://picsum.photos/200']} />
					<Box>
						メールアドレス: {user?.email}
					</Box>
					<Box>
						住所: {user?.address.city}
					</Box>
					<Box>
						電話番号: {user?.phone}
					</Box>
					<Box>
						会社: {user?.company.name}
					</Box>
				</Stack>
			</Center>
		</Container>
	);
})
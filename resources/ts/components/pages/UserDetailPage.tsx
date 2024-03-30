import { Box, Center, Container, Stack, useDisclosure } from '@chakra-ui/react'
import { memo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUserById } from '../../hooks/useGetUserById';
import { UserCard } from '../organisms/user/UserCard';
import { CarouselModal } from '../molecules/CarouselModal';
import { LoadingPage } from './LoadingPage';
import { DataNotFound } from './DataNotFound';
import { DISPLAY_IMAGE_URL } from '../../constants/setting';

export const UserDetailPage = memo(() => {
	const { id } = useParams();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getUserById, user, isLoading } = useGetUserById();
	let filePath = user?.images.map((image) => {
		return `${DISPLAY_IMAGE_URL}/${image.file_name}`;
	})
	filePath = filePath ?? [];
	console.log(filePath);

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
					<UserCard id={user.id} name={user.name} images={user.images} userClick={userClick} />
					<CarouselModal isOpen={isOpen} onClose={onClose} images={filePath} />
					<Box>
						{user?.content}
					</Box>
					<Box>
						年齢: {user?.age}
					</Box>
					<Box>
						身長: {user?.height}
					</Box>
					<Box>
						血液型: {user?.blood_type}
					</Box>
					<Box>
						体型: {user?.body_shape}
					</Box>
					<Box>
						居住地: {user?.residence}
					</Box>
					<Box>
						出身地: {user?.birth_place}
					</Box>
					<Box>
						仕事: {user?.work}
					</Box>
					<Box>
						休み: {user?.holiday}
					</Box>
				</Stack>
			</Center>
		</Container>
	);
})

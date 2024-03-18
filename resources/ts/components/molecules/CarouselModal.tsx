import { memo, type FC } from 'react';
import {
	Button,
	Center,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

import { PureCarousel } from './PureCarousel';
import { DataNotFound } from '../pages/DataNotFound';

interface Props {
	isOpen: boolean
	onClose: () => void
	images: string[]
}

export const CarouselModal: FC<Props> = memo((props: Props) => {
	const { isOpen, onClose, images } = props;

	return images ? (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>ユーザー詳細</ModalHeader>
					<ModalCloseButton />
						<ModalBody>
                            <Center>
                                <PureCarousel images={images} />
                            </Center>
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
		<DataNotFound>
            指定された画像が存在しません
        </DataNotFound>
	)
});

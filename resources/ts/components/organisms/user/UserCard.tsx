import { memo } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { DISPLAY_IMAGE_URL } from '../../../constants/setting';
import { type UserImage } from '../../../types/api/userImage';

interface Props {
  id: number
  name: string
  images: UserImage[]
  userClick: (id: number) => void
}

export const UserCard = memo((props: Props) => {
  const { id, name, images, userClick } = props;
  const mainImageName = images[0].file_name
  return (
    <Box w="250px" h="250px" bg="white" borderRadius="10px" shadow="md" p={4}>
      <Stack textAlign="center">
        <Image
          src={`${DISPLAY_IMAGE_URL}/${mainImageName}`}
          boxSize="160px"
          m="auto"
          borderRadius="full"
          _hover={{ opacity: 0.8, cursor: 'pointer' }}
          onClick={() => userClick(id)}
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
      </Stack>
    </Box>
  );
});

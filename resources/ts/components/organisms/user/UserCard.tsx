import { memo } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { type UserImage } from '../../../types/api/userImage';

interface Props {
  id: number
  name: string
  images: UserImage[]
  userClick: (id: number) => void
}

export const UserCard = memo((props: Props) => {
  const { id, name, images, userClick } = props;
  const mainImagePath = images[0].path
  return (
    <Box w="250px" h="250px" bg="white" borderRadius="10px" shadow="md" p={4}>
      <Stack textAlign="center">
        <Image
          src={`${import.meta.env.VITE_WEB_BASE_URI}${mainImagePath}`}
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

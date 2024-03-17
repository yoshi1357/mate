import { memo } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

interface Props {
  id: number
  name: string
  userClick: (id: number) => void
}

export const UserCard = memo((props: Props) => {
  const { id, name, userClick } = props;
  return (
    <Box w="250px" h="250px" bg="white" borderRadius="10px" shadow="md" p={4}>
      <Stack textAlign="center">
        <Image
          src="https://picsum.photos/200"
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

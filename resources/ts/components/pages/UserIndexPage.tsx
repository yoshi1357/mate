import { type FC, memo, useEffect, useCallback } from 'react'
import { Center, Spinner, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';

import { UserCard } from '../organisms/user/UserCard'
import { UserModal } from '../molecules/UserModal';
import { useGetUsers } from '../../hooks/useGetUsers';
import { useSelectUser } from '../../hooks/useSelectUser';

export const UserIndexPage: FC = memo(function UserIndexPage () {
  const { users, getUsers, isLoading } = useGetUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedUser, onSelectedUser } = useSelectUser();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const userClick = useCallback((id: number) => {
    onSelectedUser({ id, users, onOpen })
  }, [onSelectedUser, users, onOpen])

  return isLoading ? (
    <Center>
      <Spinner />
    </Center>
  ) : (
    <Wrap p={{ base: 4, md: 6 }}>
      {users.map((user) => (
        <WrapItem key={user.id}>
          <UserCard
            id={user.id}
            name={user.name}
            userClick={userClick}
          />
        </WrapItem>
      ))}
      <UserModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </Wrap>
  );
});

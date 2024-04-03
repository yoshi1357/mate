import { type FC, memo, useEffect, useCallback } from 'react'
import { Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../recoil/atom'

import { UserCard } from '../organisms/user/UserCard'
import { UserModal } from '../molecules/UserModal';
import { useGetUsers } from '../../hooks/useGetUsers';
import { useSelectUser } from '../../hooks/useSelectUser';
import { LoadingPage } from './LoadingPage';

export const UserIndexPage: FC = memo(function UserIndexPage () {
  const { users, getUsers, isLoading } = useGetUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedUser, onSelectedUser } = useSelectUser();

  const userId = useRecoilValue(userIdState);
  console.log('test', userId);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const userClick = useCallback((id: number) => {
    onSelectedUser({ id, users, onOpen })
  }, [onSelectedUser, users, onOpen])

  return isLoading ? (
    <LoadingPage />
  ) : (
    <Wrap p={{ base: 4, md: 6 }}>
      {users.map((user) => (
        <WrapItem key={user.id}>
          <UserCard
            id={user.id}
            name={user.name}
            images={user.images}
            userClick={userClick}
          />
        </WrapItem>
      ))}
      <UserModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </Wrap>
  );
});

import { type FC, memo, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useGetUserById } from '../../hooks/useGetUserById';
import { LoadingPage } from './LoadingPage';

export const UserEditPage: FC = memo(function UserEditPage () {
  const { id } = useParams();
  const { getUserById, user, isLoading } = useGetUserById();
  useEffect(() => {
    getUserById({ id: Number(id) });
  }, [getUserById, id])

  if (isLoading) {
		return (
			<LoadingPage />
		);
	}

  return <div>UserEditPage: username={user?.name}</div>
})

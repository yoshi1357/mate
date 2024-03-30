import { useCallback, useState } from 'react';
import { type User } from '../types/api/user'
import { type UserReturn } from '../types/api/userReturn';

interface Props {
	id: number
	users: UserReturn[]
	onOpen: () => void
}

interface UseSelectUserReturn {
  onSelectedUser: (props: Props) => void
  selectedUser: UserReturn | null
}

export const useSelectUser = (): UseSelectUserReturn => {
	const [selectedUser, setSelectedUser] = useState<UserReturn | null>(null);
	const onSelectedUser = useCallback((props: Props) => {
		const { id, users, onOpen } = props;
		const targetUser = users.find((user) => user.id === id);
		setSelectedUser(targetUser ?? null);
		onOpen();
	}, []);
	return { onSelectedUser, selectedUser };
};

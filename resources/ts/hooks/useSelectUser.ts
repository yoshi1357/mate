import { useCallback, useState } from 'react';
import { type User } from '../types/api/user'

interface Props {
	id: number
	users: User[]
	onOpen: () => void
}

interface UseSelectUserReturn {
  onSelectedUser: (props: Props) => void
  selectedUser: User | null
}

export const useSelectUser = (): UseSelectUserReturn => {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const onSelectedUser = useCallback((props: Props) => {
		const { id, users, onOpen } = props;
		const targetUser = users.find((user) => user.id === id);
		setSelectedUser(targetUser ?? null);
		onOpen();
	}, []);
	return { onSelectedUser, selectedUser };
};

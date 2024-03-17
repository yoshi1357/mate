import { useCallback, useState } from 'react';
import { type User } from '../types/api/user'
import { useShowToastMessage } from './useShowToastMessage';
import axios from 'axios';

interface Props {
	id: number
}

interface UseGetUserReturn {
	getUserById: (props: Props) => Promise<void>
	user: User | null
	isLoading: boolean
}

export const useGetUserById = (): UseGetUserReturn => {
	const [showToast] = useShowToastMessage();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [user, setUser] = useState<User | null>(null);

	const getUserById = useCallback(async (props: Props) => {
		try {
			const { id } = props;
			setIsLoading(true);
			console.log(id);
			const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
			setUser(res.data);
		} catch (e) {
			if (axios.isAxiosError(e) && e.response) {
				// サーバーからのレスポンスがある場合
				console.error('Status:', e.response.status);
				console.error('Data:', e.response.data);
				console.error('Message', e.message);
			} else {
				console.error(e)
			}
			showToast({
				title: 'ユーザーデータの取得に失敗しました',
				status: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	}, []);
	return { getUserById, user, isLoading };
};

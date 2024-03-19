import { useState, useCallback } from 'react';
import axios from 'axios';
import { type User } from '../types/api/user';
import { type CreateUserForm } from '../types/api/createUserForm';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';

interface useCreateUserReturn {
	createUser: (props: CreateUserForm) => void
	isLoading: boolean
	message: string
}

export const useCreateUser = (): useCreateUserReturn => {
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const { showMessage } = useMessage();

	const createUser = useCallback(async (props: CreateUserForm) => {
		// const { name } = props;
		const {
			name,
			email,
			image,
			password,
			password_digest,
			content,
			age,
			sex,
			blood_type,
			height,
			body_shape,
			residence,
			birth_place,
			holiday,
			work,
		} = props;
		setIsLoading(true)
		try {
			const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
			if (res.data) {
				navigate('/users');
				showMessage({ title: '会員作成が完了しました！', status: 'success' });
				setMessage('success');
			} else {
				showMessage({ title: '会員作成が完了できませんでした', status: 'error' });
				setMessage('error');
			}
		} catch (e) {
			if (axios.isAxiosError(e) && e.response) {
				// サーバーからのレスポンスがある場合
				console.error('Status:', e.response.status);
				console.error('Data:', e.response.data);
				console.error('Message', e.message);
			} else {
				console.error(e)
			}
			showMessage({ title: '会員作成が完了できませんでした', status: 'error' });
			setMessage('error');
		} finally {
			setIsLoading(false);
		}
	}, [navigate, showMessage]);

	return { createUser, isLoading, message };
};

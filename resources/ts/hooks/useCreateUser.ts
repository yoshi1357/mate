import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { type User } from '../types/api/user';
import { type CreateUserForm } from '../types/api/createUserForm';
import { useMessage } from './useMessage';

interface useCreateUserReturn {
	createUser: (props: CreateUserForm) => void
	isLoading: boolean
}

export const useCreateUser = (): useCreateUserReturn => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { showMessage } = useMessage();

	const createUser = useCallback(async (props: CreateUserForm) => {
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
			const res = await axios.post<User>(`${import.meta.env.VITE_API_BASE_URI}/users`, {
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
			}, { withCredentials: true });
			console.log()
			if (res.data) {
				navigate('/');
				showMessage({ title: '会員作成が完了しました！', status: 'success' });
			} else {
				showMessage({ title: '会員作成が完了できませんでした', status: 'error' });
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
		} finally {
			setIsLoading(false);
		}
	}, [navigate, showMessage]);

	return { createUser, isLoading };
};

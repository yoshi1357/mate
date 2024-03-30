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
			images,
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
			const formData = new FormData();
			// 文字列や数値のデータをFormDataに追加
			formData.append('name', props.name);
			formData.append('email', props.email);
			formData.append('password', props.password);
			formData.append('password_digest', props.password_digest);
			formData.append('content', props.content);
			formData.append('age', props.age.toString());
			formData.append('sex', props.sex.toString());
			formData.append('blood_type', props.blood_type.toString());
			formData.append('height', props.height.toString());
			formData.append('body_shape', props.body_shape.toString());
			formData.append('residence', props.residence.toString());
			formData.append('birth_place', props.birth_place.toString());
			formData.append('holiday', props.holiday.toString());
			formData.append('work', props.work.toString());

			// File[]型の画像データをFormDataに追加
			props.images.forEach((file, index) => {
				formData.append(`image[${index}]`, file);
			});

			const res = await axios.post<User>(`${import.meta.env.VITE_API_BASE_URI}/users`,
			formData,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'multipart/form-data'
				},
			});
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

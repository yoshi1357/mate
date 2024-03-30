import { useCallback, useState } from 'react';
import { useShowToastMessage } from './useShowToastMessage';
import axios from 'axios';
import { type UserFormDataProvide } from '../types/api/userFormDataProvide';

interface UseUserFormDateProvideReturn {
	getUserFormDateProvide: () => Promise<void>
	userFormDateProvide: UserFormDataProvide
    isLoading: boolean
}

export const useUserFormDateProvide = (): UseUserFormDateProvideReturn => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showToast] = useShowToastMessage();
	const [userFormDateProvide, setUserFormDateProvide] = useState<UserFormDataProvide>({
        blood_type_radios: [],
        sex_radios: [],
        holiday_selects: [],
        body_shape_selects: [],
        work_selects: [],
        residence_selects: [],
    });

	const getUserFormDateProvide = useCallback(async () => {
		try {
            setIsLoading(true);
			const res = await axios.get<UserFormDataProvide>('http://localhost:50080/api/user_form_data_provide');
			setUserFormDateProvide(res.data);
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
				title: 'フォームデータの取得に失敗しました',
				status: 'error',
			});
		} finally {
            setIsLoading(false);
        }
	}, [showToast]);
	return { getUserFormDateProvide, userFormDateProvide, isLoading };
};

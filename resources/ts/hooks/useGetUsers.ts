import { useCallback, useState } from 'react';
import axios from 'axios';

import { type User } from '../types/api/user';
import { useShowToastMessage } from './useShowToastMessage';
import { type UserReturn } from '../types/api/userReturn';

interface UseGetUsersReturn {
  getUsers: () => Promise<void>
  users: UserReturn[]
  isLoading: boolean
}

export const useGetUsers = (): UseGetUsersReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserReturn[]>([]);
  const [showToast] = useShowToastMessage();
  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = `${import.meta.env.VITE_API_BASE_URI}/users`;
      const res = await axios.get<UserReturn[]>(url);
      setUsers(res.data);
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
  return { getUsers, users, isLoading };
};

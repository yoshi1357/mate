import { useState, useCallback } from 'react';
import axios from 'axios';
import { type User } from '../types/api/user';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';

interface Type {
  login: (email: string, password: string) => void
  loading: boolean
}

export const useAuth = (): Type => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await axios.get<User>('https://jsonplaceholder.typicode.com/users/1');
      // テスト用
      // res.data.email = 'Sincere@april.biz'; // 実際の開発ではレスポンスのデータを直接変更するのは避けるべきです
      if (email === res.data.email && password === 'password') {
        navigate('/users');
        showMessage({ title: 'ログインしました', status: 'success' });
      } else {
        showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
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
      showMessage({ title: 'ログインできません', status: 'error' });
    } finally {
      setLoading(false);
    }
  }, [navigate, showMessage]);

  return { login, loading };
};

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
      const response = await axios.post<User>('http://localhost:50080/login', {
          email,
          password,
      }, { withCredentials: true });
      console.log(response.data);
      navigate('/users');
      showMessage({ title: 'ログインしました', status: 'success' });
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

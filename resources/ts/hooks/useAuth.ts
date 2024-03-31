import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import { useSetRecoilState } from 'recoil';

import { type User } from '../types/api/user';
import { useMessage } from './useMessage';
import { MAX_AGE, ADMIN, LOGIN, AUTHORITY, ADMIN_USER_NUMBER } from '../constants/setting';
import { userIdState } from '../recoil/atom';

interface Type {
  login: (email: string, password: string) => void
  loading: boolean
}

interface ResponseUserType {
  user: Pick<User, 'id' | 'name' | 'email' | 'admin'>
}

export const useAuth = (): Type => {
  const [cookies, setCookie, removeCookie] = useCookies(['']);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const setUserId = useSetRecoilState(userIdState);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post<ResponseUserType>(`${import.meta.env.VITE_WEB_BASE_URI}/login`, {
          email,
          password,
      }, { withCredentials: true });
      // フロント認証用のcookieをセット
      if (response.data.user.admin === ADMIN_USER_NUMBER) {
        setCookie(AUTHORITY, ADMIN, { maxAge: MAX_AGE, path: '/' })
      } else {
        setCookie(AUTHORITY, LOGIN, { maxAge: MAX_AGE, path: '/' })
      }
      // ログインユーザーのIDをグローバルにセット
      setUserId(response.data.user.id)

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

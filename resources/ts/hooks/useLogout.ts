import { useState, useCallback } from 'react';
import axios from 'axios';
import { type User } from '../types/api/user';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useCookies } from 'react-cookie'

interface ReturnUseLogout {
    logout: () => Promise<void>
}

export const useLogout = (): ReturnUseLogout => {
    const [cookies, setCookie, removeCookie] = useCookies([import.meta.env.VITE_AUTHORITY]);
    const navigate = useNavigate();
    const { showMessage } = useMessage();

    const logout = useCallback(async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_WEB_BASE_URI}/logout`, {}, 
        { withCredentials: true });
        console.log(response.data);
        removeCookie(import.meta.env.VITE_AUTHORITY)
        navigate('/');
        showMessage({ title: 'ログアウトしました', status: 'success' });
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
          // サーバーからのレスポンスがある場合
          console.error('Status:', e.response.status);
          console.error('Data:', e.response.data);
          console.error('Message', e.message);
        } else {
          console.error(e)
        }
        showMessage({ title: 'ログアウトできませんでした', status: 'error' });
    }
    }, [navigate, showMessage]);

    return { logout };
};

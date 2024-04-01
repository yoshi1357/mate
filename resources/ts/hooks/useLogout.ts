import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import { useSetRecoilState } from 'recoil';

import { useMessage } from './useMessage';
import { AUTHORITY, GENERAL } from '../constants/setting';
import { userIdState } from '../recoil/atom';

interface ReturnUseLogout {
    logout: () => Promise<void>
}

export const useLogout = (): ReturnUseLogout => {
    const [cookies, setCookie, removeCookie] = useCookies(['']);
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const setUserId = useSetRecoilState(userIdState);

    const logout = useCallback(async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_WEB_BASE_URI}/logout`, {},
        { withCredentials: true });
        removeCookie(AUTHORITY);
        setUserId(null);
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

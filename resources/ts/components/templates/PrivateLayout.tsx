import { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AUTHORITY, GENERAL } from '../../constants/setting';

export const PrivateLayout = memo(() => {
    const [cookies] = useCookies([AUTHORITY]);
    const navigate = useNavigate();
    const isLogin = cookies[AUTHORITY]
    ? cookies[AUTHORITY] !== GENERAL
    : false
    useEffect(() => {
        if (!isLogin) {
            navigate('/');
        }
    }, [isLogin, navigate]);
    return <Outlet />
});

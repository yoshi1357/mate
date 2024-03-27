import { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export const PrivateLayout = memo(() => {
    const [cookies] = useCookies([import.meta.env.VITE_AUTHORITY]);
    const navigate = useNavigate();
    const isLogin = cookies[import.meta.env.VITE_AUTHORITY]
    ? cookies[import.meta.env.VITE_AUTHORITY] !== import.meta.env.VITE_GENERAL
    : false
    useEffect(() => {
        if (!isLogin) {
            navigate('/');
        }
    }, [isLogin, navigate]);
    return <Outlet />
});

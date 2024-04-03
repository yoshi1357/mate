import { memo, useEffect } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil';

import { userIdState } from '../../recoil/atom'

export const OnlyMeLayout = memo(function OnlyMeLayout () {
    const navigate = useNavigate();
    const { id } = useParams();
    const userId = useRecoilValue(userIdState);
    const isSameUser = userId === Number(id);
    useEffect(() => {
        // パスパラメータと保存されてるIDが一致しなければリダイレクト
        if (!isSameUser) {
            navigate('users');
        }
    }, [navigate]);
    return <Outlet />
});

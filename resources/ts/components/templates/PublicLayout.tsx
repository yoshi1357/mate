import { memo } from 'react'
import { Outlet } from 'react-router-dom'

export const PublicLayout = memo(() => {
    return <Outlet />;
});

import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom';

export const UserEditPage: FC = memo(function UserEditPage () {
  const { id } = useParams();
  return <div>UserEditPage: id=${id}</div>
})

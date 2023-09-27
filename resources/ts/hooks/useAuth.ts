import { useState, useCallback } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useNavigate } from 'react-router-dom'
import { useMessage } from './useMessage'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showMessage } = useMessage()

  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'ログインしました', status: 'success' })
            navigate('/users')
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
            setLoading(false)
          }
        })
        .catch(() => {
          showMessage({ title: 'ログインできません', status: 'error' })
          setLoading(false)
        })
        .finally(() => {})
    },
    [navigate, showMessage]
  )
  return { login, loading }
}

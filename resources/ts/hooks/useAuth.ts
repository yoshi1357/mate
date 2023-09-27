import { useState, useCallback } from 'react'
import axios from 'axios'
import { type User } from '../types/api/user'
import { useNavigate } from 'react-router-dom'
import { useMessage } from './useMessage'

interface Type {
  login: (id: string) => void
  loading: boolean
}

export const useAuth = (): Type => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showMessage } = useMessage()

  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data !== undefined) {
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

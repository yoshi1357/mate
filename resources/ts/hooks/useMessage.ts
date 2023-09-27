import { useCallback } from 'react'
import { useToast } from '@chakra-ui/react'

interface Props {
  title: string
  status: 'info' | 'warning' | 'success' | 'error' | 'loading'
}

interface Type {
  showMessage: (props: Props) => void
}

export const useMessage = (): Type => {
  const toast = useToast()

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props
      toast({
        position: 'top',
        title,
        status,
        duration: 3000,
        isClosable: true
      })
    },
    [toast]
  )

  return { showMessage }
}

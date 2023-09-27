import { useCallback } from 'react'
import { useToast } from '@chakra-ui/react'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error' | 'loading'
}

export const useMessage = () => {
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

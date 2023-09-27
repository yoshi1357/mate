import React, { memo, type FC, type ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  loading?: boolean
  disabled?: boolean
  onClick: () => void
}

export const PrimaryButton = memo(function PrimaryButton (props: Props): FC {
  const { children, loading = false, disabled = false, onClick } = props

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})

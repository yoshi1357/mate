import React, { memo, type ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  disabled?: boolean
  onClick: () => void
}

export const PrimaryButton = memo(function PrimaryButton (props: Props) {
  const { children, type, loading = false, disabled = false, onClick } = props

  return (
    <Button
      bg="teal.400"
      color="white"
      type={type}
      _hover={{ opacity: 0.8 }}
      isDisabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})

import { type ToastPosition, useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

interface Props {
  title: string
    description?: string
    status: 'info' | 'warning' | 'success' | 'error'
    position?: ToastPosition
    duration?: number
    isClosable?: true
};

export const useShowToastMessage = (): Array<(props: Props) => void> => {
  const toast = useToast();
  const showToast = useCallback(
    (props: Props) => {
      const {
        title,
        description = '',
        status,
        position = 'top',
        duration = 5000,
        isClosable = true,
      } = props;
      toast({
        title,
        description,
        status,
        position,
        duration,
        isClosable,
      });
    },
    [toast]
  );
  return [showToast];
};

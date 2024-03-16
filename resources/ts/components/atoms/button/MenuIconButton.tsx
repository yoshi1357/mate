import React, { memo, type FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

interface Props {
  onOpen: () => void
}

export const MenuIconButton = memo((props: Props): FC => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
});

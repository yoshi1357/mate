import { memo } from 'react';
import { type Link } from '../../types/parts/link'
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean
  onClose: () => void
  links: Link[]
  isLogin: boolean
  doLogout: () => void
}

export const MenuDrawer = memo((props: Props) => {
  const navigation = useNavigate();
  const {
    isOpen,
    onClose,
    links,
    isLogin,
    doLogout
  } = props;
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          {links.map((link) => (
            <Button key={link.path} w="100%" onClick={() => navigation(link.path)}>
              {link.text}
            </Button>
          ))}
          {isLogin && (
            <Button w="100%" onClick={doLogout}>
              ログアウト
            </Button>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

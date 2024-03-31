import { memo } from 'react';
import { type Link as LinkType } from '../../types/parts/link'
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
  links: LinkType[]
  userId: number
  doLogout: () => void
}

export const MenuDrawer = memo((props: Props) => {
  const navigation = useNavigate();
  const {
    isOpen,
    onClose,
    links,
    userId,
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
          <Button w="100%" onClick={() => navigation(`users/${userId}/edit`)}>
            マイページ
          </Button>
          <Button w="100%" onClick={doLogout}>
            ログアウト
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

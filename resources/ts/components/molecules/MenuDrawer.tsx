import { memo, type FC } from 'react';
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
  onClickLogin: () => void
  onClickUsers: () => void
  onClickCommunities: () => void
  onClickMatched: () => void
  onClickCompatibilityTest: () => void
  onClickMypage: () => void
}

export const MenuDrawer = memo((props: Props): FC => {
  const {
    isOpen,
    onClose,
    onClickLogin,
    onClickUsers,
    onClickCommunities,
    onClickMatched,
    onClickMypage,
    onClickCompatibilityTest,
  } = props;
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" onClick={onClickLogin}>
            ログイン
          </Button>
          <Button w="100%" onClick={onClickUsers}>
            会員一覧
          </Button>
          <Button w="100%" onClick={onClickCommunities}>
            コミュニティ一覧
          </Button>
          <Button w="100%" onClick={onClickMatched}>
            マッチング
          </Button>
          <Button w="100%" onClick={onClickCompatibilityTest}>
            相性診断
          </Button>
          <Button w="100%" onClick={onClickMypage}>
            マイページ
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

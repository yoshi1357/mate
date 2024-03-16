import React, { type FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: FC = memo(function Header () {
  const navigation = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickLogin = useCallback(() => navigation('/'), []);
  const onClickUsers = useCallback(() => navigation('users'), []);
  const onClickCommunities = useCallback(() => navigation('communities'), []);
  const onClickMatched = useCallback(() => navigation('matched'), []);
  const onClickCompatibilityTest = useCallback(() => navigation('compatibility_test'), []);
  const onClickMypage = useCallback(() => navigation('mypage'), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading
            as="h1"
            fontSize={{ base: 'md', md: 'lg' }}
            onClick={onClickUsers}
          >
            Mate
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: 'none', md: 'flex' }}
          flexGrow={2}
        >
          <Box pr={4} mr={4}>
            <Link onClick={onClickLogin}>Login</Link>
          </Box>
          <Box pr={4} mr={4}>
            <Link onClick={onClickUsers}>会員一覧</Link>
          </Box>
          <Box pr={4} mr={4}>
            <Link onClick={onClickCommunities}>コミュニティ一覧</Link>
          </Box>
          <Box pr={4} mr={4}>
            <Link onClick={onClickMatched}>マッチング</Link>
          </Box>
          <Box pr={4} mr={4}>
            <Link onClick={onClickCompatibilityTest}>相性診断</Link>
          </Box>
          <Box pr={4} mr={4}>
            <Link onClick={onClickMypage}>マイページ</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickLogin={onClickLogin}
        onClickUsers={onClickUsers}
        onClickCommunities={onClickCommunities}
        onClickMatched={onClickMatched}
        onClickMypage={onClickMypage}
        onClickCompatibilityTest={onClickCompatibilityTest}
      />
    </>
  );
});

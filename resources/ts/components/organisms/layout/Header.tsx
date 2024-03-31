import React, { type FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { useCookies } from 'react-cookie'

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { links } from '../../../parts/Links'
import { useLogout } from '../../../hooks/useLogout'
import { AUTHORITY, GENERAL } from '../../../constants/setting'
import { userIdState } from '../../../recoil/atom'
import { useRecoilValue } from 'recoil';

export const Header: FC = memo(function Header () {
  const userId = useRecoilValue(userIdState);
  const [cookies] = useCookies([AUTHORITY]);
  const navigation = useNavigate();
  const { logout } = useLogout();
  const isLogin = cookies[AUTHORITY]
    ? cookies[AUTHORITY] !== GENERAL
    : false
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickLogout = useCallback(() => {
    const doLogout = async (): Promise<void> => {
      await logout();
    }
    doLogout();
  }, [logout])

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
            onClick={() => navigation('users')}
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
          {links.map((link) => (
            <Box key={link.path} pr={4} mr={4}>
              <Link onClick={() => navigation(link.path)}>{link.text}</Link>
            </Box>
          ))}
          <Box pr={4} mr={4}>
            <Link onClick={() => navigation(`users/${userId}/edit`)}>マイページ</Link>
          </Box>
          <Box pr={4} mr={4}>
            <Button onClick={onClickLogout}>ログアウト</Button>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        links={links}
        userId={userId}
        isLogin={isLogin}
        doLogout={onClickLogout}
      />
    </>
  );
});

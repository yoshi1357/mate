import React, { type FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { useCookies } from 'react-cookie'

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { links } from '../../../parts/Links'
import { useLogout } from '../../../hooks/useLogout'

export const Header: FC = memo(function Header () {
  const [cookies] = useCookies([import.meta.env.VITE_AUTHORITY]);
  const navigation = useNavigate();
  const { logout } = useLogout();
  const isLogin = cookies[import.meta.env.VITE_AUTHORITY]
    ? cookies[import.meta.env.VITE_AUTHORITY] !== import.meta.env.VITE_GENERAL
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
          {isLogin && (
            <Box pr={4} mr={4}>
              <Button onClick={onClickLogout}>ログアウト</Button>
            </Box>
          )}
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        links={links}
        isLogin={isLogin}
        doLogout={onClickLogout}
      />
    </>
  );
});

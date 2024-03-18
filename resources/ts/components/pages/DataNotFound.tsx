import { Center, Heading } from '@chakra-ui/react'
import React, { memo } from 'react'

interface Props {
    children: React.ReactNode
}

export const DataNotFound = memo((props: Props) => {
    const { children } = props;

    return (
        <Center h='100%'>
            <Heading as='h2'>
                {children}
            </Heading>
        </Center>
    )
})

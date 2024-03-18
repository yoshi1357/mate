import { Center, Spinner } from '@chakra-ui/react'
import { memo } from 'react'

export const LoadingPage = memo(() => {
    return (
        <Center h='100%'>
            <Spinner size='lg' />
        </Center>
    )
})

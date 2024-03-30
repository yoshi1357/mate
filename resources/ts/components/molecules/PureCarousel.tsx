import { type FC, useRef } from 'react'
import { Image, Box, AspectRatio, HStack } from '@chakra-ui/react'

export const PureCarousel: FC<{ images: string[] }> = ({ images }) => {
	const ref = useRef<HTMLDivElement>(null)
	const size = 200
	return (
		<HStack alignItems={'stretch'}>
			<HStack bg="gray.100" w={6} justifyContent="center" cursor={'pointer'} onClick={() => {
				if (!ref.current) return
				ref.current.scrollTo({
					left: ref.current.scrollLeft - size,
				})
				// scrollToPosition(currentPosition - 1)
			}}>
				<Box>◀️</Box>
			</HStack>
			<HStack
				scrollBehavior={'smooth'}
				overflowX='scroll'
				ref={ref}
				w={size}
				sx={{
					scrollSnapType: 'x mandatory',
				}}>
				{images.map((img, i) => {
					return <AspectRatio key={i} ratio={1} minW={size} sx={{
						scrollSnapAlign: 'center',
						scrollSnapStop: 'always'
					}}>
						<Image src={img} w={size} draggable={false} userSelect="none" />
					</AspectRatio>
				})}
			</HStack>
			<HStack bg="gray.100" w={6} justifyContent="center" cursor={'pointer'}
				onClick={() => {
					if (!ref.current) return
					ref.current.scrollTo({
						left: ref.current.scrollLeft + size,
					})
				}}>
				<Box>
					▶️
				</Box>
			</HStack>
		</HStack>
	)
}

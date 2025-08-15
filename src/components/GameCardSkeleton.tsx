import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
	return (
		<Card.Root borderRadius={10} overflow="hidden" boxShadow="lg" margin={3}>
			<Skeleton height="270px" />
			<Card.Body>
			<SkeletonText />
			</Card.Body>
		</Card.Root>
	)
}

export default GameCardSkeleton
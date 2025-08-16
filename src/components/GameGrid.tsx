import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'
// import type { Genre } from '../hooks/useGenres'
// import type { Platform } from '../hooks/usePlatforms'
import type { GameQuery } from '../App'
interface Props {
	gameQuery: GameQuery;
	// selectedGenre: Genre | null;
	// selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

  return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
				{isLoading && skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
				{!isLoading && data.length === 0 && <Text>No games found</Text>}
			</SimpleGrid>
		</>
  )
}

export default GameGrid
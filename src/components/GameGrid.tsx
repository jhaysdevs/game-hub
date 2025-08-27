import { SimpleGrid, Text } from '@chakra-ui/react'

import type { GameQuery } from '../App'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  if (error) return <Text marginY={5}>{error}</Text>

  return (
    <SimpleGrid marginX={-3} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
      {!isLoading && data.length === 0 && <Text marginY={5}>No games found</Text>}
    </SimpleGrid>
  )
}

export default GameGrid

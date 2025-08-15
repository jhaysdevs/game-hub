import { Card, Heading, Image, Text } from '@chakra-ui/react';
import type { Game } from '../hooks/useGames'

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" boxShadow="lg" margin={3}>
			<Image src={game.background_image} />
			<Card.Body>
				<Heading fontSize="2xl">{game.name}</Heading>
				<Text>{game.metacritic}</Text>
			</Card.Body>
		</Card.Root>
  )
}

export default GameCard
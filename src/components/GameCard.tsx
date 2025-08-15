import { Card, Heading, Image, HStack } from '@chakra-ui/react';
import type { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root borderRadius={10} overflow="hidden" boxShadow="lg" margin={3}>
			<Image src={game.background_image} />
			<Card.Body>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justifyContent="space-between" marginBottom={2}>
					<PlatformIconList platforms={game.parent_platforms.map((p: any) => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</Card.Body>
		</Card.Root>
	);
}

export default GameCard
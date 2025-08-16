import { Card, Heading, Image, HStack } from '@chakra-ui/react';
import type { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root height="100%">
			<Image src={getCroppedImageUrl(game.background_image)} />
			<Card.Body display="flex" flexDirection="column" justifyContent="space-between">
				<Heading fontSize="1xl">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList platforms={game.parent_platforms.map((p: any) => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</Card.Body>
		</Card.Root>
	);
}

export default GameCard
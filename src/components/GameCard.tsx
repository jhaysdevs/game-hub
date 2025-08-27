import { Card, HStack, Heading, Image } from '@chakra-ui/react'

import type { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root height='100%'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body display='flex' flexDirection='column' justifyContent='space-between'>
        <Heading fontSize='1xl'>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map((p: any) => p.platform)} />
        <HStack justifyContent='space-between' marginTop={3}>
          <Emoji rating={game.rating_top} />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard

import type { GameQuery } from '@/App'

import useData from './useData'

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  parent_platforms: { platform: Platform }[]
  id: number
  name: string
  slug: string
  metacritic: number
  rating_top: number
  background_image: string
  platforms: { platform: Platform }[]
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  )

export default useGames

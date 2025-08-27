import {
  Box,
  Button,
  Icon,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Spinner,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

import useGenres, { type Genre } from '../hooks/useGenres'

interface Props {
  selectedGenre: Genre | null
  onSelectGenre: (genre: Genre) => void
}

const GenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()
  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <MenuRoot>
      <Box position='relative'>
        <MenuTrigger asChild>
          <Button variant='subtle'>
            {selectedGenre?.name || 'Genres'}
            <Icon as={BsChevronDown} ml={2} />
          </Button>
        </MenuTrigger>
        <MenuContent position='absolute'>
          {data.map((genre) => (
            <MenuItem key={genre.id} value={genre.slug} onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </MenuItem>
          ))}
        </MenuContent>
      </Box>
    </MenuRoot>
  )
}

export default GenreSelector

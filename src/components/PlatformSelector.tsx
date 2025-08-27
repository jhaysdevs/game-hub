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

import usePlatforms, { type Platform } from '../hooks/usePlatforms'

interface Props {
  selectedPlatform: Platform | null
  onSelectPlatform: (platform: Platform) => void
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, isLoading, error } = usePlatforms()
  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <MenuRoot>
      <Box position='relative'>
        <MenuTrigger asChild>
          <Button variant='subtle'>
            {selectedPlatform?.name || 'Platforms'}
            <Icon as={BsChevronDown} ml={2} />
          </Button>
        </MenuTrigger>
        <MenuContent position='absolute'>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => onSelectPlatform(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </Box>
    </MenuRoot>
  )
}

export default PlatformSelector

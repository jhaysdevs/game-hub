import { HStack } from '@chakra-ui/react'

import ColorModeSwitch from './ColorModeSwitch'
import Logo from './Logo'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <a href='/'>
        <Logo width='100px' />
      </a>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar

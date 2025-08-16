import { Icon, Input, InputGroup, InputElement, HStack } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
		<InputGroup>
			<HStack width="100%">
				<InputElement children={<Icon as={BsSearch} />} />
				<Input paddingLeft={10} borderRadius={20} placeholder="Search games..." variant="subtle" />
			</HStack>
		</InputGroup>
  )
}

export default SearchInput
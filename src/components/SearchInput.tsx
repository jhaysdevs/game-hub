import { Icon, Input, InputGroup, InputElement, HStack } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { useRef } from 'react';

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

  return (
		<form onSubmit={(event) => {
			event.preventDefault();
			if (ref.current) onSearch(ref.current.value);
		}}>
			<InputGroup>
				<HStack width="100%">
					<InputElement children={<Icon as={BsSearch} />} />
					<Input ref={ref} paddingLeft={10} borderRadius={20} placeholder="Search games..." variant="subtle" />
				</HStack>
			</InputGroup>
		</form>
  )
}

export default SearchInput
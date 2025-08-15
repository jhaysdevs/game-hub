import { Box } from '@chakra-ui/react'

interface Props {
	children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" boxShadow="lg" margin={3}>
			{children}
		</Box>
  )
}

export default GameCardContainer
import { Icon } from '@chakra-ui/react'
import { FaFaceMeh, FaFaceFrownOpen, FaFaceSmile } from 'react-icons/fa6'
import type { IconType } from 'react-icons/lib'
interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	let color = 'red.500';
	if (rating === 4) color = 'yellow.500';
	if (rating === 5) color = 'green.500';

	const emojiMap: { [key: number]: IconType } = {
		3: FaFaceFrownOpen,
		4: FaFaceMeh,
		5: FaFaceSmile
	}

	return (
		<Icon as={emojiMap[rating]} color={color} key={rating}></Icon>
	)
}

export default Emoji
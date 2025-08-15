import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Icon, HStack } from '@chakra-ui/react'
import type { IconType } from 'react-icons/lib'
import type { Platform } from '../hooks/useGames'

interface Props {
	platforms: Platform[];	
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe
	}

  return (
		<HStack marginY={2}>
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id}></Icon>
			))}
		</HStack>
  )
}

export default PlatformIconList
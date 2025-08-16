import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo, SiSega } from 'react-icons/si'
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
		playstation5: FaPlaystation,
		playstation4: FaPlaystation,
		playstation3: FaPlaystation,
		playstation2: FaPlaystation,
		playstation1: FaPlaystation,
		'ps-vita': FaPlaystation,
		psp: FaPlaystation,
		xbox: FaXbox,
		'xbox-one': FaXbox,
		'xbox-series-x': FaXbox,
		xbox360: FaXbox,
		'xbox-old': FaXbox,
		ios: MdPhoneIphone,
		android: FaAndroid,
		mac: FaApple,
		macos: FaApple,
		macintosh: FaApple,
		'apple-ii': FaApple,
		nintendo: SiNintendo,
		'nintendo-switch': SiNintendo,
		'nintendo-3ds': SiNintendo,
		'nintendo-ds': SiNintendo,
		'nintendo-dsi': SiNintendo,
		'wii-u': SiNintendo,
		wii: SiNintendo,
		gamecube: SiNintendo,
		'nintendo-64': SiNintendo,
		'game-boy-advance': SiNintendo,
		'game-boy-color': SiNintendo,
		'game-boy': SiNintendo,
		snes: SiNintendo,
		nes: SiNintendo,
		linux: FaLinux,
		sega: SiSega,
		genesis: SiSega,
		'sega-saturn': SiSega,
		'sega-cd': SiSega,
		'sega-32x': SiSega,
		'sega-master-system': SiSega,
		dreamcast: SiSega,
		'game-gear': SiSega,
		web: BsGlobe,
		'apple-macintosh': FaApple,
		'commodore-amiga': FaLinux,
		'neo-geo': FaWindows,
		'3do': FaWindows,
		neogeo: FaWindows
	}

  return (
		<HStack marginY={2}>
			{platforms.map((platform) => {
				const IconComponent = iconMap[platform.slug];
				return IconComponent ? (
					<Icon as={IconComponent} color="gray.500" key={platform.id}></Icon>
				) : null;
			})}
		</HStack>
  )
}

export default PlatformIconList
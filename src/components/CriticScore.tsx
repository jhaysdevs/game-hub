import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  const getBadgeStyle = () => {
    if (score > 75) {
      return {
        colorPalette: 'green',
        bg: 'green.500',
        color: 'white',
      }
    } else if (score > 60) {
      return {
        colorPalette: 'yellow',
        bg: 'yellow.500',
        color: 'black',
      }
    } else {
      return {
        colorPalette: 'red',
        bg: 'red.500',
        color: 'white',
      }
    }
  }

  return (
    <Badge {...getBadgeStyle()} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  )
}

export default CriticScore

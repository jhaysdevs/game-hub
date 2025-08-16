import useGenres, { type Genre } from '@/hooks/useGenres';
import { List, HStack, Image, Spinner, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '@/services/image-url';
interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	if (isLoading) return <Spinner />;
	
  return (
    <List.Root>
			{data.map((genre) => (
				<List.Item key={genre.id} paddingY="5px" listStyleType="none">
					<HStack>
						<Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
						<Button
							as="a"
							onClick={() => onSelectGenre(genre)}
							// href={`/genres/${genre.id}`}
							variant="plain"
							fontSize="lg"
						>
							{genre.name}
						</Button>
					</HStack>
				</List.Item>
			))}
		</List.Root>
  )
}

export default GenreList
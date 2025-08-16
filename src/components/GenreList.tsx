import useGenres, { type Genre } from '@/hooks/useGenres';
import { List, HStack, Image, Spinner, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '@/services/image-url';
interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres(selectedGenre);
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
							variant="plain"
							fontSize="lg"
							fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
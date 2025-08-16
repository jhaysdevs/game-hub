import useGenres, { type Genre } from '@/hooks/useGenres';
import { List, HStack, Image, Spinner, Button, Heading } from '@chakra-ui/react';
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
			<Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
			{data.map((genre) => (
				<List.Item key={genre.id} paddingY="5px" listStyleType="none">
					<HStack>
						<Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} objectFit="cover" />
						<Button
							as="a"
							onClick={() => onSelectGenre(genre)}
							variant="plain"
							fontSize="lg"
							fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
							whiteSpace="normal"
							textAlign="left"
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
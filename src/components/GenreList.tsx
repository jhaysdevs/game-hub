import useGenres from '@/hooks/useGenres';
import { List, HStack, Image, Text, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '@/services/image-url';

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	if (isLoading) return <Spinner />;
	
  return (
    <List.Root>
			{data.map((genre) => (
				<List.Item key={genre.id} paddingY="5px" listStyleType="none">
					<HStack>
						<Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</List.Item>
			))}
		</List.Root>
  )
}

export default GenreList
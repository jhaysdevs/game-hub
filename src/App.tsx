import { useState } from "react";
import { Grid, GridItem, Box, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleSearch = (searchText: string) => {
    console.log("Search:", searchText);
  };

  return (
    <Grid
      bg={isDark ? "#1B202A" : "#efefef"}
      templateAreas={
        isLargeScreen
          ? `"nav nav" "aside main"`
          : `"nav" "main"`
      }
      templateColumns={
        isLargeScreen
          ? "250px 1fr"
          : "1fr"
      }
      minH="100vh"
    >
      <GridItem area="nav">
        <NavBar onSearch={handleSearch} />
      </GridItem>
      {isLargeScreen && (
        <GridItem area="aside" p={4}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      )}
      <GridItem area="main" p={4}>
        <Box>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;

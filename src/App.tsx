import { useState } from "react";
import { Grid, GridItem, Box, useBreakpointValue, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import GenreSelector from "./components/GenreSelector";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import "./index.css";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      {isLargeScreen && (
        <GridItem area="aside" p={4}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      )}
      <GridItem area="main" p={4}>
        <GameHeading gameQuery={gameQuery} />
        <HStack>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          {!isLargeScreen && (
            <GenreSelector selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          )}
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <Box>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;

import { Grid, GridItem, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const Layout = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const handleSearch = (searchText: string) => {
    console.log("Search:", searchText);
  };

  return (
    <Grid
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
          <GenreList />
        </GridItem>
      )}
      <GridItem area="main" bg={isDark ? "#202020" : "#dedede"} p={4}>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Games
          </Text>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

function App() {
  return <Layout />;
}

export default App;

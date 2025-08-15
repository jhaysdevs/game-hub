import { Grid, GridItem, Text, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";

const Layout = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleSearch = (searchText: string) => {
    console.log("Search:", searchText);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      minH="100vh"
    >
      <GridItem area="nav">
        <NavBar onSearch={handleSearch} />
      </GridItem>
      <GridItem
        area="aside"
        bg="gold"
        display={{ base: "none", lg: "block" }}
        p={4}
      >
        <Text>Sidebar Content</Text>
      </GridItem>
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

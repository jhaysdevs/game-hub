import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
// import logo from "../assets/logo.svg";
import Logo from "./Logo";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      {/* <Image src={logo} boxSize="60px" /> */}
      <Logo width="100px" />
      <Spacer />
      <Text fontWeight="bold">Game Hub</Text>
      <Spacer />
      {/* <SearchInput onSearch={onSearch} /> */}
      <ColorModeSwitch />
      {/* <Button variant="outline" onClick={toggleColorMode}>
        <ColorModeIcon />
      </Button> */}
    </HStack>
  );
};

export default NavBar;

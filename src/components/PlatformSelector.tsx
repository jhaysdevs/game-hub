import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, isLoading, error } = usePlatforms();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle">
          Platform
          <Icon as={BsChevronDown} ml={2} />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.slug}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;

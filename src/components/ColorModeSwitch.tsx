import { HStack, Switch, Button } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <HStack>
      <Switch.Root
        checked={isDark}
        onCheckedChange={toggleColorMode}
      >
        <Switch.Control onClick={toggleColorMode}>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>{isDark ? "Dark" : "Light"} Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;

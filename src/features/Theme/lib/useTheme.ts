import { useColorMode } from '@chakra-ui/react';

export const useTheme = () => {
  const { setColorMode, colorMode } = useColorMode();

  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return { toggleTheme, theme: colorMode };
};

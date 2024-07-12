import { Button } from '@chakra-ui/react';
import { useTheme } from '../lib/useTheme';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const Theme = () => {
  const { toggleTheme, theme } = useTheme();

  const icon = theme === 'light' ? <MoonIcon /> : <SunIcon />;

  return <Button onClick={toggleTheme}>{icon}</Button>;
};

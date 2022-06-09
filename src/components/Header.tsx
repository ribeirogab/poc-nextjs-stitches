import { useTheme } from 'next-themes';

import { styled } from '../stitches.config';

const Button = styled('button', {});

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <Button onClick={toggleTheme}>Change Theme</Button>
    </>
  );
};

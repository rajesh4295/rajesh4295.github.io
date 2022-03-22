import React from 'react';
import styles from '@styles/Header.module.scss';
import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '@utility';
import { ThemeMode } from '@models';
import { DarkMode, LightMode } from '@mui/icons-material';

export const Header = () => {
  const {theme, switchTheme} = useContext(AppContext);

  const handleSwitchTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switchTheme(theme.palette.mode === "dark" ? ThemeMode.LIGHT : ThemeMode.DARK);
  }
  return (
    <Box className={styles.header}>
        <Box className={styles.themeSwitch}>
              <Button onClick={handleSwitchTheme}>{theme.palette.mode === "dark" ? <LightMode color='action' /> : <DarkMode color='action' />}</Button>
        </Box>
    </Box>
  )
}

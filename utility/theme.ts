import { IThemeColors, ThemeMode } from "@models";
import { createTheme, Theme } from "@mui/material/styles";
import colors from '@styles/themeColors.module.scss';

export function getTheme(mode: ThemeMode): Theme {
    const colors = getColors(mode);

    return createTheme({
        palette: { 
            mode,
            primary: {
                main: colors.primary
            },
            secondary: {
                main: colors.secondary
            },
            text: {
                primary: colors.text,
                secondary: colors.accent
            },
            background: {
                paper: colors.background,
                default: colors.background
            }
        }
    });
}

export function getColors(mode: ThemeMode): IThemeColors {
    return {
        primary: mode === ThemeMode.LIGHT ? colors.primaryLight : colors.primaryDark,
        secondary: mode === ThemeMode.LIGHT ? colors.secondaryLight : colors.secondaryDark,
        background: mode === ThemeMode.LIGHT ? colors.backgroundLight : colors.backgroundDark,
        text: mode === ThemeMode.LIGHT ? colors.textLight : colors.textDark,
        accent: mode === ThemeMode.LIGHT ? colors.accentLight : colors.accentDark
    }
}

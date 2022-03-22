import React, { createContext, useReducer } from 'react';
import { IAppState, IAppStateAction, ActionType, ThemeMode, IAppContextProps } from '@models';
import { getTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

const initialState: IAppState =  {
    theme: getTheme(ThemeMode.LIGHT),
    switchTheme: () => {}
}


const appStateReducer = (state: IAppState, action: IAppStateAction): IAppState => {
    switch (action.type) {
        case ActionType.THEME_SWITCH:
            return {...state, theme: getTheme(action.data)};
        default: 
            return state;
    }
}
    
export const AppContext = createContext<IAppState>(initialState);
export const AppContextProvider = ({children}: IAppContextProps) => {
    const [appState, dispatch] = useReducer(appStateReducer, initialState);

    const switchTheme = (mode: ThemeMode) => {
        dispatch({type: ActionType.THEME_SWITCH, data: mode});
    }

    appState.switchTheme = switchTheme;

    return (
        <AppContext.Provider value={appState}>
            <ThemeProvider theme={appState.theme}>
                <CssBaseline />
                { children }
            </ThemeProvider>
        </AppContext.Provider>
    )
}

import React, {useContext} from 'react';
import {AppContext, profileData } from '@utility';
import { Box } from '@mui/system';
import styles from '@styles/Summary.module.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const Summary = () => {
  const { theme } = useContext(AppContext);

  return (
      <Box className={styles.summary}>
          <List>
            {
                profileData.summary?.map((summary: string, index: number) =>
                //  (<Box className={styles.card} sx={{borderLeft: '5px solid', borderColor: theme.palette.text.secondary, background: theme.palette.primary.main}} key={index}>
                <ListItem key={index}>
                    <ListItemIcon>
                        <StarOutline />
                    </ListItemIcon>
                    <ListItemText>
                    {summary}
                    </ListItemText>
                </ListItem>    
                    // </Box>)
                )
            }

          </List>
      </Box>
  );
}

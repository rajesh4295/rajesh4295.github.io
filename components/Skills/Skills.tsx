import React, { ReactNode, useContext } from 'react';
import {AppContext, profileData} from '@utility';
import styles from '@styles/Skills.module.scss';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { DirectionsRun, DirectionsWalk, Elderly, Skateboarding } from '@mui/icons-material';
import { skillLevel } from '@models';

export const Skills = () => {
  const { theme } = useContext(AppContext);
  const isSmall = useMediaQuery('(max-width: 760px)');
  console.log(isSmall)

  const renderSkills = (level: skillLevel, icon: ReactNode) => {
    return <Box className={styles.category}>
      <Box className={styles.title} sx={{color: theme.palette.secondary.main}}>{level.toUpperCase()}</Box>
        <List>
        {
          profileData.skills?.professional?.filter(skill => skill.level === level).map((skill, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemIcon>
                 {icon}
                </ListItemIcon>
                <ListItemText className={styles.item}>
                  {skill.name}
                </ListItemText>
              </ListItem>
            )
          })
        }
        </List>
    </Box>
  }

  return (
    <Box className={styles.skills}>
      {renderSkills('advanced',  <Skateboarding />)}
      <Divider orientation={isSmall ? 'horizontal' : 'vertical'} flexItem />
      {renderSkills('competent', <DirectionsRun />)}
      <Divider orientation={isSmall ? 'horizontal' : 'vertical'} flexItem />
      {renderSkills('moderate', <DirectionsWalk />)}
      <Divider orientation={isSmall ? 'horizontal' : 'vertical'} flexItem />
      {renderSkills('learning', <Elderly />)}
    </Box>
  )
}

import React, { ReactNode, useContext } from 'react';
import {AppContext, profileData} from '@utility';
import styles from '@styles/Skills.module.scss';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { DirectionsRun, DirectionsWalk, Elderly, Memory, Skateboarding } from '@mui/icons-material';
import { ISkills, skillLevel, skillType } from '@models';

type Level = skillLevel | skillType;

export const Skills = () => {
  const { theme } = useContext(AppContext);
  const isSmall = useMediaQuery('(max-width: 760px)');

  const renderSkills = (level?: skillLevel, type?: skillType, icon?: ReactNode) => {
    let skills: ISkills[] = [];
    if (level) {
      skills = profileData.skills?.filter(skill => skill?.level === level) || [];
    } else if (type) {
      skills = profileData.skills?.filter(skill => skill?.type === type) || [];
    }

    return <Box className={styles.category}>
      <Box className={styles.title} sx={{color: theme.palette.secondary.main}}>{level?.toUpperCase() || type?.toUpperCase()}</Box>
        <List>
        {
          skills?.filter(skill => skill?.level === level).map((skill, index) => {
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
      {renderSkills('advanced', undefined, <Skateboarding />)}
      <Divider orientation={isSmall ? 'horizontal' : 'vertical'} flexItem />
      {renderSkills('competent', undefined, <DirectionsRun />)}
      <Divider orientation={isSmall ? 'horizontal' : 'vertical'} flexItem />
      {renderSkills('moderate', undefined, <DirectionsWalk />)}
      <Divider orientation={isSmall ? 'horizontal' : 'vertical'} flexItem />
      {renderSkills('learning', undefined, <Elderly />)}
      <Divider orientation={isSmall ? 'horizontal' : 'vertical'} flexItem />
      {renderSkills(undefined, 'soft', <Memory />)}
    </Box>
  )
}

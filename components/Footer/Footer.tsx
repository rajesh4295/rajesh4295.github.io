import { Box } from '@mui/material'
import React from 'react';
import {AppContext, profileData} from '@utility';
import styles from '@styles/Footer.module.scss';
import { FavoriteRounded, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { useContext } from 'react';

export const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <Box className={styles.footer}>
        <Box className={styles.note} sx={{color: theme.palette.secondary.main}}>
          Have a project in mind? Let's connect.
        </Box>
        <Box className={styles.social}>
          <a className={styles.link} target='_blank' href={profileData.social?.linkedin}><LinkedIn /></a>
          <a className={styles.link} target='_blank' href={profileData.social?.github}><GitHub /></a>
          <a className={styles.link} target='_blank' href={profileData.social?.twitter}><Twitter /></a>
        </Box>
        <Box className={styles.copy} sx={{color: theme.palette.secondary.main}}>
            Made with <FavoriteRounded fontSize='small' sx={{color: theme.palette.text.secondary}} /> by {profileData.personal?.name}. All rights reserved 2022.
        </Box>
    </Box>
  )
}

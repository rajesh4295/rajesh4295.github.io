import { Box, Divider, Button } from '@mui/material';
import React, { useContext } from 'react';
import styles from '@styles/PersonalDetails.module.scss';
import { AppContext, profileData } from '@utility';

export const PersonalDetails = () => {
  const { theme } = useContext(AppContext);

  return (
    <Box className={styles.details}>
        <Box className={styles.image}>
            <img alt="profile_pic" className={styles.pic} src='/images/profilepic.jpeg' />
        </Box>
        <Box className={styles.detailsContainer}>
          <Box className={styles.nameContainer}>
            <Box className={styles.name} sx={{color: theme.palette.text.secondary}}>
                {profileData.personal?.name}
            </Box>
            <Box className={styles.title} sx={{color: theme.palette.secondary.main}}>
                {profileData.personal?.title}
            </Box>
            <Button className={styles.resumeBtn} color='inherit' variant='outlined'>Download Resume</Button>
          </Box>
          <Divider orientation='vertical' flexItem />
          <Box className={styles.exp}><span className={styles.expNum}>{profileData.personal?.experience}</span> YOE</Box>
        </Box>
    </Box>
  )
}

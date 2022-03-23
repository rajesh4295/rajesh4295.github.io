import React from 'react';
import styles from '@styles/Experience.module.scss';
import { profileData } from '@utility';
import { Box, Card, CardHeader, CardContent, Chip } from '@mui/material';

export const Education = () => {
  return (
    <Box className={styles.experience}>
    {
      profileData?.education?.map((edu, index) => {
        return <Card key={index} className={styles.card}>
        <CardHeader className={styles.header} titleTypographyProps={{fontWeight: '900'}} title={edu.degree + ' [ ' + edu.specialization + ' ] '} subheader={edu.board}>
        </CardHeader>
        <CardContent className={styles.content}>
          <Box className={styles.project}>
            <Box className={styles.head}>
              <Box className={styles.name}>{edu.college} - {edu.place}</Box>
              <Box className={styles.year}>{edu.startYear} - {edu.endYear || 'Present'}</Box>
            </Box>
            <Chip className={styles.tools} variant='filled' key={index} label={edu.grade} />
          </Box>
        </CardContent>
        </Card>
      })
    }
    </Box>
  )
}

import { Box, Card, CardHeader, CardContent, Divider, List, ListItem, ListItemIcon, Chip } from '@mui/material'
import React from 'react';
import { profileData } from '@utility';
import { IJobHistory, IProject } from '@models';
import styles from '@styles/Experience.module.scss';
import { StarBorder } from '@mui/icons-material';

export const Experience = () => {

  return (
    <Box className={styles.experience}>
      {
        profileData?.jobHistory?.map((job, index) => {
          return <Card key={index} className={styles.card}>
              <CardHeader className={styles.header} title={job.companyName} subheader={job.role}>
              </CardHeader>
              <CardContent className={styles.content}>
                {
                  job?.project?.map((proj, i) => {
                    return (
                      <Box className={styles.project} key={i}>
                          <Box className={styles.head}>
                            <Box className={styles.name}>{proj.name}</Box>
                            <Box className={styles.year}>{proj.startMonth} {proj.startYear} - {proj.endMonth} {proj.endYear || 'Present'}</Box>
                          </Box>
                          <Box className={styles.desc}>{proj.description}</Box>
                          <List className={styles.resp}>
                            {
                              proj?.responsibilities?.map((resp, index) => {
                                return <ListItem key={index} disablePadding>
                                    <ListItemIcon>
                                      <StarBorder fontSize='small' />
                                    </ListItemIcon>
                                    {resp}
                                  </ListItem>
                              })
                            }
                            {
                              proj?.tools?.map((tool, index) => {
                                return <Chip className={styles.tools} variant='outlined' key={index} label={tool} />
                              })
                            }
                          </List>
                      {job?.project?.length - 1 !== i && <Divider orientation='horizontal' flexItem sx={{marginTop: '20px'}} />}
                      </Box>
                    )
                  })
                }
              </CardContent>
            </Card>
        })
      }
    </Box>
  )
}

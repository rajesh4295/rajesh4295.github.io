import React, {useContext, useState} from 'react'
import { PersonalDetails, Header, Footer, Summary, Skills, Experience, Education } from '@components';
import styles from '@styles/Layout.module.scss';
import {IAccordian} from '@models';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { AppContext } from '@utility';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';


export const Layout = () => {

  const { theme } = useContext(AppContext);

  const layoutData: IAccordian = {
    layout: [
      {
        title: "Skills",
        content: <Skills />,
        panelId: "panel1"
      },
      {
        title: "Summary",
        content: <Summary />,
        panelId: "panel2"
      },
      {
        title: "Experience",
        content: <Experience />,
        panelId: "panel3"
      },
      {
        title: "Education",
        content: <Education />,
        panelId: "panel4"
      }
    ]
  };
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={styles.layout}>
        <Box className={styles.container}>
            <Header />
            <PersonalDetails />
            {
              layoutData.layout.map((section, index) => {
                return  <Accordion className={styles.section} key={index} expanded={expanded === section.panelId} onChange={handleChange(section.panelId)} >
                    <AccordionSummary className={styles.sectionSummary} aria-controls={`${section.panelId}-content`} id={`${section.panelId}-header`}>
                      <Typography className={styles.sectionTitle} sx={{color: theme.palette.secondary.main}}>{section.title}</Typography>
                      {expanded === section.panelId ? 
                        <ArrowDropUp fontSize='large' className={[styles.sectionArrow, styles[`sectionArrow${theme.palette.mode === "dark" ? '--dark' : '--light'}`]].join(' ')} />
                        :
                        <ArrowDropDown fontSize='large' className={[styles.sectionArrow, styles[`sectionArrow${theme.palette.mode === "dark" ? '--dark' : '--light'}`]].join(' ')} />
                      }
                    </AccordionSummary>
                    <AccordionDetails>
                        {section.content}
                    </AccordionDetails>
                </Accordion>
              })
            }
            <Footer />
        </Box>
    </Box>
  )
}

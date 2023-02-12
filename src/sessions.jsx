import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  
    



export default function Sessions(){

    return(
        <Container>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>

        </Container>
        
    )
}
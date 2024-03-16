import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Info from '../Info';
import Security from '../Security';

// ----------------------------------------------------------------------

export default function ProfileView() {
  const [value, setValue] = useState('INFO');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Profile
      </Typography>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="INFO" value="INFO" />
              <Tab label="SECURITY" value="SECURITY" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
        </TabContext>
      </Box>

      {value === 'INFO' && <Info />}
      {value === 'SECURITY' && <Security />}
    </Container>
  );
}

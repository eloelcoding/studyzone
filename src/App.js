import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { List, ListItem, ListItemText, Divider, Container } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Study Zone
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Photos" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Definitions" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Explanations" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Live Chat" />
          </ListItem>
        </List>
      </Box>

      <Container maxWidth="md">
        <Paper style={{ padding: '20px', marginTop: '20px' }} elevation={3}>
          <Typography variant="h5">@Emily56:</Typography>
          <Typography variant="body1">Can someone explain how photosynthesis works?</Typography>
        </Paper>

        <Paper style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f0f0f0' }} elevation={1}>
          <Typography variant="h6">John725:</Typography>
          <Typography variant="body1">It turns sunlight...</Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default App;

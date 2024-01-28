import React from 'react';
import { AppBar, Toolbar, Typography, Box, Paper, Container, List, ListItem, Button } from '@mui/material';

import { posts } from './mock_data/posts'

function App() {
  // alert(posts)
  console.log(posts)
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Study Zone
          </Typography>
          {/* Class Selections */}
          <Box>
            {['Honors Biology', 'Geometry', 'Pre-Modern History'].map((subject) => (
              <Button key={subject} color="inherit">{subject}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Major Categories/Channels */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        {['Photos', 'Definitions', 'Explanations', 'Live Chat'].map((category) => (
          <Button key={category} variant="contained" sx={{ mx: 1, py: 1.5, px: 3, fontSize: '1.2rem' }}>
            {category}
          </Button>
        ))}
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', mt: 2 }}>
          {/* Main content area */}
          <Box sx={{ flex: 1, pr: 2 }}>
            <Paper sx={{ p: 2 }} elevation={3}>
              <Typography variant="h5">@Emily56:</Typography>
              <Typography variant="body1">Can someone explain how photosynthesis works?</Typography>
              {/* Nested Comment */}
              <Box sx={{ pl: 2, pt: 1 }}>
                <Paper sx={{ p: 1.5, mt: 1, bgcolor: 'action.hover' }} elevation={1}>
                  <Typography variant="subtitle1">John725:</Typography>
                  <Typography variant="body2">It turns sunlight...</Typography>
                </Paper>
              </Box>
            </Paper>
          </Box>

          {/* Unit Selections */}
          <Box sx={{ width: '200px' }}>
            <List>
              {['Unit 5', 'Unit 4', 'Unit 3', 'Unit 2', 'Unit 1'].map((unit, index) => (
                <ListItem key={unit} button>
                  <Button fullWidth variant={index === 0 ? "contained" : "text"}>{unit}</Button>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;

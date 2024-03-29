import React from 'react';
import { AppBar, Toolbar, Typography, Box, Paper, Container, List, ListItem, Button   } from '@mui/material';
import { get_courses, get_posts, get_categories} from './mock_data'
import TextareaAutosize from '@mui/material/TextareaAutosize';

var _id = 110;

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState('Explanations');
  const [ posts, setPosts ] = React.useState(get_posts())
  function handleCategorySelect(category) { setSelectedCategory(category)}

  // State to track the selected category
  const courses = get_courses();
  const categories = get_categories();
  var currentUser = "joeliologist";

  
  // Group posts and their comments together
  const postsWithComments = posts.map(post => {
    if (post.parent_id) return;

    return {
        ...post,
        comments: posts.filter(comment => comment.parent_id === post.id)
      };
    }
  ).filter(post => post != null)
  .filter(post => post.post_type == selectedCategory.toLowerCase())
  .reverse();

  console.log(postsWithComments);

  // Function to handle text input changes
  const handleTextChange = (event, id) => {
    // const newText = event.target.value;
    // setText(newText);
  };

  // Function to handle Enter key press
  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter') {
      // Call your custom function when Enter key is pressed
      // You can replace this with your desired logic
      // For example, trigger an API call, update state, etc.

      var post_type = selectedCategory.toLowerCase();
      var new_post = {'id': _id++, 'author': currentUser, 'content': event.target.value, parent_id: id, post_type };
      event.target.value = ""
      setPosts((prevList) => [...prevList, new_post]);
      event.preventDefault();
      // handleFunction(text);
    }
  };

  const textareaStyle = {
    width: '300px', // Adjust the width as needed
  };


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Study Zone
          </Typography>
          {/* Course Selections */}
          <Box>
            {courses.map((course) => (
              <Button key={course} color="inherit">
                {course}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Major Categories/Channels */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            sx={{ mx: 1, py: 1.5, px: 3, fontSize: '1.2rem' }}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: 2 }}>
        {/* <Box sx={{  mt: 2 }}> */}
          {/* Main content area */}

          <div style={{ overflowY: 'auto', maxHeight: '80vh', width: '100%' }}>
          <Box sx={{ flex: 1, pr: 2 }}>
          <Paper sx={{ p: 2 }} elevation={3}>
          Post new {selectedCategory.toLowerCase()}: 
          <TextareaAutosize
                    minRows={3}
                    maxRows={10}
                    variant='outlined'
                    sx={{m: 1}}
                    size='small'
                    placeholder="Reply here..."
                    // value={...}
                    onChange={(event) => handleTextChange(event)}
                    onKeyPress={(event) => handleKeyPress(event)} // Listen for key press events
                  />
                  </Paper>
          </Box>

          {postsWithComments.map((post) => (

            <Box sx={{ flex: 1, pr: 2 }}>
              {/* Threads and comments will be dynamic based on the selected category */}
              <Paper sx={{ p: 2 }} elevation={3}>
                <Typography variant="h5">[#{post.id}] {post.content}</Typography>
                <Typography variant="body1">@{post.author}:</Typography>
                {/* Nested Comment */}
                {
                  post.comments.map((comment) =>
                  (<Box sx={{ pl: 2, pt: 1 }}>
                    <Paper sx={{ p: 1.5, mt: 1, bgcolor: 'action.hover' }} elevation={1}>
                      <Typography variant="subtitle1">@{comment.author}:</Typography>
                      <Typography variant="body2">[#{comment.id}] {comment.content}</Typography>
                    </Paper>
                  </Box>))
                }
                <Box sx={{ pl: 2, pt: 1 }}>
                    <Paper sx={{ p: 1.5, mt: 1, bgcolor: 'action.hover' }} elevation={1}>
                      {/* <Typography variant="subtitle1">@{comment.author}:</Typography> */}
                      {/* <Typography variant="body2">{comment.content}</Typography> */}
                  {/* <TextField id="outlined-basic" label="Enter comment" variant="outlined"  /> */}

                  <TextareaAutosize
                    minRows={3}
                    maxRows={10}
                    variant='outlined'
                    sx={{m: 1}}
                    size='small'
                    placeholder="Reply here..."
                    // value={...}
                    onChange={(event) => handleTextChange(event, post.id)}
                    onKeyPress={(event) => handleKeyPress(event, post.id)} // Listen for key press events
                  />

                    </Paper>
                  </Box>

              </Paper>
            </Box>
          ))}
          </div>

          {/* Unit Selections */}
          <Box sx={{ width: '200px' }}>
            <List>
              {['Unit 5', 'Unit 4', 'Unit 3', 'Unit 2', 'Unit 1'].map((unit, index) => (
                <ListItem key={unit} button>
                  <Button fullWidth variant={index === 0 ? "contained" : "text"}>
                    {unit}
                  </Button>
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

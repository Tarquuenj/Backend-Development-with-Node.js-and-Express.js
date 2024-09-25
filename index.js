const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // Middleware to parse JSON

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const users = [{ username: 'testuser', password: 'password123' }];

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  // Validate credentials
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    return res.status(200).json({ message: 'Login successful!' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});


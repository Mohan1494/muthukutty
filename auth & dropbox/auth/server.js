const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Use a properly escaped Windows path
const cloudServicePath = 'D:\\cloud\\auth'; // Double backslashes are required

// Alternatively, use forward slashes (platform-independent)
//const cloudServicePathAlt = 'D:/cloud/auth';

// Serve static files from the 'public' directory inside 'cloudServicePath'
app.use(express.static(path.join(cloudServicePath, 'public')));

// Route to serve 'index.html' from the 'public' folder
app.get('/', (req, res) => {
    res.sendFile(path.join(cloudServicePath, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

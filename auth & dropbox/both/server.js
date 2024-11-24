const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Use a properly escaped Windows path
const cloudServicePath = 'D:\\cloud\\DROP'; // Use double backslashes to escape

// Alternatively, use a forward slash
// const cloudServicePath = 'D:/cloud';

// Serve static files from the 'dropbox' directory inside 'cloud'
app.use(express.static(path.join(cloudServicePath, 'public')));

// Route to serve 's.html' from the 'dropbox' folder
app.get('/', (req, res) => {
    res.sendFile(path.join(cloudServicePath, 'public', 's.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

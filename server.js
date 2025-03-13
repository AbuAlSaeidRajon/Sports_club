const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/register', (req, res) => {
    const formData = req.body;

    // Save the form data to a file (or you can save it to a database)
    fs.appendFile('registrations.json', JSON.stringify(formData) + '\n', (err) => {
        if (err) {
            console.error('Failed to save registration:', err);
            return res.status(500).send('Failed to register');
        }
        console.log('Registration saved:', formData);
        res.redirect('/thank-you.html');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
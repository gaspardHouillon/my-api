//Import library
const express = require('express');
// Use default PORT or given .
const PORT = process.env.PORT || 80;
// Create application 
const app = express();
// SOme basic route 
app.get('/', (req, res) => {
    // Send response
    res.json({ message: 'coucou' });
});

//Start server.
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(0);

    }
    console.info('Server started');
});
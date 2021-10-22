const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: `Welcome!, let's save with AutoIdle 🎊`});
});

app.get('/salutation/:name', (req, res) => {
    res.status(200).json({ message: `Happy saving ${req.params.name}.`});
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Sorry, resource not found.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
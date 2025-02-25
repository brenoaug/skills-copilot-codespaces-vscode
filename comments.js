// Create web server
// create web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const comments = require('./comments.js');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.addComment(comment);
  res.status(201).json('success');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


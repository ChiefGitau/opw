const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Tekkers',
    description: 'The easiest way to organize small-sided football and basketball games in Amsterdam. Built for grassroots organizers, private sports groups, and casual players.'
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
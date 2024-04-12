//Don't move me!
//Open server with npm run dev
const express = require('express');
const site = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

//middleware used to handle url-encoded data (forum data)
// 'content-type: application/x-www-form-urlencoded'
site.use(express.urlencoded({extended: false}));

//middleware for json files
site.use(express.json());

//serve static files (like css)
site.use('/public', express.static(path.join(__dirname, '/public')));

site.get('^/$|/index(.html)?|/home( page)?', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});
site.get('/ActionList(.html)?|/action(list)?|/actions', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'ActionList.html'));
});
site.get('(/login)?/login(.html)?', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'login', 'login.html'));
});
site.get('(/login)?/signup(.html)?', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'login', 'signup.html'));
});
site.get('/glossary(.html)?', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'glossary.html'));
});

site.listen(PORT, () => console.log('Server is running on port ' + PORT));
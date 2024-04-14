//Don't move me!
//Open server with npm run dev (dev= 'nodemon server')
//using expressjs for my website.
const express = require('express');
const site = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

//middleware used to handle url-encoded data (forum data)
// 'content-type: application/x-www-form-urlencoded'. Unknown if I will need it, but hey, might as well.
site.use(express.urlencoded({extended: false}));

//middleware for json files. I doubt I need it, but just in case.
site.use(express.json());

//serve static files (like css). Allows easy access to linked stylesheets/scripts/photos to the website without having to
//write redundant code
site.use('/public', express.static(path.join(__dirname, '/public')));

//Allows the server to understand what each link means when a request to move to a page is done.
// ^ = nothing before, $ = nothing after, ()? = optional.
site.get('^/$|/index(.html)?|/home( page)?', (req, res) =>{
    //go to this file. Start looking at ___dirname (the root file for this project) and go to'index.html'
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
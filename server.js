const express = require('express');
require('dotenv').config;

const app = express();


app.listen(3000, () => console.log('The webserver is running on port 3000'));
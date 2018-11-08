const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyPaeser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyPaeser.json());
app.use(bodyPaeser.urlencoded({extended: false}));

app.use('/api/user',userApi);

app.listen(6000);
console.log('success listen at port:6000');
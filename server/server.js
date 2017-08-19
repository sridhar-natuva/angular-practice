// Get dependencies
const express = require('express');
const app = express();

var messages =[{text :'some text',owner :'sridhar'},{text :'some more text',owner :'rahul'}]

// Set our api routes
app.get('/messages', (req,res)=>{
  res.json(messages);
})
app.listen(3000);

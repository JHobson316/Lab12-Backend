'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const Model = require("./models/Book")
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.1kt0d1q.mongodb.net/?retryWrites=true&w=majority`)

app.get('/test', (request, response) => {

  try {
    const book1 = new Model({
      title: "The Hunger Games",
      description: "Whistle sounds (placeholder)",
      status: "Pretty good. 8.5/10"
    })
  } catch (error) {
    console(error.message)
  }

  response.send('test request received')
})

app.get("/books")

app.listen(PORT, () => console.log(`listening on ${PORT}`));

const express = require('express')
require('dotenv/config');
const PORT = process.env.PORT || 3000;

const app = express();

// ROTAS
app.use('', require('./routes/routes'));


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})
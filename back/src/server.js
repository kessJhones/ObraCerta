const express = require('express')
require('dotenv/config');
const PORT = process.env.PORT || 3000;

require('./database/index.js')//temp

const app = express();
app.use(express.json())

// ROTAS
app.use('', require('./routes/routes'));



app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})
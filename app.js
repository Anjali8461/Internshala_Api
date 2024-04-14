const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' }); 

const PORT = process.env.PORT || 3000;
app.listen(PORT,console.log(`Server listening on port ${PORT}`));   
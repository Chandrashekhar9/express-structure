const express = require('express');
const app = express();
const PORT = 4000;


app.listen(PORT, error => {
    if(error){ console.error(`Error in running the server, ${error}`); }

    console.log(`Server is running on port ${PORT}`); 
})
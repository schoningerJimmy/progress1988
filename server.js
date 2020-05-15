const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const path = require('path');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));


app.use(cors());




// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));



// Handles any requests that don't match the ones above

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname , 'build', 'index.html'));
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

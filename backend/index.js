const app = require('./app');
const dotenv = require('dotenv');
const dbConnection = require('./utils/db');
dotenv.config();
const PORT = process.env.PORT || 5000;
 
//server
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
    dbConnection();
})
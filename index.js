const express = require('express');
const { taskRouter, pingRouter } = require('./routes'); 
const app = express();
app.use(express.json());

app.use('/ping', pingRouter);
app.use('/api/v1/tasks', taskRouter); 

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

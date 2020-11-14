const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send('Welcome');
});

app.listen(3000, (e)=>{
    if(e){
        console.log('error..');
    }else{
        console.log('Server running at http://localhost:3000/');
    }
})
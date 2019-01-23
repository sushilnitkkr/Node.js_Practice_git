const express = require('express');
const app = express();
app.get('/',(res,req)=>{
    //req.send('<h1>Hello Express</h1>');
    req.send({
        name:'Sushil Kumar',
        college : 'NIT KKR'
    })
});
app.listen(3000);
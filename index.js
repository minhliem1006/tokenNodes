const express = require('express');
const app = express();
const path = require('path');
app.use('/congkhai',express.static(path.join(__dirname,'/public')))


app.get('/',(req,res)=>{
    var duongDanFile = path.join(__dirname,'/index.html');
    res.sendFile(duongDanFile)
    // res.json("112312")
});

//API

app.get('/api/login',(req,res)=>{
    return res.status(200).json({
        status:'success',
        elements: {
            token: 'accessToken',
            timeExpired: Date.now() + (10*1000),   
        }
    })
})

app.get('/api/user',(req,res)=>{
    return res.status(200).json({
        status:'success',
        elements: [{
            name:'Liem'
        },{
            name:'tips js'
        }]
    })
})

app.get('/api/refreshToken',(req,res)=>{
    return res.status(200).json({
        status:'success',
        elements: {
            token: 'newAccessToken',
            timeExpired: Date.now() + (10*1000),   
        }
    })
})




//End API


app.listen(3000,()=>{
    console.log("app start 3000");
})
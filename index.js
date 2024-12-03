const express=require('express');
const cors=require('cors');
const app=express();
const port =process.env.PORT || 4000;

// middleWare
app.use(cors());
app.use(express.json());





app.get('/',(req,res)=>{
    res.send('Crowd funding is running   .. ');
});

app.listen(port,()=>{

    console.log(`crowd funding is running on port :${port}`);

})
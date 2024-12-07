const express=require('express');
const cors=require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app=express();
const port =process.env.PORT || 4000;

// middleWare
app.use(cors());
app.use(express.json());







const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uslpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const campignCollection=client.db('campignDB').collection('campign');
    const donatedCollection=client.db('campignDB').collection('donatedcollection')







    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });


    app.get('/campign',async(req,res)=>{
        const cursor=campignCollection.find();
        const result=await cursor.toArray();
        res.send(result);


    })
// for delet operation

    app.delete('/campign:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)} ;
      const result=await campignCollection.deleteOne(query);
      res.send(result);

    })

    // for update
    app.get('/campign/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campignCollection.findOne(query);
      res.send(result);
    });
    

    app.put('/campign/:id', async (req, res) => {

      const id=req.params.id;
      const filter={_id:new ObjectId(id)}
      const options = { upsert: true };

      updatedCampaign=req.body;
      
     campaign={

        $set:{

           imageUrl:updatedCampaign.imageUrl,
           title:updatedCampaign.title,
           type:updatedCampaign.type,
           description:updatedCampaign.description,
           minDonation:updatedCampaign.minDonation,
           deadline:updatedCampaign.deadline,
           email:updatedCampaign.email,
           name:updatedCampaign.name,

          
        }
      }
      const result=await campignCollection.updateOne(filter,campaign,options);
      res.send(result);


    })

    




    app.post('/campign',async(req,res)=>{
        const newCampign=req.body;
        console.log(newCampign);
        const result=await campignCollection.insertOne(newCampign);
        res.send(result);

        
    })

    // for donatedcollection user
    app.post('/donatedcollection',async(req,res)=>{
      const newDonatedUser=req.body;
      console.log(newDonatedUser);
      const result=await donatedCollection.insertOne(newDonatedUser);
      res.send(result);
    })

    
    app.get('/donatedcollection',async(req,res)=>{
      const cursor=donatedCollection.find();
      const result=await cursor.toArray();
      res.send(result);


  })



    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   
  }
}
run().catch(console.dir);


























app.get('/',(req,res)=>{
    res.send('Crowd funding is running   .. ');
});

app.listen(port,()=>{

    console.log(`crowd funding is running on port :${port}`);

})
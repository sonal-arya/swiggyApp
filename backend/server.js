const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:1234', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204
  };
  
dotenv.config()

const app = express();

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json())

mongoose.connect(process.env.MONGOOSE_URL ,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=> console.log("MongoDB is connected Now"))
.catch((err)=> console.log("There is some error , Find out mongodb is still not connected" ,err) )

app.use('/api/auth',authRoutes) 

const PORT  = process.env.PORT;

app.listen(PORT , () => console.log(`server started on ${PORT}`))

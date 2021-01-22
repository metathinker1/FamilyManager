require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('connected to database'))

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://rob_wood:DevTool19@cluster0.61mqn.mongodb.net/familyManagerTestDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

mongoose.connect("mongodb+srv://rob_wood:DevTool19@cluster0.61mqn.mongodb.net/familyManagerTestDB?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

db.once('open', () => console.log('connected to database'))

app.use(express.json())

const workitemGenRouter = require('./routes/workitem_generators');
app.use('/workitemgens', workitemGenRouter);

app.listen(3000, () => console.log('server started'))


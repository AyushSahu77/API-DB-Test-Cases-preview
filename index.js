const express = require('express')
const app = express()
const Test = require('./models/test')
const port = 4001

require("./db/conn")

//Home page

app.get('/', (req, res) => {
    res.end("You're at / page");
});

//====================================================================================

app.use(express.json());

//POST

app.post('/apiDBproject', async (req, res) => {
  const sentData = new Test(req.body);
  try {
    const sentDataDB = await sentData.save()
    res.status(201).send(sentData)
  } catch (err) {
    res.status(400).send(err)
  }
});

//GET

app.get('/apiDBproject', async (req, res) => {
  try{
    const receivedData = await Test.find();
    res.status(200).send(receivedData);
  } catch {
    res.status(404).send(err)
  }
})

//GET BY ID

app.get('/apiDBproject/:id', async (req, res) => {
  try{
    const sReceivedData = await Test.findById(req.params.id)
    res.status(200).send(sReceivedData)
  } catch (err) {
    res.status(500).send(err)
  }
})

//PATCH BY ID

app.patch('/apiDBproject/:id', async (req, res) => {
  try{
    const changedData = await Test.findByIdAndUpdate(req.params.id, req.body, {
      new:true
    })
    res.status(200).send(changedData)
  } catch (err) {
    res.status(500).send(err)
  }
})

//DELETE BY ID

app.delete('/apiDBproject/:id', async (req, res) => {
  try{
    const deleteData = await Test.findByIdAndDelete(req.params.id)
    res.status(200).send(deleteData)
  } catch (err) {
    res.status(500).send(err)
  }
})

//====================================================================================

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = 3000
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000/'], // Add your React app's URL
  credentials: true
}));
app.use(express.json())
// console.log(process.env.API_KEY)
const apiKey = process.env.API_KEY;


app.post('/', async (req, res) => {
  console.log(req.body)
    let a = await fetch("https://api.opensanctions.org/match/sanctions?algorithm=best", {
      method: "POST",
      headers: {
        "Authorization": `ApiKey ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    })
    let b = await a.json()
    console.log(b.responses.q1.results)

  
  res.json(b)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
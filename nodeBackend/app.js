import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import { startWatchingEvents } from "./src/watchman/index.js"
import { getAllIDO } from './src/apis/Ido/index.js'
// const prisma = new PrismaClient()
const app = express()
app.use(cors())

app.use(bodyParser.json());


app.get('/', async (req, res) => {

  res.json({ msg: "working! " })
})


app.get("/allIdo",getAllIDO)



const PORT = 3001
const server = app.listen(PORT, () => {
  console.log("running on ", PORT)
  startWatchingEvents()
  // startWatchingEvents()
  setInterval(() => {
    startWatchingEvents()
  }, 10000);
})
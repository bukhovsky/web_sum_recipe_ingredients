const path = require('path')
const express = require('express')
const app = express()
const port = 3000


const publicDirPath = path.join(__dirname, '../public')
console.log(publicDirPath);

app.use(express.static(publicDirPath))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


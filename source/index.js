const path = require("path")
const express = require("express")
const app = express()
const port = process.env.PORT || 1620

app.listen(1620, ()=>console.log ("Abriendo el servidor http://localhost:4420"))
const public = path.resolve (__dirname, "../public")
app.use (express.static(public))
app.get ("/",(req,res)=> res.sendFile(path.resolve(__dirname,"views/home.html")))
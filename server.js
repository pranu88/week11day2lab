const express = require ('express')

const app = express()

const fs = require('fs')




app.get("/greeting", (req,res)=>{
    res.send("<h1>Hello stranger</h1>")
    
    })
    app.get('/:name',(req,res)=>{
        res.send(`<h1>Hello ${req.params.name}!</h1>`)
    })

    app.get('/tip/:total/:tipPercentage', (req, res)=> {
        let percentage = (req.params.total)*(req.params.tipPercentage / 100)
        res.send(`<h1>Your tip amount: ${percentage} </h1>`);
      });





app.listen('3000',(req,res) => {
    console.log("Server is currently running on port 3000")
    })
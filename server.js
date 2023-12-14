const express = require ('express')

const app = express()

const fs = require('fs')




app.get("/greeting", (req,res)=>{
    res.send("<h1>Hello stranger</h1>")
    
    })
    app.get('/greeting/:name',(req,res)=>{
        res.send(`<h1>Hello ${req.params.name}!</h1>`)
    })

    app.get('/tip/:total/:tipPercentage', (req, res)=> {
        let tipPercentage = ((req.params.total)*(req.params.tipPercentage))/ 100
        res.send(`<h1>Your tip amount: ${tipPercentage} </h1>`);
      });
 


      let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
      app.get('/magic/:question',(req,res)=>{
      let random = Math.floor(Math.random()*(19-0)+0)
          
       res.send(`Question: ${req.params.question}, Answer: <h1>${answers[random]}</h1>`)
        

      })



app.listen('3000',(req,res) => {
    console.log("Server is currently running on port 3000")
    })
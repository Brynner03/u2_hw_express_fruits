const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;
const app = express();


app.get('/ping', (req, res) => {
    res.json('pong');
})


app.get('/someroute', (req, res) => {
    console.log("Hello")
    res.send({
        message: "Hello, world. "
    })
    
})

app.get('/greet/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}`)
})


const numero = [1, 2, 3, 4, 5]
app.get('/five', (req, res) => {
    res.send(numero)
})

app.get('/evens/:n', (req, res) => {

    let evens = []
    for (let i=2; i <= req.params.n; i++) {
        if (i % 2 === 0) {
            evens.push(i)
        }
    }    
    res.send(evens)

    })

    app.get("/namelength/:name", (req, res) => {
        res.send(`${req.params.name} has ${req.params.name.length} characters!`)
    })


    app.get('/fruits', (req, res) => {
         
        res.send(fruits)
      })



                    //BONUS

      app.get('/fruits/sort', (req, res) => {
          let array = fruits.sort((l, o) => {
              if (l.name > o.name){
                  return 1
              } else {
                  return -1
              } 
          })
          res.send(array)
  }
  )
            //BONUS ^^^^^^
            
            
      app.get('/fruits/:name', (req, res) => {
        fruitLook = fruits.find((x) => x.name.toLowerCase() === req.params.name.toLowerCase())
        res.send(fruitLook)
      }
    )





            // SECRET BONUS

    app.get('*', (req, res) => {
        res.send('404 Not Found')
      })

        // SECRET BONUS ^^


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
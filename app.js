// Usando objeto espress
const express = require ('express')
// App de Express
const app = express()
app.use(express.json())// Indicamos que usaremos JSON
const port = 3000
// HTTP METODOS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers  GET ALL requests ${new Date()}`)
    const explorer1 = {id:  1, name:"Carlo1"}
    const explorer2 = {id:  2, name:"Carlo1"}
    const explorer3 = {id:  3, name:"Carlo1"}
    const explorer4 = {id:  4, name:"Carlo1"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})
//Puerto en que vamos a ver nuestra app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
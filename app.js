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
    const explorer2 = {id:  2, name:"Carlo2"}
    const explorer3 = {id:  3, name:"Carlo3"}
    const explorer4 = {id:  4, name:"Carlo4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})
// POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parametros de un cliente
    res.status(201).json({message: "Created"}) 
})
//PUT Crea un endpoint que se encargue de actualizar un explore
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = re.body // Parámetros de un cliente 
    res.status(200).json({message: "Updated!"})
})
//Puerto en que vamos a ver nuestra app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
// Usando objeto espress
const express = require ('express')
// App de Express
const app = express()
app.use(espres.json())// Indicamos que usaremos JSON
//Puerto en que vamos a ver nuestra app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
const express = require ('express')

const app = express()
app.get('/',(request, response) => {
    response.send ('hola get')
})

app.post('/',(request, response) => {
    response.send ('hola post ')
})
app.put('/',(request, response) => {
    response.send ('hola put')
})
app.patch('/',(request, response) => {
    response.send ('hola patch')
})
app.delete('/',(request, response) => {
    response.send ('hola borrar')
})


/**
 * 
 * 
 * 
 *  Funcionalidad
 */
//http://localhost:3000
app.listen(3000, () => {
    console.log('listening on port 3000aaaaa')
})

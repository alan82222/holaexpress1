const express = require ('express')

const app = express()

// localhost:3000/julio/123

app.get('/:user/:password',(req, ress) => {
   const {user, password} = req.params
   if (user === 'julio' && password ==='123'){
    response.json({msg: 'Inicio de sesion correcto'})
   }

   res.status(400).json({msg: 'Fallo inicio'})
      
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

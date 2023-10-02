const express = require ('express')

const app = express()
app.use(express.json())

app.get('/:user/:password', (req, res)=> {
    const {user, password} = req.params
     
    if (user === 'alan' && password === '123' )  {
        res.json({msg: 'Inicio de sesión exitoso'})
        return
    }
    res.json ({msg:'Error en el usuario o la contraseña holqs' })
})

// http://localhost:3000/login?user=alan&password=123
app.get('/login', (req, res) => { //Endpoint
    const {user, password} = req.query
     if (!user || !password){ 
        res.status(400).json({
      msg: 'necesito la informacion de usuario y contraseña correcto'
        })
        return
     }
    if (user === 'alan' && password === '123' )  {
        res.json({msg: 'Inicio de sesión exitoso'})
        return
    }
    res.json ({msg:'Error en el usuario o la contraseña' })
})

app.post('/login', (req, res) => {
    const {user, password} = req.body
    if (!user || !password){ 
       res.status(400).json({
     msg: 'necesito la informacion de usuario y contraseña correcto'
       })
       return
    }
   if (user === 'alan' && password === '123' )  {
       res.json({msg: 'Inicio de sesión exitoso'})
       return
   }
   res.json ({msg:'Error en el usuario o la contraseña' })
})



app.post('/', (req, res)=> {res.json({msg:'Hello POST'})})
app.put('/', (req, res)=> {res.json({msg:'Hello PUT'})})
app.patch('/', (req, res)=> {res.json({msg:'Hello PATCH'})})
app.delete('/', (req, res)=> {res.json({msg:'Hello DELETE'})})

/*
*
*
*     
*
*/
//http://localhost:3000/user

app.listen(3000,()=>{
    console.log('listening on port 3000')
})
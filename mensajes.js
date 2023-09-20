const express = require ('express')

const app = express()

app.get('/', (req, res)=> {res.json({msg:'Hello get'})})

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
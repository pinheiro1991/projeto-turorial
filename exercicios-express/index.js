const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(saudacao('Guilherme'))

app.use((req, res,next) => {
  console.log('Será que serei chamado')
  next()
})
app.get('/clientes/relatorio', (req, res) => {
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)

})
app.post('/corpo',(req , res)=>{
  //let corpo =''
  //req.on('data', function(parte){
  //  corpo += parte
  //})
  //req.on('end',function() {
    //res.send(corpo)
  //})

  res.send(req.body)
})

app.get('/clientes/:id', (req ,res)=>{
 res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req , res,next) => {
  console.log('Durante...')
  res.json( {
    data: [
      {id: 7, name: 'Ana', position:1 },
      {id: 34,name: 'Bia', position:2 },
      {id: 73, name: 'Carlos', position: 3 }
    ],
    count: 30,
    skip:0,
    limit:3,
    status:200
  })
  next()
  //res.send('Estou <b>bem!</b>')

})


app.listen(3001, () =>{
  console.log('Backend executando...')
})


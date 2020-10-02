//Dados em array dos proffys
const proffys = [
  { 
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "61980000000",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "89984440000",
    bio: "Entusiasta das melhores tecnologias de IA e dados.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Computer Science",
    cost: "40",
    weekday: [4],
    time_from: [720],
    time_to: [1220]
  }
]

//Dados em array dos subjcets/materias
const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

//Dados em array dos dias da semana
const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function pageLanding(req, res){
  return res.render("index.html")
}

function pageStudy(req, res){
  const filters = req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
  return res.render("give-classes.html", )
}

const express = require('express')
const server = express()

//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
  express: server,
  noCache: true, 
})

server
//config arquivos estaticos (css, script, imagens)
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

require('dotenv').config()
const express = require('express');
const app = express();
var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

morgan.token('json', function (req, res) {
    return JSON.stringify({
        "name": req.body.name,
        "number": req.body.number 
    })
})

morgan.token("custom", ":method :url :status :res[content-length] - :response-time ms :json")

app.use(express.static('build'))
app.use(express.json());
app.use(morgan('custom'))
app.use(cors())

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.get('/info', (request, response) => {
    const personsLen = persons.length
    const date = new Date()
    var summary = `Phonebook has info for ${personsLen} persons`
    response.send(`${summary}<br/><br/>${date}`)
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndDelete(request.params.id).then(person => {
        response.json(person)
    })
})

app.post('/api/persons/', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    } else if (persons.find(duplicate => duplicate.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

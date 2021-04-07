const express = require('express');
const app = express();
var morgan = require('morgan')

morgan.token('json', function (req, res) {
    return JSON.stringify({
        "name": req.body.name,
        "number": req.body.number 
    })
})

morgan.token("custom", ":method :url :status :res[content-length] - :response-time ms :json")

app.use(express.json());
app.use(morgan('custom'))

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

app.get('/info', (request, response) => {
    const personsLen = persons.length
    const date = new Date()
    var summary = `Phonebook has info for ${personsLen} persons`
    response.send(`${summary}<br/><br/>${date}`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.post('/api/persons/', (request, response) => {
    const ranId = Math.floor(Math.random() * Math.floor(9999))
    const body = request.body
    console.log(body);

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

    const person = {
        id: ranId,
        name: body.name,
        number: body.number,
    }
    persons = persons.concat(person)

    response.json(person)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const express = require('express')

const app = express()

//usando parâmetros
app.get('/message/:id/:user', (request, response) => {
    response.send(`
    Id da mensagem: ${request.params.id}.
    e o usuário: ${request.params.user}.
    `)
})

//usando query
app.get('/users', (request, response) => {
    const { page, limit } = request.query
    response.send(`
    Página: ${page}.
    Limite: ${limit}.
    `)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
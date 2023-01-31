const express = require('express')

const app = express()

app.get('/message/:id/:user', (request, response) => {
    response.send(`
    Id da mensagem: ${request.params.id}.
    e o usuário: ${request.params.user}.
    `)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
// native node http server
const port = 3001
const http = require('http')
const server = http.Server()

// template engine
const nunjucks = require('nunjucks').configure('views', { autoescape: true })
const moneda = require('./filter')
nunjucks.addFilter('moneda', moneda)

let variables, html 
server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    switch( req.url ) {
        case '/':
            variables = {
                titulo: 'Bienvenidos a la introducción de Nunjucks',
                texto: 'Sean muy bienvenidos los que vienen a aprender. Nunjucks is a full featured templating engine for javascript. It is heavily inspired by jinja2.',
                monto: 1000500.469
            }
            html = nunjucks.render('index.html', variables)
            res.write( html )
            break
        case '/lorem':
            variables = {
                titulo: 'Lorem ipsum',
                texto: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
                monto: -1990.998
            }
            html = nunjucks.render('index.html', variables)
            res.write( html )
            break
        default:
            break
    }
    res.end()
})

console.log('Server listens on port '+port)
server.listen(port)
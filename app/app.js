
import express from 'express'
import { urlencoded } from 'body-parser'
import expressValidator from 'express-validator'
import { createConnection } from './config/bdConnection'

import { NoticiaRoute } from './routes/noticia'
import { HomeRoute } from './routes/home'
import NoticiaController from './controllers/noticias'
import HomeController from './controllers/home'

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'app/views')
app.use(urlencoded({ extended: true }))
app.use(expressValidator())
app.use(express.static('./app/public'))

app.config = { bd: createConnection() }
app.controllers = {
    noticias: new NoticiaController(app),
    home: new HomeController(app)
}

new NoticiaRoute(app)
new HomeRoute(app)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('open in ' + port + '.'));

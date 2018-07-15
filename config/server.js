import express from 'express'
import { urlencoded } from 'body-parser'
import expressValidator from 'express-validator'
import { createConnection } from '../config/bdConnection'

import { NoticiaRoute } from '../app/routes/noticia'
import { HomeRoute } from '../app/routes/home'
import NoticiaController from '../app/controllers/noticias'
import HomeController from '../app/controllers/home'

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

export default app
import userRouter from './user.routes.js'
import favRouter from './fav.routes.js'
import listRouter from './list.routes.js'
import loginRouter from './login.routes.js'

function routes(app) {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the FAV API'
    })
  )

  app.use(loginRouter)
  app.use(userRouter)
  app.use(favRouter)
  app.use(listRouter)

  app.use((req, res) => {
    console.log('catch 404')
    res.send('404')
  })
}

export default routes

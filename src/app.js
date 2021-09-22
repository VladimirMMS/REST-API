import express, {json} from 'express'
import morgan from 'morgan'
import routerProject from './routes/projects'
import routerTask from './routes/tasks'

const app = express()

//middleware
app.use(morgan('dev'))
app.use(json())


app.use('/api/projects', routerProject)
app.use('/api/tasks', routerTask)



export default app;
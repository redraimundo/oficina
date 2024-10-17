import express from 'express'
import connectDb from './config/db.js'
import workshopRouter from './routers/workshopRouter.js'
import vehicleRouter from './routers/vehicleRouter.js'
import maintenanceRouter from './routers/maintenanceRouter.js'
import dotenv from 'dotenv'

dotenv.config()
connectDb()

const app = express()
app.use(express.json())

app.use('/workshop', workshopRouter)
app.use('/vehicle', vehicleRouter)
app.use('/maintenance', maintenanceRouter)

app.listen(process.env.PORT, () => console.log('Servidor rodando na porta 3000'))
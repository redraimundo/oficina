import mongoose from 'mongoose'

const connectDb = async() => {
    mongoose
        .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADRESS}/prova`)
        .then(() => console.log('Conectado ao MongoDB'))
        .catch((error) => console.log(error))
}

export default connectDb
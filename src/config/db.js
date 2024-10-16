import mongoose from 'mongoose'

const connectDb = async() => {
    mongoose
        .connect(`${process.env.URI}/prova`)
        .then(() => console.log('Conectado ao MongoDB'))
        .catch((error) => console.log(error))
}

export default connectDb
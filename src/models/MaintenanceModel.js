import { Schema, model } from 'mongoose'

const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: false
    },
    services: [
        {
            name: {
                type: String,
                required: true
            },
            prices: {
                type: Number,
                required: true
            }
        }
    ],
    totalCost: {
        type: Number,
        required: true
    }
})

export default model('Maintence', maintenanceSchema)
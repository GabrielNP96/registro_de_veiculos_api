import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    engine: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

const car = mongoose.model("Car", VehicleSchema);
const motorcycle = mongoose.model("Motorcycle", VehicleSchema);

export  {car, motorcycle};
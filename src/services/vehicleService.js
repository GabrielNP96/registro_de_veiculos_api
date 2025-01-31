import { car, motorcycle } from "../models/Vehicle.js";

/**
 * Salva um veículo na coleção correta (Car ou Motorcycle)
 * @param {Object} vehicleData - Dados do veículo
 * @param {string} vehicleData.type - Tipo do veículo (car ou motorcycle)
 * @returns {Object} - Veículo salvo no banco
 */
export const saveVehicle = async (vehicleData) => {
    try {
        if (!vehicleData.type) {
            throw new Error("O campo 'type' é obrigatório ('car' ou 'motorcycle').");
        }

        let model;
        if (vehicleData.type === "car") {
            model = car;
        } else if (vehicleData.type === "motorcycle") {
            model = motorcycle;
        } else {
            throw new Error("Tipo de veículo inválido. Use 'car' ou 'motorcycle'.");
        }

        const newVehicle = new model(vehicleData);
        return await newVehicle.save();
    } catch (error) {
        throw new Error(`Erro ao salvar veículo: ${error.message}`);
    }
};

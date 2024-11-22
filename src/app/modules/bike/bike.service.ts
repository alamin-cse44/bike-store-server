import { IBike } from "./bike.interface"
import { BikeModel } from "./bike.model"


const createBikeService = async (bike: IBike) => {
    const result = await BikeModel.create(bike);

    return result;
}


const getAllBikesService = async () => {
    const result = await BikeModel.find({});

    return result;
}

const getBikeByIdService = async (bikeId: string) => { 
    const result = await BikeModel.findOne({_id: bikeId});

    return result;
}

export const BikeServices = {
    createBikeService,
    getAllBikesService,
    getBikeByIdService
}
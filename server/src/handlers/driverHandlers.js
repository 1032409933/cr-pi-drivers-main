const { createDriver, getDriverByID, searchDriverByName, getAllDrivers } = require("../Controllers/DriverController");
const Driver = require("../models/Driver");

const getDriverHandler = async (req,res) =>{

    const {name} = req.query;

    const results = name? await searchDriverByName(name): await getAllDrivers();

   if (results.length)res.status(200).json(results);
   else res.status(400).json({error:`usuario ${name} no encontrado en la base de datos`});
}

  


const getDriverHandlerId = async(req,res) =>{
    const driverId = req.params.id;
 
    const source = isNaN (driverId) ? "bdd" : "api";

    try {
        const driver = await getDriverByID(driverId, source);
        res.status(200).json(driver);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}





const postDriverHandler = async (req,res) => {
    const {forename,surname,description,image,nationality,dob} = req.body;
    try {
        const newDriver = await createDriver (forename,surname,description,image,nationality,dob);
        res.status(201).json(newDriver);
        
    } catch (error) {
        res.status(400).json ({error:error.message});
    }
};






module.exports = {
    getDriverHandler,
    getDriverHandlerId,
    postDriverHandler  
};
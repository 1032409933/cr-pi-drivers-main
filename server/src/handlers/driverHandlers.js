const { createDriver, getDriverByID } = require("../Controllers/DriverController");
const Driver = require("../models/Driver");

const getDriverHandler = (req,res) =>{
    const {name} = req.query;
    if (name) res.send (`llamar a la funcion que busca por nombre  ${name}`);
    else res.send (`quiero enviar todos los usuarios `)
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
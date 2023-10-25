const {Driver} = require ("../db");
const axios = require ("axios");


const createDriver = async (forename,surname,description,image,nationality,dob )=>
     await Driver.create({forename,surname,description,image,nationality,dob});
   
const getDriverByID = async (driverId, source) =>{
    const driver = source === "api" 
    ? (await axios.get (`http://localhost:5000/drivers/${driverId}`))
    .data
    :await Driver.findByPk(driverId);
        
    return driver;
    }; 


module.exports = {createDriver,getDriverByID} 

// if(typeof Number(driverId)=="number")console.log("es un numero");
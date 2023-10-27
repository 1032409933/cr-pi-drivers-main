const { create } = require("json-server");
const {Driver} = require ("../db");
const axios = require ("axios");

const cleanArray =(arr)=>
     arr.map((elem) =>{
        return{
            ID: elem.id,
            forename: elem.name.forename,
            surname: elem.name.surname,
            description: elem.description,
            image: elem.image.url,
            nationality: elem.nationality,
            dob: elem.dob,
            created:false
        };
    });


const getAllDrivers = async () => {

    const dataBaseDrivers = await Driver.findAll()

    const apiDriversRaw = (
        await axios.get("http://localhost:5000/drivers")
        ).data;

    const apiDrivers = cleanArray(apiDriversRaw)

        return  [...dataBaseDrivers , ...apiDrivers ];
};


const searchDriverByName = async (name) => {

    const lwname = name.toLowerCase();
    
    const dataBaseDrivers = await Driver.findAll({ where: { forename: lwname } });

    const respuesta = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
    const apiDriversRaw = respuesta.data;

    const apiDrivers = cleanArray(apiDriversRaw);

    return [...apiDrivers, ...dataBaseDrivers];
};


const createDriver = async (forename,surname,description,image,nationality,dob )=>
     await Driver.create({forename,surname,description,image,nationality,dob});
   




const getDriverByID = async (driverId, source) =>{
    const driver = source === "api" 
    ? (await axios.get (`http://localhost:5000/drivers/${driverId}`))
    .data
    
    :await Driver.findByPk(driverId);
        
    return driver;
    }; 




module.exports = {createDriver,getDriverByID,getAllDrivers,searchDriverByName} 

// if(typeof Number(driverId)=="number")console.log("es un numero");
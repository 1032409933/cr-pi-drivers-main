const { Router } = require("express");

const usersRouter = Router();

usersRouter.get ("/",(req,res) =>{
    res.status(200).send("NIY:ESTA RUTA DEBERIA MOSTRAR INFORMACION DE LOS USUARIOS")
})

usersRouter.get ("/:id",(req,res) =>{
    const userId = req.params.id
    res.status(200).send(`NIY:ESTA RUTA DEBERIA MOSTRAR INFORMACION DEL USUARIO CON ID : ${userId}`)
})


module.exports = usersRouter;
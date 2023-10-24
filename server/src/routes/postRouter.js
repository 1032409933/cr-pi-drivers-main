const { Router } = require("express");

const postRouter = Router();

postRouter.post ("/",(req,res) =>{
    res.status(200).send("NIY:ESTA RUTA CREA UN NUEVO USUARIO")
})

postRouter.post ("/:id",(req,res) =>{
    const userId = req.params.id
    res.status(200).send(`NIY:detalle de usuario numero ${userId} a crear `)
})


module.exports = postRouter;
const { Router } = require("express");
const usersRouter = require ("./usersRouter")
const postRouter = require ("./postRouter")
const router = Router();

router.use("/users",usersRouter)
router.use("/post",postRouter)

router.get ("/",(req, res) =>{
    res.status(200).send("ESTA ES LA RESPUESTA AL SERVIDOR DE http://localhost:3001/")
})


module.exports = router;


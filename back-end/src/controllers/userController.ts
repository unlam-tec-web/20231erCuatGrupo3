import {Router} from 'express';

const userServices = require("../services/userServices.js");
const router = Router();


router.post("/login",async (req, res) => {
    const{email, password} = req.body;
    const result = await userServices.loginUser(email,password)

    if (result.resultado) {
        res.status(200).send({
            mensaje: result.mensaje,
            usuario: {...result.user, password: undefined }
        });
    } else{
        res.status(401).send({
            mensaje: result.mensaje,
        });

    }
});

router.post("/register", async (req, res) => {
    const { name, apellido, direccion, emailRegistro, passwordRegistro } =
        req.body;
    const result = await userServices.registerUser(
        name,
        apellido,
        direccion,
        emailRegistro,
        passwordRegistro
    );


    if (result.acknowledged) {
        res.status(200).send({
            mensaje: "El usuario se ha registrado correctamente",
        });
    } else{
        res.status(500).send({
            mensaje: result,
        });

    }
});
export default router;
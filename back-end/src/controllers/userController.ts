import {Router} from 'express';
const userServices = require("../services/userServices.js");

const router = Router();

router.post("/login",async (req, res) => {
    const{email, password} = req.body;
    const result =await userServices.loginUser(email,password)

    if (result.ok) {
        res.status(200).send({
            mensaje: result.mensaje,
            usuario: result.usuario
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

    if (result.ok) {
        res.status(200).send({
            mensaje:result.mensaje,
        });
    } else{
        res.status(500).send({
            mensaje: result.mensaje,
        });

    }
});

router.post('/checkCode', async (req, res) => {
    const email = req.body.email.trim();
    const code = req.body.codigo;
    const result = await userServices.verificarCodigo(email,code)

    if (result.ok) {
        res.status(200).send({
            mensaje:result.mensaje,
        });
    } else{
        res.status(500).send({
            mensaje: result.mensaje,
        });

    }

});
export default router;
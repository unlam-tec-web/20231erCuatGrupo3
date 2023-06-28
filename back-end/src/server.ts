import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productController from "./controllers/productController";
import categoryController from "./controllers/categoryController";
import userController from "./controllers/userController";
import {dbConnect} from "../config/database-config";
import router from "./controllers/userController";
const {userServices} = require("./services/userServices");
dbConnect();

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/products",productController);
app.use("/api/categories",categoryController);
app.use("/api/users",userController);

app.post("api/users/login",async (req, res) => {
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

app.post("api/users/register", async (req, res) => {
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

app.post('api/users/checkCode', async (req, res) => {
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

const port = 5000;
app.listen(port, () => {
  console.log("served on http://localhost:" + port);
});

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productController from "./controllers/productController";
import categoryController from "./controllers/categoryController";
import userController from "./controllers/userController";
import cartController from "./controllers/cartController";

import {dbConnect} from "../config/database-config";
import router from "./controllers/productController";
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
app.use("/api/cart",cartController);


const port = 5000;
app.listen(port, () => {
  console.log("served on http://localhost:" + port);
});

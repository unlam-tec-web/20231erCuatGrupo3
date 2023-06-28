import express from "express";
import cors from "cors";
import { categories, products } from "./pretend-products";
const bodyParser = require("body-parser");
const userServices = require("./services/userServices");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/categories", (req, res) => {
  res.send(categories);
});

app.get("/api/products/search/:searchedProduct", (req, res) => {
  const searchedProduct = req.params.searchedProduct;
  const product = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchedProduct.toLowerCase())
    )
    .slice(0, 5);

  res.send(product);
});

app.get("/api/products/category/:searchedCategoryId", (req, res) => {
  const searchedCategoryId = req.params.searchedCategoryId;
  const product = products.filter((p) => p.category == searchedCategoryId);

  res.send(product);
});

app.get("/api/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = products.find((p) => p.id == productId);

  res.send(product);
});

app.post("/api/users/login",async (req, res) => {
  const{email, password} = req.body;
  const result = await userServices.loginUser(email,password)
  
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

app.post("/api/users/register", async (req, res) => {
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


app.post('/api/users/checkCode', async (req, res) => {
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

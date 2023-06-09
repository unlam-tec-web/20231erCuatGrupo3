import express from "express";
import cors from "cors";
import {categories, products} from "./pretend-products";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/products", (req,res) => {
    res.send(products);
})

app.get("/api/categories", (req,res) => {
    res.send(categories);
})

app.get("/api/products/search/:searchedProduct", (req,res) => {
    const searchedProduct = req.params.searchedProduct;
    const product = products
        .filter(product => product.name.toLowerCase()
        .includes(searchedProduct.toLowerCase()));

    res.send(product);
})

app.get("/api/products/category/:searchedCategory", (req,res) => {
    const searchedCategory = req.params.searchedCategory;
    const product = products.filter(p => p.type?.includes(searchedCategory));

    res.send(product);
})

app.get("/api/products/:productId", (req,res) => {
    const productId = req.params.productId;
    const product = products.find(p => p.id == productId);

    res.send(product);
})

const port = 5000;
app.listen(port,() => {
    console.log("served on http://localhost:" + port);
});
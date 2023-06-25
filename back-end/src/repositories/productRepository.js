const dbPromise =  await require("../../config/db");

const getProducts = async () => {


    return dbPromise.collection("products");
}

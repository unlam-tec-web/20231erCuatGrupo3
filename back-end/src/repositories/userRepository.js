const dbPromise = require("../../config/db");

const getUserByEmail = async (emailRegistro) => {
const db = await dbPromise;
const users = db.collection("users");
const user= await users.findOne({email:emailRegistro});
return user;
}

const registerUser = async (user) => {
    const db = await dbPromise;
    const users = await db.collection("users");
    const userSave = await users.insertOne(user)
    return userSave;
}


module.exports = {
    getUserByEmail,registerUser
}

const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");

const registerUser = async (
  nombre,
  apellido,
  direccion,
  emailRegistro,
  passwordRegistro
) => {
  const userExist = await userRepository.getUserByEmail(emailRegistro);
  if (userExist != null) {
    return "El usuario ya existe";
  }
  let passwordEncrypted = "";
  console.log(passwordRegistro);
  await bcrypt.hash(passwordRegistro, 10).then(function (hash) {
    passwordEncrypted = hash;
  });

  const user = {
    name: nombre,
    apellido: apellido,
    direccion: direccion,
    email: emailRegistro,
    password: passwordEncrypted,
  };
  const result = await userRepository.registerUser(user);
  return result;
};

const loginUser = async (email, password) => {
  const user = await userRepository.getUserByEmail(email);
  console.log(user);
  if (user == null) {
    return {user: null,resultado:false,mensaje:'Usuario incorrecto'};
  }
  const passwordEncrypted= await bcrypt.compare(password, user.password);
  if (passwordEncrypted) {
    return {user: user,resultado:true,mensaje:'Inicio de sesión exitoso'}
  } else {
    return {user: null,resultado:false,mensaje:'Contraseña incorrecta'}; 
  }
};

module.exports = {
  registerUser,
  loginUser,
};

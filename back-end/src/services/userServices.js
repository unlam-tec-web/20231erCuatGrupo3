const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const poolData = {    
  UserPoolId : "us-east-2_N3LVCd66K", // Your user pool id here    
  ClientId : "29uvrg5rkfpq4l9lmlevo24ek2" // Your client id here
}; 

const registerUser = (nombre, apellido, direccion, email, password) => {
  return new Promise((resolve, reject) => {
    let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var attributeList = [];
    // Atributos obligatorios
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "name", Value: nombre }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "family_name", Value: apellido }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "address", Value: direccion }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
    userPool.signUp(email, password, attributeList, null, function (err, result) {
      if (err) {
        reject({
          ok: false,
          mensaje: "El usuario no logró registrarse correctamente"
        });
      }
      resolve({
        ok: true,
        mensaje: "El usuario se registró correctamente"
      });
    });
  });
};
const verificarCodigo = (email,codigo) => {
return new Promise((resolve,reject) => {
  let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var userData = {
    Username : email,
    Pool : userPool
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(codigo, true, function(err, result) {
    if (err) {
      reject({
        ok: false,
        mensaje: "El codigo ingresado es incorrecto"
      });
    }
    resolve({
      ok: true,
      mensaje: "El codigo ingresado es correcto"
    });
  });

})

} 

const loginUser = async (email, password) => {
  return new Promise((resolve,reject) => {
    let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username : email,
        Password : password,
    });
  
    var userData = {
        Username : email,
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            const tokenDecodedByAWS = result.getIdToken().payload;
            const dataUser = { //creamos un json
              _id : tokenDecodedByAWS.sub,
              userEmailVerified : tokenDecodedByAWS.email_verified,
              name : tokenDecodedByAWS.name,
              apellido : tokenDecodedByAWS.family_name,
              email: tokenDecodedByAWS.email,
              direccion:tokenDecodedByAWS.address.formatted
          };
          resolve({
            ok: true,
            mensaje: "El usuario inicio correctamente",
            usuario : dataUser
          });
        },
        onFailure: function(err) {
            reject({
              ok: false,
              mensaje: "El usuario no pudo iniciar sesion"
            });
        },
    });
  })
  
};

module.exports = {
  registerUser,
  loginUser,
  verificarCodigo
};

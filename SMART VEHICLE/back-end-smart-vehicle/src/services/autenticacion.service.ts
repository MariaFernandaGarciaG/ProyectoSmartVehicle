import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require("password-generator");
const criptoJs = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  GenerarCalve(){
    let clave = generador(12, false);
    return clave;
  }

  CifrarClave(clave:string){
    let ClaveCifrada = criptoJs.MD5(clave).toStrig();
    return ClaveCifrada;
  }
}

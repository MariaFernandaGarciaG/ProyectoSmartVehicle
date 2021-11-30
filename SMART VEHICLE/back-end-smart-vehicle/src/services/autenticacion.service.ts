import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Llaves } from '../config/llaves';
import { Asesor } from '../models';
import { AsesorRepository } from '../repositories';
const generador = require("password-generator");
const criptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(AsesorRepository)
    public asesorRepository: AsesorRepository       
    
    ) {}

  /*
   * Add service methods here
   */

  GenerarCalve(){
    let clave = generador(10, false);
    return clave;
  }

  CifrarClave(clave: string){
    let ClaveCifrada = criptoJs.MD5(clave).toString();
    return ClaveCifrada;
  }
  IdentificacionUsuario(usuario:string,clave:string){
    try {
      let p = this.asesorRepository.findOne({where:{email:usuario, clave:clave}});
      if (p) {
        return p;
      }
      return false;
      
    } catch {
      return false;
    }

  }
  GenerarTokenJMT(asesor: Asesor){
    let token = jwt.sign({
      data:{
        id: asesor.id,
        email: asesor.email,
        nombre: asesor.nombre
      }
    },
    Llaves.claveJWT
    );
    return token;
  }
  ValidarTokenJWT(token: string){
    try {
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }

}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { ClienteModule } from 'cliente/cliente.module';
import { ClienteService } from 'cliente/cliente.service';
import { cliente } from 'database/entity/cliente';
import { compare } from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { PrestServService } from 'prest_serv/prest_serv.service';


@Injectable()
export class AuthService {
  constructor(
    private clienteService: ClienteService,
    private prestServService: PrestServService,
    private jwtService: JwtService,
  ) {}

  async signIn(id: string, pass: string, tipo: string): Promise<string | null> {

    if (tipo === "cliente") {
      const user = await this.clienteService.findOne(id);
      if (!user) {
        return null; // Usuário não encontrado
      }
      const match = await compare(pass, user.senha); 
      if (match) {
        const payload = { id: user.id_cliente, tipo: tipo }; // Payload do token
        return this.jwtService.sign(payload); // Retorna o token JWT
      } else {
        return null; // Senha incorreta
      }
    } 
      else {
        const prest = await this.prestServService.findOne(id)
        if(!prest){
        return null; // Trabalhador não encontrado
      }
      const match = await compare(pass, prest.senha); 
      if (match) {
        const payload = { id: prest.id_prest, tipo: tipo }; // Payload do token
        return this.jwtService.sign(payload); // Retorna o token JWT
      } else {
        return null; // Senha incorreta
      }
    } 
  }

}

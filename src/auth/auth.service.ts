import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { ClienteModule } from 'cliente/cliente.module';
import { ClienteService } from 'cliente/cliente.service';
import { cliente } from 'database/entity/cliente';
import { compare } from "bcrypt"

@Injectable()
export class AuthService {
  constructor(private clienteService: ClienteService) {}

  async signIn(id: string, pass: string): Promise<any> {
    const userList = await this.clienteService.findOne(id);
    const user = userList[0];

    if (!user) {
      return null; // Usuário não encontrado
    }

    const match = await compare(pass, user.senha);

    if (match) {
      const { senha, ...result } = user;
      return console.log(result);
    } else {
      return console.log(null); // Senha incorreta
    }
  }
}


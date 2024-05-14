import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    constructor(nome: string,senha: string,telefone: string,email: string){
        super()
        this.nome = nome
        this.senha = senha
        this.telefone = telefone
        this.email = email

    }
}

export class ConfSenhaDto {
    confsenha: string;
  }
  
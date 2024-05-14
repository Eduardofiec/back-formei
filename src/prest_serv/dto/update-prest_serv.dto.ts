import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestServDto } from './create-prest_serv.dto';

export class UpdatePrestServDto extends PartialType(CreatePrestServDto) {
    constructor( senha: string, nome: string,cnpj_cpf: string, telefone: string, avaliacao: number){
        super()
        this.cnpj_cpf=cnpj_cpf
        this.nome=nome
        this.senha=senha
        this.telefone=telefone
        this.avaliacao=avaliacao
    }
}

export class ConfSenhaDto {
    confsenha: string;
  }
  

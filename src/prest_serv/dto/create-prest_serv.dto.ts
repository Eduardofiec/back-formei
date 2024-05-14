import { 
    IsEmail, 
    IsNotEmpty, 
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsFQDN,
    IsDate,
    Min,
    Max,
    Matches
} from 'class-validator';

/*import { IsCPF } from 'brazilian-class-validator';*/

import { Type } from 'class-transformer';
interface prest_serv{
    id_prest: string, 
    senha: string, 
    nome: string,
    cnpj_cpf: string, 
    telefone: string, 
    avaliacao:number, 
    url_prest:string
}
const regexCpfOrCnpj = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;

export class CreatePrestServDto implements prest_serv{
    id_prest:string
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    senha:string
    @Length(4,80)
    nome:string
   @Matches(regexCpfOrCnpj, {message:"não"})
    cnpj_cpf:string
    @Length(11,11)
    telefone:string
    @Length(1,2)
    avaliacao:number
    url_prest:string 
    constructor(id_prest: string, senha: string, nome: string,cnpj_cpf: string, telefone: string, avaliacao: number, url_prest:string){
        this.cnpj_cpf=cnpj_cpf
        this.id_prest=id_prest
        this.nome=nome
        this.senha=senha
        this.telefone=telefone
        this.avaliacao=avaliacao
        this.url_prest=url_prest
    }
}

import { 
    IsEmail, 
    Length,
    Matches
} from 'class-validator';

export class CreateAuthdto {
    id:string;
    @Length(4,80)
    nome : string;
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    senha : string;
    @Length(11,11)
    telefone : string;
    @IsEmail()
    email : string;
    pass: string;
    constructor(id_cliente: string,nome: string,senha: string,telefone: string,email: string){
        this.id = id_cliente
        this.nome = nome
        this.senha = senha
        this.telefone = telefone
        this.email = email
    }
}
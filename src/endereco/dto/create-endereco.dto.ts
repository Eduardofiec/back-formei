import { 
    Length,
    Max
} from 'class-validator';

export class CreateEnderecoDto {
    id_endereco: string
    @Length(8,8)
    cep: string
    @Max(4)
    numero: number
    @Length(5,30)
    cidade: string
    @Length(5,50)
    bairro: string
    constructor(id_endereco: string,cep: string,numero: number, cidade: string,bairro: string){
        this.id_endereco=id_endereco;
        this.cep=cep;
        this.numero=numero;
        this.cidade=cidade;
        this.bairro=bairro;
    } 
}

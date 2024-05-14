import { PartialType } from '@nestjs/mapped-types';
import { CreateEnderecoDto } from './create-endereco.dto';

export class UpdateEnderecoDto extends PartialType(CreateEnderecoDto) {
    constructor(id_endereco: string,cep: string,numero: number, cidade: string,bairro: string){
        super();
        this.id_endereco=id_endereco;
        this.cep=cep;
        this.numero=numero;
        this.cidade=cidade;
        this.bairro=bairro;
    } 
}

import { 
    Length
} from 'class-validator';


export class CreateCategServDto {
    id_serv: string
    @Length(10,50)
    desc_serv: string
    @Length(4,80)
    nome: string
    id_prest:string
    constructor(id_serv,desc_serv,nome, id_prest:string){
        this.id_serv=id_serv;
        this.desc_serv=desc_serv;
        this.nome=nome;
        this.id_prest = id_prest;
    }
}

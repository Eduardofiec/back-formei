import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { cliente } from "./cliente"

@Entity()
export class prest_serv {

    @PrimaryColumn()
    id_prest: string

    @Column()
    cnpj_cpf: string

    @Column()
    telefone: string

    @Column()
    avaliacao: number

    @Column()
    nome: string

    @Column()
    senha: string

    @Column()
    url_prest:string
}

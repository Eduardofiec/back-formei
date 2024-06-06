import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm"
import { agenda } from "./agenda"
import { categ_serv } from "./categ_serv"
import { cliente } from "./cliente"
import { endereco } from "./endereco"
import { post } from "./post"

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

    @OneToMany(() => post, post => post.id_post)
    id_post: post;

    @OneToOne(() => agenda, agenda => agenda.id_agenda)
    id_agenda: agenda;

    @OneToOne(() => categ_serv, categ_serv => categ_serv.id_serv)
    id_serv: categ_serv;

    @OneToOne(() => endereco, endereco => endereco.id_endereco)
    id_endereco: endereco;
}

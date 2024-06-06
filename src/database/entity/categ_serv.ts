import { Entity, PrimaryColumn, Column, OneToMany, OneToOne } from "typeorm"
import { post } from "./post";
import { prest_serv } from "./prest_serv";

@Entity()
export class categ_serv {

    @PrimaryColumn()
    id_serv: string

    @Column()
    desc_serv: string

    @Column()
    nome: string

    @OneToMany(() => post, post => post.id_post)
    categ_serv: post;

    @OneToOne(() => prest_serv, prest_serv => prest_serv.id_prest)
    id_prest: prest_serv;
}

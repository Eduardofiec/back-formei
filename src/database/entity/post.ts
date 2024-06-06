import { Entity, PrimaryColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { categ_serv } from "./categ_serv"
import { comentario } from "./comentario"
import { prest_serv } from "./prest_serv"

@Entity()
export class post {

    @PrimaryColumn()
    id_post: string

    @Column()
    cod_img: string

    @Column()
    curtidas: number

    @Column()
    isLiked: boolean

    @ManyToOne(() => categ_serv, categ_serv => categ_serv.id_serv)
    categ_serv: categ_serv;

    @OneToMany(() => comentario, comentario => comentario.conteudo)
    comentarios: comentario[];

    @ManyToOne(() => prest_serv, prest_serv => prest_serv.id_prest)
    id_prest: prest_serv;
}

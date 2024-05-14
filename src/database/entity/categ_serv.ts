import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity()
export class categ_serv {

    @PrimaryColumn()
    id_serv: string

    @Column()
    desc_serv: string

    @Column()
    nome: string
}

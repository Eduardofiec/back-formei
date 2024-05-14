import { Entity, PrimaryColumn, Column, ManyToMany } from "typeorm"
import { cliente } from "./cliente"

@Entity()
export class post {

    @PrimaryColumn()
    id_post: string

    @Column()
    cod_img: string

    @Column()
    curtidas: number
}

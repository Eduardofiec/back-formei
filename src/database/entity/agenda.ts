import { Entity, PrimaryColumn, Column, Double } from "typeorm"

@Entity()
export class agenda {

    @PrimaryColumn()
    id_agenda: string

    @Column()
    data: Date

    @Column()
    hora: Date

    @Column()
    disponivel_s_n: boolean

    @Column()
    data_exped:Date



}

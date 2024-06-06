import { Entity, PrimaryColumn, Column, Double, OneToOne } from "typeorm"
import { prest_serv } from "./prest_serv"

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

    @OneToOne(() => prest_serv, prest_serv => prest_serv.id_prest)
    id_prest: prest_serv;

}

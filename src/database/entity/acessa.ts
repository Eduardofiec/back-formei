import { Entity, PrimaryColumn, Column, Double } from "typeorm"

@Entity()
export class acessa {

    @PrimaryColumn()
    id_acessa: string

    @Column()
    data: Date

    @Column()
    hora: string

    @Column()
    endereco_mac: boolean
    
}

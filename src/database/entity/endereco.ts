import { Entity, PrimaryColumn, Column, OneToOne } from "typeorm"
import { prest_serv } from "./prest_serv"

@Entity()
export class endereco {

    @PrimaryColumn()
    id_endereco: string

    @Column()
    cep: string

    @Column()
    numero: number

    @Column()
    cidade: string

    @Column()
    bairro: string

    @OneToOne(() => prest_serv, prest_serv => prest_serv.id_prest)
    id_prest: prest_serv;
    
}

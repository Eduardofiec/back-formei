import { Entity, PrimaryColumn, Column } from "typeorm"

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

    
}

import { Entity, OneToMany, PrimaryGeneratedColumn, Column, PrimaryColumn, JoinTable} from "typeorm";
import { post } from "./post";

@Entity()
export class cliente {

    @PrimaryColumn()
    id_cliente: string

    @Column()
    nome: string

    @Column()
    senha: string

    @Column()
    telefone: string
    
    @Column()
    email: string
}

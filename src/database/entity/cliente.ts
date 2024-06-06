import { Entity, OneToMany, PrimaryGeneratedColumn, Column, PrimaryColumn, JoinTable, OneToOne} from "typeorm";
import { comentario } from "./comentario";
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

    @OneToOne(()=> comentario, comentario=> comentario.id_comentario)
    id_comentario: comentario

}

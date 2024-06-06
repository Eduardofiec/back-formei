import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, JoinTable} from "typeorm";
import { cliente } from "./cliente";
import { post } from "./post";

@Entity()
export class comentario {
   

    @PrimaryColumn()
    id_comentario:string;

    @Column()
    conteudo: string;

    @ManyToOne(() => cliente, cliente => cliente.id_cliente)
    id_cliente: cliente;
    
    @ManyToOne(() => post, post => post.id_post)
    id_post: post;

    @ManyToOne(() => post, post => post.comentarios)
    post: post;
}


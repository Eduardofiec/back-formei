import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, JoinTable} from "typeorm";
import { cliente } from "./cliente";

@Entity()
export class comentario {
   

    @PrimaryColumn()
    id_comentario:string;

    @Column()
    conteudo: string;

    @ManyToOne(() => cliente, cliente => cliente.id_cliente)
    cliente: cliente;
}


export class CreateComentarioDto {
id_comentario:string

cliente:{}

conteudo:string

constructor(id_comentario:string,cliente:{},conteudo:string){
    this.cliente = cliente;
    this.conteudo = conteudo;
    this.id_comentario =id_comentario;
}
}

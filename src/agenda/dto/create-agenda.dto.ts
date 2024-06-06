import { 
    IsDate
} from 'class-validator';


import { Type } from 'class-transformer';

export class CreateAgendaDto {
    id_agenda: string
    @IsDate()
    @Type(() => Date)
    data: Date
    hora: Date
    disponivel_s_n: boolean
    data_exped:Date
    id_prest:string
    constructor(id_agenda, data, hora, disponivel_s_n, data_exped:Date,id_prest:string){
        this.id_agenda=id_agenda;
        this.data=data;
        this.hora=hora;
        this.disponivel_s_n=disponivel_s_n;
        this.data_exped=data_exped;
        this.id_prest = id_prest;
    }
}

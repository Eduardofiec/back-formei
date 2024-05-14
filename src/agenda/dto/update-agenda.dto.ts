import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendaDto } from './create-agenda.dto';

export class UpdateAgendaDto extends PartialType(CreateAgendaDto) {
    constructor(id_agenda: string, data: Date, hora: Date, disponivel_s_n: boolean, data_exped:Date){
        super()
        this.id_agenda=id_agenda;
        this.data=data;
        this.hora=hora;
        this.disponivel_s_n=disponivel_s_n;
        this.data_exped=data_exped;
    }
}

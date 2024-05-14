import { 
    Length, 
    IsDate,

} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateAcessaDto {
    id_acessa: string
    @IsDate()
    @Type(() => Date)
    data: Date
    hora:string
    @Length(20,90)
    endereco_mac: boolean
    constructor(id_acessa: string,data: Date,hora: string, endereco_mac: boolean){
        this.id_acessa=id_acessa;
        this.data=data;
        this.hora=hora;
        this.endereco_mac=endereco_mac;
    }
}

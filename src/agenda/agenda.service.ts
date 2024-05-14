import { Injectable } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { AppDataSource } from '../database/data-source';
import { agenda } from '../database/entity/agenda';
import {v4} from 'uuid'

@Injectable()
export class AgendaService {
  repo=AppDataSource.getRepository(agenda)
  async create(createAgendaDto: CreateAgendaDto) {
    let create = createAgendaDto;
    create.id_agenda = v4();
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: string) {
    return await this.repo.findBy({
      id_agenda:id
    });
  }

  async update(id: string, updateAgendaDto: UpdateAgendaDto) {
    let update=updateAgendaDto;
    update.id_agenda=id;
    return this.repo.save(update)
  }

  async remove(id: string) {
    let remove = await this.repo.findOneBy({
      id_agenda:id
    })
    return this.repo.remove(remove);
  }
}

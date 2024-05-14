import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestServService } from './prest_serv.service';
import { CreatePrestServDto } from './dto/create-prest_serv.dto';
import { ConfSenhaDto, UpdatePrestServDto } from './dto/update-prest_serv.dto';

@Controller('prest-serv')
export class PrestServController {
  constructor(private readonly prestServService: PrestServService) {}

  @Post()
  create(@Body() createPrestServDto: CreatePrestServDto) {
    return this.prestServService.create(createPrestServDto);
  }

  @Get()
  findAll() {
    return this.prestServService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestServService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestServDto: UpdatePrestServDto, @Body() ConfSenhaDto:ConfSenhaDto) {
    return this.prestServService.update(id, updatePrestServDto, ConfSenhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestServService.remove(id);
  }
}

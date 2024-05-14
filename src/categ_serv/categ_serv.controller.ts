import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategServService } from './categ_serv.service';
import { CreateCategServDto } from './dto/create-categ_serv.dto';
import { UpdateCategServDto } from './dto/update-categ_serv.dto';

@Controller('categ-serv')
export class CategServController {
  constructor(private readonly categServService: CategServService) {}

  @Post()
  create(@Body() createCategServDto: CreateCategServDto) {
    return this.categServService.create(createCategServDto);
  }

  @Get()
  findAll() {
    return this.categServService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categServService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategServDto: UpdateCategServDto) {
    return this.categServService.update(id, updateCategServDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categServService.remove(id);
  }
}

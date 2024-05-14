import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcessaService } from './acessa.service';
import { CreateAcessaDto } from './dto/create-acessa.dto';
import { UpdateAcessaDto } from './dto/update-acessa.dto';

@Controller('acessa')
export class AcessaController {
  constructor(private readonly acessaService: AcessaService) {}

  @Post()
  create(@Body() createAcessaDto: CreateAcessaDto) {
    return this.acessaService.create(createAcessaDto);
  }

  @Get()
  findAll() {
    return this.acessaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acessaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcessaDto: UpdateAcessaDto) {
    return this.acessaService.update(id, updateAcessaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acessaService.remove(id);
  }
}

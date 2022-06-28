import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEquipmentDto } from './dto';

@ApiTags('equipment')
@Controller('/equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @ApiOperation({ summary: 'Получить всё оборудование' })
  @ApiResponse({
    status: 200,
  })
  @ApiResponse({ status: 403, description: 'Ошибка.' })
  @Get()
  getAll(): string {
    return this.equipmentService.getAll();
  }

  @ApiOperation({ summary: 'Создание оборудования' })
  @ApiResponse({
    status: 201,
    description: 'Оборудование успешно добавлено.',
  })
  @ApiResponse({ status: 403, description: 'Ошибка.' })
  @Post()
  create(@Body() equipmentData: CreateEquipmentDto): string {
    console.log(equipmentData);
    return this.equipmentService.create();
  }
}

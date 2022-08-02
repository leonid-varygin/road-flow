import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEquipmentDto } from './dto';
import { EquipmentEntity } from './equipment.entity';

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
  //Todo решить проблему с запросом GraphQL
  getAll(): string {
    return this.equipmentService.getOne();
  }

  @ApiOperation({ summary: 'Создание оборудования' })
  @ApiResponse({
    status: 201,
    description: 'Оборудование успешно добавлено.',
  })
  @ApiResponse({ status: 403, description: 'Ошибка.' })
  @Post()
  create(@Body() equipmentData: CreateEquipmentDto): Promise<EquipmentEntity> {
    console.log(equipmentData);
    return this.equipmentService.create(equipmentData);
  }
}

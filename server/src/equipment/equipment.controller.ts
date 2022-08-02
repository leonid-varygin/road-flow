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
  getAll(id): Promise<EquipmentEntity> {
    return this.equipmentService.getOneEquipment(id);
  }

  @ApiOperation({ summary: 'Создание оборудования' })
  @ApiResponse({
    status: 201,
    description: 'Оборудование успешно добавлено.',
  })
  @ApiResponse({ status: 403, description: 'Ошибка.' })
  @Post()
  createEquipment(@Body() equipmentData: CreateEquipmentDto): Promise<EquipmentEntity> {
    return this.equipmentService.createEquipment(equipmentData);
  }
}

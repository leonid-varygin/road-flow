import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentEntity } from './equipment.entity';
import { Repository } from 'typeorm';
import { CreateEquipmentDto } from './dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(EquipmentEntity)
    private readonly equipmentRepository: Repository<EquipmentEntity>,
  ) {}

  async create(equipmentInput: CreateEquipmentDto): Promise<EquipmentEntity> {
    return await this.equipmentRepository.save({ ...equipmentInput });
  }

  async getOne(id: number): Promise<EquipmentEntity> {
    // @ts-ignore
    return await this.equipmentRepository.findOne({ id });
  }
}

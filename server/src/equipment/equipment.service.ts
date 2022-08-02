import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentEntity } from './equipment.entity';
import { Repository } from 'typeorm';
import { CreateEquipmentDto } from './dto';
import { Args, Mutation } from "@nestjs/graphql";
import { UpdateEquipmentDto } from "./dto/update-equipment.dto";

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(EquipmentEntity)
    private readonly equipmentRepository: Repository<EquipmentEntity>,
  ) {}

  async createEquipment(equipmentInput: CreateEquipmentDto): Promise<EquipmentEntity> {
    return await this.equipmentRepository.save({ ...equipmentInput });
  }

  async removeEquipment(id: number): Promise<number> {
    await this.equipmentRepository.delete({ id })
    return id
  }

  async updateEquipment(updateEquipmentDto: UpdateEquipmentDto): Promise<EquipmentEntity> {
    await this.equipmentRepository.update({ id: updateEquipmentDto.id }, { ...updateEquipmentDto })
    return await this.getOneEquipment(updateEquipmentDto.id)
  }

  async getOneEquipment(id: number): Promise<EquipmentEntity> {
    // @ts-ignore
    return await this.equipmentRepository.findOne({ id });
  }

  async getAllEquipment(): Promise<EquipmentEntity[]> {
    return await this.equipmentRepository.find()
  }

}

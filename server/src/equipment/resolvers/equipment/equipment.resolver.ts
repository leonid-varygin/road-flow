import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EquipmentService } from '../../equipment.service';
import { EquipmentEntity } from '../../equipment.entity';
import { CreateEquipmentDto } from '../../dto';
import { UpdateEquipmentDto } from "../../dto/update-equipment.dto";

@Resolver('Equipment')
export class EquipmentResolver {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Mutation(() => EquipmentEntity)
  async createEquipment(
    @Args('createEquipment') createEquipment: CreateEquipmentDto,
  ): Promise<EquipmentEntity> {
    return await this.equipmentService.createEquipment(createEquipment);
  }

  @Mutation(() => EquipmentEntity)
  async updateEquipment(@Args('updateEquipment') updateEquipmentDto: UpdateEquipmentDto): Promise<EquipmentEntity> {
    return await this.equipmentService.updateEquipment(updateEquipmentDto)
  }

  @Mutation(() => Number)
  async removeEquipment(@Args('id') id: number): Promise<number> {
    return await this.equipmentService.removeEquipment(id)
  }

  @Query(() => [EquipmentEntity])
  async getAll(): Promise<EquipmentEntity[]> {
    return await this.equipmentService.getAllEquipment();
  }

  @Query(() => EquipmentEntity)
  async getOneEquipment(@Args('id') id: number): Promise<EquipmentEntity> {
    return await this.equipmentService.getOneEquipment(id);
  }
}

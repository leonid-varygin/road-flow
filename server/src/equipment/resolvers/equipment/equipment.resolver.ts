import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EquipmentService } from '../../equipment.service';
import { EquipmentEntity } from '../../equipment.entity';
import { CreateEquipmentDto } from '../../dto';

@Resolver('Equipment')
export class EquipmentResolver {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Mutation(() => EquipmentEntity)
  async create(
    @Args('createEquipment') createEquipment: CreateEquipmentDto,
  ): Promise<EquipmentEntity> {
    return await this.equipmentService.create(createEquipment);
  }

  @Query(() => EquipmentEntity)
  async getOne(@Args('id') id: number): Promise<EquipmentEntity> {
    return await this.equipmentService.getOne({ id });
  }
}

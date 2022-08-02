import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('equipment')
export class EquipmentEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  serialNumber: string;

  @Field()
  @Column()
  invertNumber: string;

  @Field()
  @Column()
  passportId: string;

  @Field()
  @Column()
  state: string;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  buyDate: Date;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  certificationDate: Date;
  @Field()
  @Column()
  certificationPeriod: string;
  @Field()
  @Column()
  quantity: number;
  @Field()
  @Column()
  visiting: boolean;
  @Field()
  @Column()
  type: string;
  @Field()
  @Column()
  typeTest: string;
  @Field()
  @Column()
  desc: string;

  // @BeforeUpdate()
  // updateTimestamp() {
  //   this.updated = new Date();
  // }
}

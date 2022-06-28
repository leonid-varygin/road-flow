import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('equipment')
export class EquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  serialNumber: string;

  @Column()
  invertNumber: string;

  @Column()
  passportId: string;

  @Column()
  state: string;

  @Column()
  location: string;

  @Column()
  buyDate: string;

  @Column()
  certificationDate: string;

  @Column()
  certificationPeriod: string;

  @Column()
  quantity: string;

  @Column()
  visiting: boolean;

  @Column()
  type: string[];

  @Column()
  typeTest: string[];

  @Column()
  desc: string;

  //   export class CreateEquipmentDto {
  //   readonly name: string;
  //   readonly serialNumber: string;
  //   readonly invertNumber: string;
  //   readonly passportId: string;
  //   readonly state: string;
  //   readonly location: string;
  //   readonly buyDate: string;
  //   readonly certificationDate: string;
  //   readonly certificationPeriod: string;
  //   readonly quantity: number;
  //   readonly visiting: false;
  //   readonly type: string[];
  //   readonly typeTest: string[];
  //   readonly desc: string;
  // }
}

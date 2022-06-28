import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  buyDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @Column()
  certificationDate: Date;

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
  desc: string[];
}

export class CreateEquipmentDto {
  readonly name: string;
  readonly serialNumber: string;
  readonly invertNumber: string;
  readonly passportId: string;
  readonly state: string;
  readonly location: string;
  readonly buyDate: string;
  readonly certificationDate: string;
  readonly certificationPeriod: string;
  readonly quantity: number;
  readonly visiting: false;
  readonly type: string[];
  readonly typeTest: string[];
  readonly desc: string;
}

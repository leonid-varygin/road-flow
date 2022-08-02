import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEquipmentDto {
  @Field()
  readonly name: string;
  @Field()
  readonly serialNumber: string;
  @Field()
  readonly invertNumber: string;
  @Field()
  readonly passportId: string;
  @Field()
  readonly state: string;
  @Field()
  readonly location: string;
  @Field()
  readonly buyDate: string;
  @Field()
  readonly certificationDate: string;
  @Field()
  readonly certificationPeriod: string;
  @Field()
  readonly quantity: number;
  @Field()
  readonly visiting: false;
  @Field()
  readonly type: string;
  @Field()
  readonly typeTest: string;
  @Field()
  readonly desc: string;
}

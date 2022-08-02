import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentEntity } from './equipment.entity';
import { EquipmentResolver } from './resolvers/equipment/equipment.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentEntity])],
  providers: [EquipmentService, EquipmentResolver],
  controllers: [EquipmentController],
})
export class EquipmentModule {}

// export class EquipmentModule implements NestModule {
//   public configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply()
//       .forRoutes(
//         { path: 'articles/feed', method: RequestMethod.GET },
//         { path: 'articles', method: RequestMethod.POST },
//         { path: 'articles/:slug', method: RequestMethod.DELETE },
//         { path: 'articles/:slug', method: RequestMethod.PUT },
//         { path: 'articles/:slug/comments', method: RequestMethod.POST },
//         { path: 'articles/:slug/comments/:id', method: RequestMethod.DELETE },
//         { path: 'articles/:slug/favorite', method: RequestMethod.POST },
//         { path: 'articles/:slug/favorite', method: RequestMethod.DELETE },
//       );
//   }
// }

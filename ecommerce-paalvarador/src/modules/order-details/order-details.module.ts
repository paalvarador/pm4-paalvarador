import { Module } from '@nestjs/common';
import { OrderDetailsController } from './order-details.controller';
import { OrderDetailsService } from './order-details.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from '../../entities/order-details.entity';
import { OrderDetailsRepository } from './order-details.respository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService, OrderDetailsRepository],
  exports: [OrderDetailsService],
})
export class OrderDetailsModule {}

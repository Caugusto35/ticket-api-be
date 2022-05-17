import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModule } from './modules/ticket.modules';

@Module({
  imports: [TicketModule, TypeOrmModule.forRoot()],
})
export class AppModule {}

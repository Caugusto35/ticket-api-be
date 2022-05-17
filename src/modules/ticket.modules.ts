import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TicketController } from "src/controller/ticket.controller";
import { TicketModel } from "src/models/ticket.model";

@Module({
    imports: [ TypeOrmModule.forFeature([TicketModel]) ],
    controllers: [ TicketController ]
})
export class TicketModule {

}
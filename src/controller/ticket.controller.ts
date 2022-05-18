import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TicketModel } from "src/models/ticket.model";
import { TicketSchema } from "src/schemas/ticket.schema";

@Controller('/ticket')
export class TicketController {
    constructor(@InjectRepository(TicketModel) private model: Repository<TicketModel>) { }

    @Post()
    public async create(@Body(ValidationPipe) body: TicketSchema): Promise<{ data: TicketModel }> {
        const ticketCreated = await this.model.save(body);
        return { data: ticketCreated };
    }

    @Get('')
    public async getAll(): Promise<{ data: TicketModel[] }> {
        const list = await this.model.find();
        return { data: list };
    }

    @Get(':cpf')
    public async get(@Param('cpf') cpf: string): Promise<{ data: TicketModel[] }> {
        const ticketOne = await this.model.find({ where: { cpf } })
        return { data: ticketOne };
    }

    @Put(':ticket')
    public async update(@Param('ticket') ticket: string, @Body() body: TicketSchema): Promise<{ data: TicketModel }> {
        await this.model.update({ ticket }, body)
        return { data: await this.model.findOne({ where: { ticket } }) };
    }

    @Delete(':ticket')
    public async delete(@Param('ticket') ticket: string): Promise<{data: string}> {
        await this.model.delete(ticket);
        return { data: 'Deletado com sucesso' };
    }
}
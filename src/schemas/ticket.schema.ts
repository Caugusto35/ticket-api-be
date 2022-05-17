import { IsString, MaxLength, MinLength } from 'class-validator';

export class TicketSchema {
    @IsString()
    @MaxLength(11)
    @MinLength(11)
    cpf: string;

    @IsString()
    event: string;

    @IsString()
    date: string;

    @IsString()
    hour: string;
}
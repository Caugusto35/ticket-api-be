import { Entity, Column, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class TicketModel {
    @Column({ length: 11 })
    cpf: string;

    @PrimaryGeneratedColumn('uuid')
    ticket: string;

    @Column()
    event: string;

    @Column()
    date: string;

    @Column()
    hour: string;
}
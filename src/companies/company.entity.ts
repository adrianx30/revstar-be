import { User } from 'src/users/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity()
export class Company {
    @PrimaryColumn()
    nit: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    telephone: number;
}
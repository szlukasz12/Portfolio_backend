import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Contacts" })
export class ContactBook {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Name: string;
    @Column()
    Tel: string;
    @Column()
    City: string;
}
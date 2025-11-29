import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Login: string;

    @Column()
    Password: string;

    @Column()
    Role: string;

    @Column()
    email: string;

    @Column()
    Name: string;

    @Column()
    Lastname: string;

    @Column()
    Lang: string;
    
    @Column()
    Adres: string;

    @Column()
    date_created: Date;
}
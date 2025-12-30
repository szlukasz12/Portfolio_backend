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

    @Column({ default: 0 })
    Login_count: number;

    @Column({ default: () => "CURRENT_TIMESTAMP" })
    date_created: Date;

    @Column({ type: 'datetime', nullable: true })
    Login_failed: Date;
}
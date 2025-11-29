import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: "App" } )
export class App {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date_created: Date;

    @Column()
    Link: string;

    @Column()
    Secure: number;

    @Column()
    Name_pl: string;

    @Column()
    Name_en: string;

    @Column()
    Description_PL: string;

    @Column()
    Description_EN: string;

    @Column()
    Role: string;

    @Column()
    External: number;

    @Column()
    Zdj_name: string;

}
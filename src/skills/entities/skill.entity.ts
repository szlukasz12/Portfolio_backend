import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Skills" })
export class Skill{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Src: string;

    @Column()
    Name_pl: string;

    @Column()
    Name_en: string;

    @Column()
    Description_pl: string;

    @Column()
    Description_en: string;
}
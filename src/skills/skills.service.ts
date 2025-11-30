import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Skill } from "./entities/skill.entity";
import { Repository } from "typeorm";

@Injectable()
export class SkillsService {
    constructor (@InjectRepository(Skill) private skillsRepository: Repository<Skill>) {}

    getSkills() {
        return this.skillsRepository.find();
    }

}
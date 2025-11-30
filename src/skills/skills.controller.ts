import { Controller, Get } from "@nestjs/common";
import { SkillsService } from "./skills.service";

@Controller("skills")
export class SkillsController {
    constructor (private skillsService: SkillsService) {}

    @Get("/list")
    getSkills() {
        return this.skillsService.getSkills();
    }
}
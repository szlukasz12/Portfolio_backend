import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { App } from "./entities/app.entity";
import { Repository } from "typeorm";
import { AccesDto } from "./dtos/acces.dto";

@Injectable()
export class AppsService {
    constructor(@InjectRepository(App) private appRepository : Repository<App> ) {}

    async getApps() {
        return await this.appRepository.find();
    }

    async checkAppAcces (body: AccesDto, role: string) {
        const app = await this.appRepository.findOneBy({Name_pl: body.app});




        console.log(app?.Role, role);

    }
}
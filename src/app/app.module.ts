import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { App } from "./entities/app.entity";
import { AppsController } from "./app.controler";
import { AppsService } from "./app.service";

@Module({
    imports: [TypeOrmModule.forFeature([App])],
    controllers: [AppsController],
    providers: [AppsService],
})
export class AppsModule {}
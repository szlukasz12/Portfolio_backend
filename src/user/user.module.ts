import { Module } from "@nestjs/common";
import { userService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [userService],

    exports: [userService],
})
export class userModule {}
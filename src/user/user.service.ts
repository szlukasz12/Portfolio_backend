import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { UserLoginDto } from "./dtos/userLogin.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class userService {
    constructor(@InjectRepository(User) private userRepository : Repository<User>) {}

    async login(body: UserLoginDto) {
        const user = await this.userRepository.findOneBy({ Login: body.Login});

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(body.Password, user.Password);

        if (isPasswordValid) {
            const { Password, ...result } = user;
            return result; 
        }

        return null;
    }

    findById(id: number) {
        return this.userRepository.findOneBy({ id });
    }
}
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { UserLoginDto } from "./dtos/userLogin.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class userService {
    constructor(@InjectRepository(User) private userRepository : Repository<User>) {}

    async setLanguage(userId: number, language: string) {
        const user = await this.userRepository.update({ id: userId }, { Lang: language });
        return user.affected || 0;
    }

    async checkLoginAttempts(Login: string) {
        const user = await this.userRepository.findOneBy({ Login: Login });
        if(!user) {
            return 0;
        }
        if(user.Login_count >= 5 && user.Login_failed && new Date().getTime() >= new Date(user.Login_failed).getTime() + 15 * 60 * 1000)
        {
            this.userRepository.update({ id: user.id }, { Login_count: 0 });
            return 0;
        }
        return user.Login_count;
    }

    async login(body: UserLoginDto) {
        const user = await this.userRepository.findOneBy({ Login: body.Login});

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(body.Password, user.Password);

        if (isPasswordValid) {
            this.userRepository.update({ id: user.id }, { Login_count: 0 });
            const { Password, ...result } = user;
            return result; 
        }
        else {
            this.userRepository.update({ id: user.id }, { Login_count: user.Login_count + 1, Login_failed: new Date() });
            return null;
        }

        return null;
    }

    async findById(id : number) {
        const user = await this.userRepository.findOneBy({ id: id });
        return user;
    }
}
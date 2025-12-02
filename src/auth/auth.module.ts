import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from "@nestjs/config"

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET', 'FALLBACK_SECRET_KEY_FOR_DEV'),
            signOptions: { expiresIn: '7d' }, 
        }),
        inject: [ConfigService],
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService],

  // Pamiętaj, aby eksportować JwtModule i/lub PassportModule, jeśli są używane w innych modułach
  exports: [JwtModule, PassportModule, JwtStrategy] 
})
export class AuthModule {}
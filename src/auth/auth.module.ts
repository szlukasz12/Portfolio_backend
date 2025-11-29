// src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy'; // Upewnij się, że ścieżka jest poprawna
import { userModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// Importuj inne komponenty (AuthService, AuthController, UserService, itd.)

@Module({
  imports: [
    PassportModule,
    // Konfiguracja JwtModule musi być zgodna z kluczem w JwtStrategy
    JwtModule.register({
      secret: 'SEKRETNYKLUCZ',
      signOptions: { expiresIn: '7d' }, // Przykładowy czas wygaśnięcia
    }),
    userModule
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService],

  // Pamiętaj, aby eksportować JwtModule i/lub PassportModule, jeśli są używane w innych modułach
  exports: [JwtModule, PassportModule, JwtStrategy] 
})
export class AuthModule {}
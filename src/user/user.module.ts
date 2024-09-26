import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig } from 'src/config';
import { JwtDecrypTools, SecretTools } from 'src/utils/internalTools';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [JwtModule.register(jwtConfig), TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, SecretTools, JwtDecrypTools],
})
export class UserModule {}

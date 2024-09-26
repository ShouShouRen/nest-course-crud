import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { JwtDecrypTools } from 'src/utils/internalTools';

@Module({
  imports: [JwtModule.register(jwtConfig), TypeOrmModule.forFeature([Course])],
  controllers: [CourseController],
  providers: [CourseService, JwtDecrypTools],
})
export class CourseModule {}

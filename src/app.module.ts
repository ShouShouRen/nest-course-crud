import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, CourseModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}

import {
  Controller,
  Get,
  Headers,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { JwtDecrypTools } from '../utils/internalTools';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DeleteCourseDto } from './dto/delete-course.dto';

@Controller('course')
export class CourseController {
  constructor(
    private readonly courseService: CourseService,
    private readonly jwtDecrypTool: JwtDecrypTools,
  ) {}

  // course api
  @Get()
  findAll(@Headers() header) {
    this.jwtDecrypTool.getDecryp(header.authorization);
    return this.courseService.findAll();
  }

  // create course api
  @Post()
  create(@Body() dto: CreateCourseDto, @Headers() header) {
    this.jwtDecrypTool.getDecryp(header.authorization);
    return this.courseService.create(dto);
  }

  // update course api
  @Put()
  update(@Body() dto: UpdateCourseDto, @Headers() header) {
    this.jwtDecrypTool.getDecryp(header.authorization);
    return this.courseService.update(dto);
  }

  // delete course api
  @Delete()
  delete(@Body() dto: DeleteCourseDto, @Headers() header) {
    this.jwtDecrypTool.getDecryp(header.authorization);
    return this.courseService.delete(dto);
  }
}

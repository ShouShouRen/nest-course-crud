import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteCourseDto {
  @IsNotEmpty({ message: 'id 限制不可為空' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    { message: 'id 限制不可為空' },
  )
  id: number;
}

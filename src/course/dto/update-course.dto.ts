import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsNotEmpty({ message: 'id 限制不可為空' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    { message: 'id 限制必須為數字' },
  )
  id: number;

  @IsString({ message: '課程名稱必須為字串' })
  title?: string;

  @IsString({ message: '課程圖片必須為字串' })
  course_img?: string;

  @IsNumber({}, { message: '課程價格必須為數字' })
  price?: number;

  @IsString({ message: '課程內容必須為字串' })
  point?: string;

  @IsString({ message: '課程類別必須為字串' })
  category?: string;
}

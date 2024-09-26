import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty({ message: '課程名稱不可為空' })
  @IsString({ message: '課程名稱必須為字串' })
  title: string;

  @IsNotEmpty({ message: '課程圖片不可為空' })
  @IsString({ message: '課程圖片必須為字串' })
  course_img: string;

  @IsNotEmpty({ message: '課程價格不可為空' })
  @IsNumber({}, { message: '課程價格必須為數字' })
  price: number;

  @IsNotEmpty({ message: '課程內容不可為空' })
  @IsString({ message: '課程內容必須為字串' })
  point: string;

  @IsNotEmpty({ message: '課程類別不可為空' })
  @IsString({ message: '課程類別必須為字串' })
  category: string;
}

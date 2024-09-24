import { IsNotEmpty, IsString } from 'class-validator';
export class RegisterUserDto {
  @IsNotEmpty({ message: '使用者名稱不可為空' })
  @IsString({ message: '使用者名稱必須為字串' })
  username: string;

  @IsNotEmpty({ message: '密碼不可為空' })
  @IsString({ message: '密碼必須為字串' })
  password: string;
}

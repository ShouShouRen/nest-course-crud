import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from './user.service';
import { JwtDecrypTools } from 'src/utils/internalTools';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtDecrypTools: JwtDecrypTools,
  ) {}

  @Post('register')
  register(@Body() dto: RegisterUserDto) {
    return this.userService.register(dto);
  }

  @Post('login')
  login(@Body() req) {
    return this.userService.login(req);
  }

  @Get('find')
  find(@Headers() header) {
    return this.userService.find(
      this.jwtDecrypTools.getDecryp(header.authorization),
    );
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import { SecretTools } from 'src/utils/internalTools';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly secretTools: SecretTools,
    private readonly jwtService: JwtService,
  ) {}

  async register({ username, password }: RegisterUserDto) {
    // 判斷是否註冊過
    const foundUser = await this.userRepository.findOneBy({ username });

    if (foundUser) {
      throw new BadRequestException('使用者已經存在');
    }

    const user = await this.userRepository.save({
      username,
      password: this.secretTools.getSecret(password),
      head_img: 'https://picsum.photos/80',
    });

    return {
      message: '註冊成功',
      data: this.jwtService.sign({ id: user.id }),
    };
  }

  async login({ username, password }) {
    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new BadRequestException('使用者不存在');
    }

    const isPasswordValid =
      user.password === this.secretTools.getSecret(password);

    if (!isPasswordValid) {
      throw new BadRequestException('密碼錯誤');
    }

    return {
      message: '登入成功',
      data: this.jwtService.sign({ id: user.id }),
    };
  }

  async find(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException('使用者不存在');
    }

    return { id: user.id, username: user.username, head_img: user.head_img };
  }
}

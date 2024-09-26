import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';

@Injectable()
export class SecretTools {
  getSecret(data: string) {
    return createHash('md5').update(data).digest('hex');
  }
}

@Injectable()
export class JwtDecrypTools {
  constructor(private readonly jwtService: JwtService) {}

  getDecryp(token: string) {
    let decodeToken: any;

    try {
      decodeToken = this.jwtService.verify(token);
    } catch (e) {
      throw new BadRequestException('請先登入', e.message);
    }

    if (!decodeToken) {
      throw new BadRequestException('請先登入');
    }

    if (decodeToken.exp - decodeToken.iat < 0) {
      throw new BadRequestException('登入逾時');
    }

    return decodeToken.id;
  }
}

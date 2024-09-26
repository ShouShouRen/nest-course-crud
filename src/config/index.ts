import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

ConfigModule.forRoot({
  isGlobal: true,
});

const configService = new ConfigService();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: configService.get<string>('MYSQL_HOST'),
  port: +configService.get<string>('MYSQL_PORT'),
  username: configService.get<string>('MYSQL_USER'),
  password: configService.get<string>('MYSQL_PASSWORD'),
  database: configService.get<string>('MYSQL_DATABASE'),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  autoLoadEntities: true,
  synchronize: true,
};

export const jwtConfig: JwtModule = {
  secret: configService.get<string>('JWT_SECRET'),
  signOptions: { expiresIn: '1h' },
  global: true,
};

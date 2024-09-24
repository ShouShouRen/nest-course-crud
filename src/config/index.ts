import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

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

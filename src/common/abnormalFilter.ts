import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class AbnormalFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const message =
      exception.getResponse().message || exception.getResponse().error;
    response.status(status).json({
      code: status,
      data: null,
      message,
    });
  }
}

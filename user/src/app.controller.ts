import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { of, delay } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong from user service').pipe(delay(1000));
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

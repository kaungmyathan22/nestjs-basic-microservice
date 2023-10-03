import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong from auth service').pipe(delay(1000));
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { map, zip } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('auth')
  getHello() {
    return this.appService.pingAuthService();
  }
  @Get('user')
  pingUser() {
    return this.appService.pingUserService();
  }

  @Get('/ping-all')
  pingAll() {
    return zip(
      this.appService.pingUserService(),
      this.appService.pingAuthService(),
    ).pipe(
      map(([pongServiceA, pongServiceB]) => ({
        pongServiceA,
        pongServiceB,
      })),
    );
  }
}

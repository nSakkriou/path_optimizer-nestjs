import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("home/index")
  home(){
  }

  @Get("/adeona")
  @Render("adeona/index")
  adeona(){
  }
  
  @Get("/documentation")
  @Render("documentation/index")
  docs(){
  }

}

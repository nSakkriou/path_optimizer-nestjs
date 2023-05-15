import { Body, Controller, Get } from '@nestjs/common';
import { BuildService } from './build.service';
import { SessionTokenDTO } from './dto/session_token.dto';

@Controller('build')
export class BuildController {
    constructor(private readonly buildService: BuildService){}

    @Get()
    build(@Body() body: SessionTokenDTO){
        return this.buildService.build(body.session_token)
    }
}

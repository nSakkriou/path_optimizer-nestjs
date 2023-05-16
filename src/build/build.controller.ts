import { Query, Controller, Get } from '@nestjs/common';
import { BuildService } from './build.service';
import { SessionTokenDTO } from './dto/session_token.dto';

@Controller('build')
export class BuildController {
    constructor(private readonly buildService: BuildService){}

    @Get()
    build(@Query() param: SessionTokenDTO){
        return this.buildService.build(param.session_token)
    }
}

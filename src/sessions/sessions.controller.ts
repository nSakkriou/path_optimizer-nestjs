import { Controller, Get, Post, Query, Delete, Body } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionTokenDTO } from './dto/session_token.dto';

@Controller('sessions')
export class SessionsController {

    constructor(private readonly sessionService: SessionsService){}

    @Get()
    getSession(@Query() param : SessionTokenDTO){
        return this.sessionService.getSession(param.session_token)
    }

    @Post()
    createSession(){
        return this.sessionService.createSession()
    }

    @Delete()
    deleteSession(@Body() body : SessionTokenDTO){
        return this.sessionService.deleteSession(body.session_token)
    }
}

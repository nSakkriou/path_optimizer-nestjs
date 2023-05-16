import { Body, Controller, Post, Get, Delete, Query } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressPostDTO } from './dto/addressPost.dto';
import { AddressDeleteGetDTO } from './dto/addressDeleteGet.dto';
import { GraphNode } from 'src/interfaces/graph_node.interface';
import { v4 as uuidv4 } from 'uuid';
import { SessionTokenDTO } from './dto/session_token.dto';

@Controller('addresses')
export class AddressesController {

    constructor(private readonly addressesService: AddressesService){}

    @Post()
    addAddress(@Body() body: AddressPostDTO){

        const node: GraphNode = {
            id : uuidv4(),
            ...body
        }
        
        return this.addressesService.addAddress(body.session_token, node)
    }

    @Get()
    getAddress(@Query() param : AddressDeleteGetDTO){
        return this.addressesService.getAddress(param.session_token, param.address_id)
    }

    @Delete()
    deleteAddress(@Body() body: AddressDeleteGetDTO){
        return this.addressesService.deleteAddress(body.session_token, body.address_id)
    }
    
    // Add first
    @Post("/first-address")
    setFirstAddress(@Body() body: AddressDeleteGetDTO){        
        return this.addressesService.setFirstAddress(body.session_token, body.address_id)
    }

    @Get("/first-address")
    getFirstAddress(@Query() param : SessionTokenDTO){
        return this.addressesService.getFirstAddress(param.session_token)
    }

    @Delete("/first-address")
    deleteFirstAddress(@Body() body: SessionTokenDTO){
        return this.addressesService.deleteFirstAddress(body.session_token)
    }
    
}

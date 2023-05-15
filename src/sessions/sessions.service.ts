import { Injectable } from '@nestjs/common';
import { GlobalService } from 'src/global.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SessionsService {

    getSession(session_token: string){
        let message = {
            "action" : "get session",
            "info" : "error",
            "status" : false,
            "session" : null,
            "session_token" : null
        }
        
        const sessionExist = GlobalService.sessionExist(session_token)

        if(sessionExist.flag){
            message["info"] = "correctly found session"
            message["status"] = true
            message["session_token"] = session_token
            message.session = GlobalService.SESSION[session_token]

            return message
        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }

    }

    createSession(){
        let message = {
            "action" : "create session",
            "info" : "error",
            "status" : false,
            "session_token" : null
        }    

        try{
            const session_token = uuidv4()
            GlobalService.SESSION[session_token] = {
                "session_token" : session_token,
                "list_graph_node" : [],
                "first_graph_node": null
            }
            
            message["info"] = "correctly created"
            message["status"] = true
            message["session_token"] = session_token

            return message
        }
        catch{
            return message
        }

    }

    deleteSession(session_token: string){
        let message = {
            "action" : "delete session",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }    
        
        try{
            delete GlobalService.SESSION[session_token]

            message["info"] = "correctly deleted"
            message["status"] = true
            
            return message
        }
        catch{
            message["info"] = "session's id doesn't exists"
            return message
        }
    }


}

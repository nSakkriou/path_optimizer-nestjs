import { Graph } from "./interfaces/graph.interface"

export class GlobalService{

    static SESSION = {}

    static sessionExist(session_token: string){
        if(GlobalService.SESSION[session_token]){
            return {flag : true, session_token: GlobalService.SESSION[session_token]}
        }
        else{
            return {flag : false, session_token: null}
        }
    }


}
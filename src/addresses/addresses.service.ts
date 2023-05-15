import { Injectable } from '@nestjs/common';
import { GlobalService } from 'src/global.service';
import { GraphNode } from 'src/interfaces/graph_node.interface';

@Injectable()
export class AddressesService {


    addAddress(session_token: string, node: GraphNode){
        const sessionExist = GlobalService.sessionExist(session_token)

        let message = {
            "action" : "add address",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }

        if(sessionExist.flag){

            GlobalService.SESSION[session_token].list_graph_node.push(node)
            
            message.info = "node correctly added"
            message["node"] = node
            message.status = true

            return message
        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }

    }

    deleteAddress(session_token: string, address_id: string){
        const sessionExist = GlobalService.sessionExist(session_token)

        let message = {
            "action" : "delete address",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }

        if(sessionExist.flag){

            GlobalService.SESSION[session_token].list_graph_node = GlobalService.SESSION[session_token].list_graph_node.filter((e: GraphNode) => {e.id === address_id})
            
            message.info = "node correctly deleted"
            message.status = true
            message["node_id"] = address_id

            return message
        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }

    }

    getAddress(session_token: string, address_id: string){
        const sessionExist = GlobalService.sessionExist(session_token)

        let message = {
            "action" : "delete address",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }

        if(sessionExist.flag){

            let res = GlobalService.SESSION[session_token].list_graph_node.find((e: GraphNode) => e.id === address_id)

            if(res){            
                message.info = "node correctly getted"
                message.status = true
                message["node_id"] = address_id
                message["node"] = res
            }
            else{
                message.info = "address id doesn't exist"
            }   

            return message
        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }

    }

    // First address
    setFirstAddress(session_token: string, address_id: string){
        const sessionExist = GlobalService.sessionExist(session_token)

        let message = {
            "action" : "set first node",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }

        if(sessionExist.flag){
            let res = GlobalService.SESSION[session_token].list_graph_node.find((e: GraphNode) => e.id === address_id)

            if(res){
                GlobalService.SESSION[session_token].first_graph_node = res
                
                message.info = "first node correctly setted"
                message.status = true
                message["node_id"] = address_id
                message["first_node"] = GlobalService.SESSION[session_token].first_graph_node
            }
            else{
                message.info = "address id doesn't exists"
            }

            return message
        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }

    }

    getFirstAddress(session_token: string){
        const sessionExist = GlobalService.sessionExist(session_token)

        let message = {
            "action" : "get first node",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }

        if(sessionExist.flag){
            let res = GlobalService.SESSION[session_token].first_graph_node

            if(res){
                
                message.info = "first node getted"
                message.status = true
                message["first_node"] = res
            }
            else{
                message.status = false
                message.info = "no first node"
            }

            return message
        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }


    }


    deleteFirstAddress(session_token: string){
        const sessionExist = GlobalService.sessionExist(session_token)

        let message = {
            "action" : "delete first node",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }

        if(sessionExist.flag){
            GlobalService.SESSION[session_token].first_graph_node = null
                
            message.info = "first node deleted"
            message.status = true

            return message
        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }


    }


}

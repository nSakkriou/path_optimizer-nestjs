import { Injectable } from '@nestjs/common';
import { GlobalService } from 'src/global.service';
import { Graph } from 'src/interfaces/graph.interface';
import { GraphNode } from 'src/interfaces/graph_node.interface';

@Injectable()
export class BuildService {

    calcDistance(node1: GraphNode, node2: GraphNode){

        const deg2rad = (n: number) => {
            return n * (Math.PI/180)
        }

        const rad_node1 = {lat : deg2rad(node1.lat), lon : deg2rad(node1.lon)}
        const rad_node2 = {lat : deg2rad(node2.lat), lon : deg2rad(node2.lon)}

        const diff = {lat : rad_node2.lat - rad_node1.lat, lon : rad_node2.lon - rad_node1.lon}
        
        const calc = Math.sin(diff.lat / 2) ** 2 + Math.cos(rad_node1.lat) * Math.cos(rad_node2.lat) * Math.sin(diff.lon / 2) ** 2 
        
        const c = 2 * Math.asin(Math.sqrt(calc))
        const r = 6371

        const dist = c * r

        node1.connexion[node2.id] = dist
        node2.connexion[node1.id] = dist

        return dist
    }

    initConnexionObject(session: Graph){
        session.list_graph_node.forEach((e: GraphNode) => {
            e.connexion = {}
        })
    }

    calcAllDistance(session: Graph){
        for(let i = 0; i < session.list_graph_node.length; i ++){
            const n1 = session.list_graph_node[i]

            for(let j = 0; j < session.list_graph_node.length; j ++){
                const n2 = session.list_graph_node[j]  

                if(n1.id === n2.id){
                    break
                }

                if(Object.keys(n1.connexion).includes(n2.id)){
                    break
                }

                this.calcDistance(n1, n2)
            }
        }
    }

    createOrderedGraph(session: Graph){
        // Check if start point
        let add = session.first_graph_node

        // Ca c'est pas top, faut encore réfléchir
        if(!add){
            add = session.list_graph_node[0]
        }

        let visited_id = [add.id]
        let visited = [add]

        while(true){

            //res = sorted(add.connexion.items(), key=lambda x: x[1])
            let res: [string, number][] = Object.entries(add.connexion)
            res = res.sort((a, b) => a[1] - b[1])
            
            let flag = true

            for(let i = 0; i < res.length; i++){
                let item = res[i]

                if(!visited_id.includes(item[0])){
                    add = session.list_graph_node.find((e: GraphNode) => e.id === item[0])

                    visited_id.push(add.id)
                    visited.push(add)

                    flag = false

                    break
                }
            }

            if(flag){
                break
            }
        }

        session.ordered_graph = visited
        return visited

    }

    build(session_token: string){
        const sessionExist = GlobalService.sessionExist(session_token)

        let message = {
            "action" : "build graph",
            "info" : "error",
            "status" : false,
            "session_token" : session_token
        }

        if(sessionExist.flag){
            
            const session: Graph = GlobalService.SESSION[session_token]

            this.initConnexionObject(session)
            this.calcAllDistance(session)
            this.createOrderedGraph(session)
            
            message.info = "build correctly made"
            message.status = true
            message["ordered_graph"] = session.ordered_graph
            
            return message

        }
        else{
            message["info"] = "session's id doesn't exists"
            return message
        }

    }
}

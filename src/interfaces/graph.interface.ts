import { GraphNode } from "./graph_node.interface"

export interface Graph{
    session_token: string
    list_graph_node: Array<GraphNode>
    first_graph_node: GraphNode

    ordered_graph? : Array<GraphNode>
}
export interface GraphNode{
    id: string

    lat: number
    lon: number
    
    label?: string
    city?: string
    country?: string
    name?: string
    locality?: string
    street?: string
    state?: string
    postcode?: string
    district?: string

    connexion? : {}
}
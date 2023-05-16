export class AddressPostDTO{
    readonly session_token: string
    readonly lon: number
    readonly lat: number

    readonly label?: string
    readonly city?: string
    readonly country?: string
    readonly name?: string
    readonly locality?: string
    readonly street?: string
    readonly state?: string
    readonly postcode?: string
    readonly district?: string    

}
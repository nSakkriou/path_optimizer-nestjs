// init focus de base
const COUNT_LIMIT = 3
let baseCoord = {lat : 48.85302490853688, lng: 2.3495747813496375}

navigator.geolocation.getCurrentPosition((e) => {
    baseCoord.lat = e.coords.latitude
    baseCoord.lng = e.coords.longitude
})

// Init map
let map = L.map('map').setView(baseCoord, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Init marker icon
let customIcon = {
    iconUrl: "assets/marker.png",
    iconSize:[40,40]
}
let myIcon = L.icon(customIcon)



// Init data structure
let allNode = []
let allSearchNode = []
let allMarker = []

class Node{

    static ID_GLOBAL = 0
    /**
     * @param {number} lat 
     * @param {number} lng 
     * @param {string} label 
     * @param {string} city 
     * @param {string} country 
     * @param {string} name 
     * @param {string} locality 
     * @param {string} street 
     * @param {string} state 
     * @param {string} postcode 
     * @param {string} district 
     */
    constructor(lat, lng, label, city, country, name, locality, street, state, postcode, district, id_flag=true){
        this.coordinates = {
            lng : lng,
            lat : lat
        },

        this.label  = label
        this.city = city
        this.country = country
        this.name = name
        this.locality = locality
        this.street = street
        this.state = state
        this.postcode = postcode
        this.district = district

        if(id_flag){
            Node.ID_GLOBAL += 1
            this.id = Node.ID_GLOBAL    
        }
        else{
            this.id = NaN
        }

        this.start_node = false

    }
}

/**
 * @param {number} lat 
 * @param {number} lng 
 * @param {string} label 
 * @param {string} city 
 * @param {string} country 
 * @param {string} name 
 * @param {string} locality 
 * @param {string} street 
 * @param {string} state 
 * @param {string} postcode 
 * @param {string} district 
 * @returns {Node}
 */
function createNode(lat, lng, label, city, country, name, locality, street, state, postcode, district, id_flag = true){
    const n = new Node(lat, lng, label, city, country, name, locality, street, state, postcode, district, id_flag)
    return [n, n.id]
}

/**
 * @param {number} lat 
 * @param {number} lng 
 * @param {string} label 
 * @param {string} city 
 * @param {string} country 
 * @param {string} name 
 * @param {string} locality 
 * @param {string} street 
 * @param {string} state 
 * @param {string} postcode 
 * @param {string} district 
 * @returns {Node}
 */
function addNode(lat, lng, label, city, country, name, locality, street, state, postcode, district){
    const data = createNode(lat, lng, label, city, country, name, locality, street, state, postcode, district)
    allNode.push(data[0])

    return data[1]
}

function addCreatedNode(node){
    allNode.push(node)
}

function deleteNode(id){
    allNode = allNode.filter((node) => node.id !== id)
}

function findNode(id){
    return allNode.find((node) => node.id == id)
}

// ------

function addSearchNode(node){
    allSearchNode.push(node)
}

function cleanSearchNode(){
    allSearchNode = []
}

function findSearchNode(id){
    return allSearchNode.find((node) => node.id == id)
}

// Init click event on map

map.on("click", (e) => {    
    
    const clickMapAction = async () => {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${e.latlng.lat}&lon=${e.latlng.lng}`);
        const myJson = await response.json(); //extract JSON from the http response
        
        const data =  myJson.features[0]

        const info = [
            data.geometry.coordinates[1], 
            data.geometry.coordinates[0],
            data.properties.geocoding.label,
            data.properties.geocoding.city,
            data.properties.geocoding.country,
            data.properties.geocoding.name,
            data.properties.geocoding.locality,
            data.properties.geocoding.street,
            data.properties.geocoding.state,
            data.properties.geocoding.postcode,
            data.properties.geocoding.district,
        ]
        
        const id = addNode(...info)

        createMarker(id)
        showMarkers()
    }

    clickMapAction()
})

const createMarker = (id, searchListFlag=false) => {
    let data

    if(searchListFlag){
        data = findSearchNode(id)
    }
    else{
        data = findNode(id)
    }

    let marker = L.marker(data.coordinates, {icon: myIcon})

    let popup = L.popup()
    popup = popup.setContent(data.name)

    marker.bindPopup(popup)

    allMarker.push(marker)
    marker.addTo(map)
}

function showMarkers(){
    const markersWrapper = document.getElementById("markers-list")
    
    while(markersWrapper.firstChild){
        markersWrapper.removeChild(markersWrapper.lastChild)
    }


    allNode.forEach(node => {
        let li = document.createElement("li")
        li.classList.add("marker-li")
        
        // Text
        let p = document.createElement("p")

        if(node.name){
            p.textContent = node.name
        }
        else{
            p.textContent = node.label
        }

        li.appendChild(p)
        
        // Btn delete
        let delBtn = document.createElement("span")
        delBtn.classList.add("fa")
        delBtn.classList.add("fa-trash")
        delBtn.dataset.id = node.id

        delBtn.addEventListener("click", (e) => {
            e.preventDefault()

            deleteNode(parseInt(e.target.dataset.id))
            showMarkers()

        })

        li.appendChild(delBtn)

        // Btn fav
        let favBtn = document.createElement("span")
        favBtn.classList.add("fa")
        favBtn.classList.add("fa-star")

        if(node.start_node){
            favBtn.classList.add("checked")
        }
        favBtn.dataset.id = node.id

        favBtn.addEventListener("click", (e) => {
            e.preventDefault()
            
            allNode.forEach(n => {
                if(!node.start_node){
                
                    n.start_node = false
                
                    if(n.id === node.id){
                        n.start_node = true
                    }          
                }
                else{
                    n.start_node = false
                }
            })

            document.querySelectorAll(".fa-star").forEach(s => {
                if(parseInt(s.dataset.id) === node.id && node.start_node){
                    s.classList.add("checked")
                }
                else{
                    s.classList.remove("checked")
                }
            })

        })

        li.appendChild(favBtn)


        markersWrapper.appendChild(li)
    })
}

// Recherche
document.getElementById("btn-search").addEventListener("click", (e) =>{
    let user_input = document.getElementById("search-input").value

    const searchAction = async () => {
        const response = await fetch(`https://nominatim.openstreetmap.org/search/${user_input}?format=json`)
        let search_response_json = await response.json()

        const searchNodeList = []

        let count = 0
        search_response_json = search_response_json.filter(n => {
            if(count <= COUNT_LIMIT){
                count ++
                return n
            }
        })

        urlList = search_response_json.map(node => `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${node.lat}&lon=${node.lon}`)

        // Result show
        cleanSearchNode()
        const result = document.getElementById("result")

        while(result.firstChild){
            result.removeChild(result.lastChild)
        }

        const createLabel = (node) => {
            
            let div = document.createElement("div")

            let p = document.createElement("p")
            let btn = document.createElement("button")
            btn.textContent = "Ajouter"
            btn.dataset.id = node.id

            if(node.name){
                p.textContent = node.name
            }
            else{
                p.textContent = node.label
            }
            
            div.appendChild(p)
            div.appendChild(btn)

            result.appendChild(div)

            btn.addEventListener("click", (e) => {
                addCreatedNode(findSearchNode(e.target.dataset.id))
                createMarker(e.target.dataset.id)
                showMarkers()
            })
        }    
        // -------


        await urlList.map(url => fetch(url)
        .then(res => res.json())
        .then(data => {
            data =  data.features[0]
    
            const info = [
                data.geometry.coordinates[1], 
                data.geometry.coordinates[0],
                data.properties.geocoding.label,
                data.properties.geocoding.city,
                data.properties.geocoding.country,
                data.properties.geocoding.name,
                data.properties.geocoding.locality,
                data.properties.geocoding.street,
                data.properties.geocoding.state,
                data.properties.geocoding.postcode,
                data.properties.geocoding.district,
            ]
            
            const n = createNode(...info)[0]

            addSearchNode(n)

            return n
        })
        .then(n => {
            createLabel(n)
        }))

    }
    searchAction()
})

// API

// Init session
class API {

    static URL = "http://localhost:8888"
    static URL_SESSION = API.URL + "/sessions"
    static URL_ADDRESS = API.URL + "/addresses"
    static URL_FIRST_ADDRESS = API.URL_ADDRESS + "/first-address"
    static URL_BUILD = API.URL + "/build"

    static HEADERS = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }


    constructor(){

        // Init Session
        (async() => {
            return fetch(API.URL_SESSION, {
                method: "POST",
                headers: API.HEADERS
            })
            .then((res) => res.json())
            .then((res) => {
                this.session_token = res.session_token

                this.QUERY_PARAM_SESSION_TOKEN = `?session_token=${this.session_token}`

                return res.session_token
            })
        })()    
    }

    getSession(){
        const url = API.URL_SESSION + this.QUERY_PARAM_SESSION_TOKEN
        fetch(url, {
            method: "GET",
            headers: API.HEADERS            
        })
        .then((res) => res.json())
    }
    
    // Address - Node
    async addNode(node){
        let body = []

        body.push(JSON.stringify({
            lon : node.coordinates.lng,
            lat : node.coordinates.lat,
            label : node.label,
            city : node.city,
            country: node.country,
            name: node.name,
            locality: node.locality,
            street: node.street,
            state: node.state,
            postcode: node.postcode,
            district: node.district,

            session_token: this.session_token
        }))

        const res = await fetch(API.URL_ADDRESS, {
            method: "POST",
            headers: API.HEADERS,
            body: body
        })

        const node_json = await res.json()

        if(node.start_node){
            this.addFirstAddress(node_json.node.id)
        }
        
        return node_json.node.id
    }

    deleteNode(node_id){
        fetch(API.URL_ADDRESS, {
            method: "DELETE",
            headers: API.HEADERS,
            
            body: JSON.stringify({
                session_token: this.session_token,
                address_id: node_id
            })
        })
        .then((res) => res.json())
    }

    getNode(node_id){
        const url = API.URL_ADDRESS + this.QUERY_PARAM_SESSION_TOKEN + `&address_id=${node_id}`

        fetch(url, {
            method: "GET",
            headers: API.HEADERS
        })
        .then((res) => res.json())

    }

    // Start Node
    addFirstAddress(node_id){
        fetch(API.URL_FIRST_ADDRESS, {
            method: "POST",
            headers: API.HEADERS,
            
            body: JSON.stringify({
                session_token: this.session_token,
                address_id: node_id
            })
        })
        .then((res) => res.json())

    }

    deleteFirstAddress(){
        fetch(API.URL_FIRST_ADDRESS, {
            method: "DELETE",
            headers: API.HEADERS,
            
            body: JSON.stringify({
                session_token: this.session_token,
            })
        })
        .then((res) => res.json())

    }

    getFirstAddress(){
        const url = API.URL_FIRST_ADDRESS + this.QUERY_PARAM_SESSION_TOKEN

        fetch(url, {
            method: "GET",
            headers: API.HEADERS
        })
        .then((res) => res.json())

    }


    // Build
    build(){

        const url = API.URL_BUILD + this.QUERY_PARAM_SESSION_TOKEN

        return fetch(url, {
            method: "GET",
            headers: API.HEADERS,
        })
        .then((res) => res.json())
    }
}

const checkIfFav = ()=> {
    let flag = false
    allNode.forEach(n => {
        if(n.start_node){
            flag = true
        }
    })

    if(!flag){
        alert("Pas de start point")
        return false
    }

    return true
}

const api = new API()
let oldId = []

document.getElementById("btn-build").addEventListener("click", e => {
    if(checkIfFav()){

        const add = () => {
            let allAdd = []
            allNode.forEach(node => {
                allAdd.push(api.addNode(node))
            }) 
    
            Promise.all(allAdd)
            .then((res) => {
                oldId = res
                console.log(res)
                return api.build()
            })
            .then((a) => {
                console.log(a)
                document.getElementById("modal").style.display = "block"
                document.getElementById("map").style.zIndex = -1

                const ol = document.getElementById("modal-ol")

                
                a.ordered_graph.forEach((node) => {
                    const li = document.createElement("li")

                    if(node.name){
                        li.textContent = node.name
                    }
                    else{
                        li.textContent = node.label
                    }

                    ol.appendChild(li)
                })
            }) 
        }

        // Clean all node
        let allDelete = []
        oldId.forEach(id => {
            allDelete.push(api.deleteNode(id))
        })

        api.deleteFirstAddress()

        if(allDelete.length === 0){
            add()
        }
        else{
            Promise.all(allDelete)
            .then(res => {
                add()
            })
        }
    }
})

document.getElementById("modal-close-btn").addEventListener("click", (e) => {
    document.getElementById("modal").style.display = "none"
    document.getElementById("map").style.zIndex = 0
    
    const ol = document.getElementById("modal-ol")

    while(ol.firstChild){
        ol.removeChild(ol.lastChild)
    }
})
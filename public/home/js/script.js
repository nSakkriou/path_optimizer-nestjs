// Liste des projets

const projets_list = [
    {
        "name" : "Path Optimizer",
        "description" : "Api permettant de créer le chemin le plus optimisé a partir d'une liste de lieux",
        "github_url" : "https://github.com/nSakkriou/path_optimizer",
        "tags_techno" : ["Python", "Fastapi"]
    },

    {
        "name" : "Portfolio",
        "description" : "Ce même portfolio",
        "github_url" : "https://github.com/nSakkriou/portfolio-reveal",
        "tags_techno" : ["Html", "CSS", "JS", "reveal.js"]
    }
]

const add_project = (projets_list) =>{

    let projetSection = document.getElementById("project")

    let i = 1
    projets_list.forEach(projet => {
        
        let section = document.createElement("section")
        section.id = `projet-${i}`
        i ++

        let h1 = document.createElement("h1")
        h1.textContent = projet.name
        section.appendChild(h1)

        let p = document.createElement("p")
        p.textContent = projet.description
        section.appendChild(p)

        let a = document.createElement("a")
        a.textContent = "Voir le projet"
        a.href = projet.github_url
        a.classList = "link"
        section.appendChild(a)

        let tag_div = document.createElement("div")
        tag_div.className = "tag-list"

        projet.tags_techno.forEach(tag => {
            let span = document.createElement("span")
            span.className = "tag"
            span.textContent = tag
            tag_div.appendChild(span)
        })
        section.appendChild(tag_div)

        projetSection.appendChild(section)
    });
}


add_project(projets_list)


// URL des icones de la slide contact
const urls_socialmedia = {
    "github" : "https://github.com/nSakkriou",
    "twitter" : "https://twitter.com/Nasakkriou",
    "linkedin" : "https://www.linkedin.com/in/nathan-sakkriou-b3771124b/"
}

for (const [key, value] of Object.entries(urls_socialmedia)) {
    let elem = document.querySelector(`.fa-${key}`)
    elem.addEventListener("click", (e) => {
        let a = document.createElement("a")
        a.href = value
        a.click()
    })
}

// Ajout de l'année actuelle
document.getElementById("year").textContent = new Date().getFullYear();

// Ajout de l'age
function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

// Age about me
document.getElementById("age").textContent = getAge("10/17/2002")

// Title animation
let titles = document.querySelectorAll("h1")

titles.forEach(title => {
    let letters = title.textContent.split("")
    title.textContent = ""
    
    letters.forEach( letter => {
        let span = document.createElement("span")
        span.textContent = letter
        span.className = "letter-title"
        
        title.appendChild(span)
    })
})

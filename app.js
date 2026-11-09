const BODY = document.querySelector("body")
const URL_API = "https://ghibliapi.vercel.app/films"

async function createCard() {
    const CONTAINER = document.createElement("div")
    try {
        const movies = await getMovies()

        movies.forEach((movie) => {
            const img = document.createElement("img")
            img.src = movie.image
            img.style.height = "100px"
            img.style.width = "100px"
            CONTAINER.appendChild(img)
        })
    } catch (error) {
        console.log(error)
    }

    BODY.appendChild(CONTAINER)
}


async function getMovies() {
    try {
        const res = await fetch(URL_API)
        if (!res.ok) {
            throw new Error("Error! No ok")
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

createCard()
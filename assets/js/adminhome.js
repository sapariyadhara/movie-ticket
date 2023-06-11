

// Add Cinema 

const handlecinema = () => {
    window.location = "./addcinema.html"
}


// Add Movie
const handleMovie = () => {
    window.location = "./addmovie.html"
}

// Add Seat

const handleSeat = () => {
    window.location = "./addseat.html"
}

const handleCineMovi = () => {
    let getCinema = JSON.parse(localStorage.getItem("cinema"))
    let getMovie = JSON.parse(localStorage.getItem("movie"))
    console.log(getCinema);
    for(let i = 0 ; i < getCinema.length ; i ++){
        console.log(getCinema.length);
        document.getElementById("cl").innerHTML = getCinema.length
    }

    for(let i = 0 ; i < getMovie.length ; i ++){
        console.log(getMovie.length);
        document.getElementById("ml").innerHTML = getMovie.length
    }
}

window.onload = handleCineMovi
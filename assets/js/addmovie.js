let movieRef = document.getElementById("add_movie")

const handleMovie = () => {
    let mvdata = document.getElementById("movie").value 
    let decrptdata = document.getElementById("decrpt").value
      

    


    event.preventDefault()
}

movieRef.addEventListener("submit", handleMovie)

const handlegetCinema = () => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"))

    console.log("get data", getCinemaData);

    if (getCinemaData != null) {
        let mdisp = '';
        getCinemaData.map((v) => {
            mdisp += '<option value =' + v.id + '>' + v.name + '</option>'      
        })
        document.getElementById("movieN").innerHTML = mdisp
    }

}

window.onload = handlegetCinema
let movieRef = document.getElementById("add_movie")

let arr = []

const handleMovie = () => {
    let mvData = document.getElementById("movie").value 
    let decrptData = document.getElementById("decrpt").value
    let cinemaData  = document.getElementById("cinemaN").value
    let timeData = document.getElementsByName("time")
    let pesterData = document.getElementById("imgP").value
    let movieRnd = Math.floor(Math.random() * 100);
      
    let timeM = []
    
    for(let i = 0 ; i < timeData.length ; i++){
        timeM.push(timeData[i].value)
    }

    arr.push({
        id : movieRnd,
        mName : mvData,
        decrpt : decrptData,
        Cname : cinemaData ,
        time : timeM,
        poster : pesterData,
    })

    console.log("time" ,timeData);
    console.log(arr);
    
    let trElem = document.createElement("tr")
    
    let mvtd = document.createElement("td")
    let dectd = document.createElement("td")
    let cinetd = document.createElement("td")
    let timetd = document.createElement("td")
    let pstd = document.createElement("td")

    let rBtntd = document.createElement("td")
    let eBtntd = document.createElement("td")
    let rbtnElm = document.createElement("button")
    let ebtnElm = document.createElement("button")

    rbtnElm.setAttribute("onclick", "handleRemove()")
    ebtnElm.setAttribute("onclick", "handleEdit()")

    let mvText = document.createTextNode(mvData)
    let deText = document.createTextNode(decrptData)
    let cineText = document.createTextNode(cinemaData)
    let timeText = document.createTextNode(timeM)
    let psText = document.createTextNode(pesterData)

    let rbtext = document.createTextNode("X");
    let ebtext = document.createTextNode("Edit");

    trElem.appendChild(mvtd)
    trElem.appendChild(dectd)
    trElem.appendChild(cinetd)
    trElem.appendChild(timetd)
    trElem.appendChild(pstd)

    rBtntd.appendChild(rbtnElm)
    eBtntd.appendChild(ebtnElm)

    mvtd.appendChild(mvText)
    dectd.appendChild(deText)
    cinetd.appendChild(cineText)
    timetd.appendChild(timeText)
    pstd.appendChild(psText)

    rbtnElm.appendChild(rbtext)
    rbtnElm.appendChild(ebtext)

    let trmData = document.getElementById("trMovie")
    trmData.appendChild(trElem)



   
   localStorage.setItem("movie", JSON.stringify(arr))

    event.preventDefault()
}



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


movieRef.addEventListener("submit", handleMovie)
window.onload = handlegetCinema






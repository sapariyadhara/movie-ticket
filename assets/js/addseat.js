let cinemaNRef = document.getElementById("cinemaN")
let movieRef = document.getElementById("movieN")
let enterSeatRef = document.getElementById("enterSeat")

let uid = null

let sArr = []

const handleChangeCinema = () => {
    console.log("handleChangeCinema");

    let getMovieData = JSON.parse(localStorage.getItem("movie"))
    console.log("get movie", getMovieData);
    let mid = document.getElementById("cinemaN").value

    let sMovie = getMovieData.filter((v) => v.Cname == mid)
    console.log(sMovie);

    if (sMovie != null) {
        let disp = '<option value="0">  Select Movie   </option>'
        sMovie.map((v) => {
            disp += '<option value= ' + v.mid + '>' + v.mName + '</option>'
        })
        document.getElementById("movieN").innerHTML = disp;

    }

}

const handlegetCinema = () => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get data", getCinemaData);

    if (getCinemaData != null) {
        let mdisp = '<option value="0">  Select Cinema   </option>';
        getCinemaData.map((v) => {
            mdisp += "<option value =" + v.cid + ">" + v.name + "</option>";

        });
        document.getElementById("cinemaN").innerHTML = mdisp;
    }

}

const handleChangeMovie = () => {
    let getMovieData = JSON.parse(localStorage.getItem("movie"))
    console.log(getMovieData);

    let tid = document.getElementById("movieN").value
    console.log(tid);


    let timeData = getMovieData.filter((v) => {
        console.log(" v.mid", v.mid);
        if (v.mid == tid) {
            return v.time
        }
    })

    if (timeData != null) {
        let dispt = '<option value="0">  Select Time   </option>'

        timeData.map((v , index) => {

            for(let i = 0 ; i < timeData[index].time.length ; i++){
             dispt += '<option>' + v.time[i] + '</option>'
            }
        })
        document.getElementById("timeM").innerHTML = dispt;

    }


    console.log(timeData);


}

const handleSelectSeat = () => {
    let cineData = document.getElementById("cinemaN").value
    let movieData = document.getElementById("movieN").value
    let timeData = document.getElementById("timeM").value
    let seatNData = document.getElementById("seatN").value


    let seatsIndex = [...seatNData].map(seatNData => [...seatNData].indexOf(seatNData));


    console.log(cineData ,movieData ,timeData , seatNData , seatsIndex);

    let rnD = Math.floor(Math.random() * 1000)

    sArr.push({
        sid : rnD ,
        cid : cineData ,
        mid : movieData ,
        time : timeData ,
        seat : seatsIndex
    })
    console.log(sArr);

    let trElem = document.createElement("tr");
    trElem.setAttribute("id", "sData-");

    let cinetd = document.createElement("td");
    let mvtd = document.createElement("td");
    let timetd = document.createElement("td");
    let seattd = document.createElement("td");
 

    let rBtntd = document.createElement("td");
    let eBtntd = document.createElement("td");
    let rbtnElm = document.createElement("button");
    let ebtnElm = document.createElement("button");

    rbtnElm.setAttribute("onclick", "handleRemove()");
    ebtnElm.setAttribute("onclick", "handleEdit()");

    let cineText = document.createTextNode(cineData);
    let mvText = document.createTextNode(movieData);
    let timeText = document.createTextNode(timeData);
    let seatText = document.createTextNode(seatNData);


    let rbtext = document.createTextNode("X");
    let ebtext = document.createTextNode("Edit");

    trElem.appendChild(cinetd);
    trElem.appendChild(mvtd);
    trElem.appendChild(timetd);
    trElem.appendChild(seattd);
  
    trElem.appendChild(rBtntd);
    trElem.appendChild(eBtntd);

    rBtntd.appendChild(rbtnElm);
    eBtntd.appendChild(ebtnElm);

    cinetd.appendChild(cineText);
    mvtd.appendChild(mvText);
    timetd.appendChild(timeText);
    seattd.appendChild(seatText);


    rbtnElm.appendChild(rbtext);
    ebtnElm.appendChild(ebtext);

    let trsData = document.getElementById("trSeats");
    trsData.appendChild(trElem);
    event.preventDefault()
}

cinemaNRef.addEventListener("change", handleChangeCinema)
movieRef.addEventListener("change", handleChangeMovie)
enterSeatRef.addEventListener("submit" , handleSelectSeat)
window.onload = handlegetCinema
let cinemaNRef = document.getElementById("cinemaN")
let movieRef = document.getElementById("movieN")
let enterSeatRef = document.getElementById("enterSeat")

let uid = null

let sArr = []
let supdate = false;

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

    let localSdata = JSON.parse(localStorage.getItem("seat"))

    console.log(localSdata);

    if(localSdata != null){
       
        let disp = '' ;
        localSdata.map(( v ) => {

        disp += '<tr id='+ "sData-" + v.sid + '> ';
        disp += '<td>' + v.cid + '</td>';
        disp += '<td>' + v.mid + '</td>';
        disp += '<td>' + v.time + '</td>';
        disp += '<td>' + v.seat.length + '</td>';
        disp += '<td>' + '<button onclick="handleRemove(' + v.sid + ')"> X </button>' + '</td>';
        disp += '<td>' + '<button onclick="handleEdit(' + v.sid + ')"> Edit </button>' + '</td>';
        disp += '</tr>';
        })
       
      
        document.getElementById("trSeats").innerHTML = disp

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

        timeData.map((v, index) => {

            for (let i = 0; i < timeData[index].time.length; i++) {
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
    let seatNData = parseInt(document.getElementById("seatN").value)

    // let seatsIndex = [...seatNData].map(seatNData => [...seatNData].indexOf(seatNData));

    let seatsIndex = new Array(seatNData + 1).join('0').split('').map(parseFloat)
    console.log(cineData, movieData, timeData, seatNData, seatsIndex);

    let rnD = Math.floor(Math.random() * 1000)

    sArr.push({
        sid: rnD,
        cid: cineData,
        mid: movieData,
        time: timeData,
        seat: seatsIndex
    })
    console.log(sArr);

    let trElem = document.createElement("tr");
    trElem.setAttribute("id", "sData-" + rnD);

    let cinetd = document.createElement("td");
    let mvtd = document.createElement("td");
    let timetd = document.createElement("td");
    let seattd = document.createElement("td");


    let rBtntd = document.createElement("td");
    let eBtntd = document.createElement("td");
    let rbtnElm = document.createElement("button");
    let ebtnElm = document.createElement("button");

    rbtnElm.setAttribute("onclick", "handleRemove(" + rnD + ")");
    ebtnElm.setAttribute("onclick", "handleEdit(" + rnD + ")");

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

    localStorage.setItem("seat", JSON.stringify(sArr))
    event.preventDefault()
}

const handleRemove = (i) => {

    let localSdata = JSON.parse(localStorage.getItem("seat"))
    console.log(localSdata);

    let remvSData = document.getElementById("sData-" + i);
    console.log(remvSData);
    remvSData.remove()

    localSdata.map((e, index) => {
        if (e.sid === i) {
            localSdata.splice(index, 1);

        }
    });
    console.log('localSdata', localSdata);

    localStorage.setItem("seat", JSON.stringify(localSdata))


}

const handleEdit = (i) => {
    let localSdata = JSON.parse(localStorage.getItem("seat"))
    supdate = true
    console.log(localSdata);

    let seatData = localSdata.filter((e, index) => e.sid === i);

    console.log(seatData[0].sid);

    uid = seatData[0].sid

    let cData = seatData[0].cid
    let mData = seatData[0].mid
    let tData = seatData[0].time
    let sData = seatData[0].seat

    console.log(cData, mData, tData, sData);

    document.getElementById("cinemaN").value = cData;
    document.getElementById("seatN").value = sData.length;

    if (supdate) {
        handleChangeCinema()
        document.getElementById("movieN").value = mData;
        handleChangeMovie()
        document.getElementById("timeM").value = tData;
    } else {
        handleUpdateData()
    }
}

const handleUpdateData = () => {
    let localSdata = JSON.parse(localStorage.getItem("seat"))

    let upCinema = document.getElementById("cinemaN").value
    let upMovie = document.getElementById("movieN").value
    let upTime = document.getElementById("timeM").value
    let upSeat = parseInt(document.getElementById("seatN").value)

    let seatsIndex = new Array(upSeat + 1).join('0').split('').map(parseFloat)

    console.log(upCinema, upMovie, upTime, upSeat);

    let perentElem = document.getElementById("sData-" + uid)

    perentElem.children[0].textContent = upCinema;
    perentElem.children[1].textContent = upMovie;
    perentElem.children[2].textContent = upTime;
    perentElem.children[3].textContent = seatsIndex.length;

    console.log(sArr, uid);

    let supData = localSdata.map((a) => {
        if (a.sid === uid) {
            return {
                sid: uid,
                cid: upCinema,
                mid: upMovie,
                time: upTime,
                seat: seatsIndex
            }
        } else {
            return a;
        }
    });

    supdate = false;
    uid = null

    localStorage.setItem("seat" , JSON.stringify(supData));

    event.preventDefault()
}

const handleDesc = () => {
    if (supdate) {
        handleUpdateData()
    } else {
        handleSelectSeat()
    }
}



cinemaNRef.addEventListener("change", handleChangeCinema)
movieRef.addEventListener("change", handleChangeMovie)
enterSeatRef.addEventListener("submit", handleDesc)
window.onload = handlegetCinema

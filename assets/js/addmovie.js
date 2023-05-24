let movieRef = document.getElementById("add_movie");

let arr = [];
let vid = null;
let update = false;



const handleMovie = () => {
    let mvData = document.getElementById("movie").value;
    let decrptData = document.getElementById("decrpt").value;
    let cinemaData = document.getElementById("cinemaN").value;
    let timeData = document.getElementsByName("time");
    let pesterData = document.getElementById("imgP").value;

    let movieRnd = Math.floor(Math.random() * 100);

    let timeM = [];

    for (let i = 0; i < timeData.length; i++) {
        let valueM = timeData[i].value
        timeM.push(valueM)
        // timeM.push(timeData[i].value);
    }

    console.log(timeM);
    arr.push({
        mid: movieRnd,
        mName: mvData,
        decrpt: decrptData,
        Cname: cinemaData,
        time: timeM,
        poster: pesterData,
    });

    console.log("time", timeData);
    console.log(arr);

    let trElem = document.createElement("tr");
    trElem.setAttribute("id", "mData-" + movieRnd);

    let mvtd = document.createElement("td");
    let dectd = document.createElement("td");
    let cinetd = document.createElement("td");
    let timetd = document.createElement("td");
    let pstd = document.createElement("td");

    let rBtntd = document.createElement("td");
    let eBtntd = document.createElement("td");
    let rbtnElm = document.createElement("button");
    let ebtnElm = document.createElement("button");

    rbtnElm.setAttribute("onclick", "handleRemove(" + movieRnd + ")");
    ebtnElm.setAttribute("onclick", "handleEdit(" + movieRnd + ")");

    let mvText = document.createTextNode(mvData);
    let deText = document.createTextNode(decrptData);
    let cineText = document.createTextNode(cinemaData);
    let timeText = document.createTextNode(timeM);
    let psText = document.createTextNode(pesterData);

    let rbtext = document.createTextNode("X");
    let ebtext = document.createTextNode("Edit");

    trElem.appendChild(mvtd);
    trElem.appendChild(dectd);
    trElem.appendChild(cinetd);
    trElem.appendChild(timetd);
    trElem.appendChild(pstd);
    trElem.appendChild(rBtntd);
    trElem.appendChild(eBtntd);

    rBtntd.appendChild(rbtnElm);
    eBtntd.appendChild(ebtnElm);

    mvtd.appendChild(mvText);
    dectd.appendChild(deText);
    cinetd.appendChild(cineText);
    timetd.appendChild(timeText);
    pstd.appendChild(psText);

    rbtnElm.appendChild(rbtext);
    ebtnElm.appendChild(ebtext);

    let trmData = document.getElementById("trMovie");
    trmData.appendChild(trElem);

    localStorage.setItem("movie", JSON.stringify(arr));

    event.preventDefault();
};

const handleRemove = (i) => {

    arr = JSON.parse(localStorage.getItem("movie"))

    let removData = document.getElementById("mData-" + i)

    arr.map((v, index) => {
        if (v.mid === i) {
            arr.splice(index, 1)
        }
    })

    console.log(arr);
    removData.remove();

    localStorage.setItem("movie", JSON.stringify(arr))

}


const handleEdit = (i) => {
    let getlMdata = JSON.parse(localStorage.getItem("movie"))
    console.log("get movie data", getlMdata);

   

    let fData = getlMdata.filter((a) => a.mid === i)
    console.log("fdata" ,fData[0]);

    let mtime = document.getElementsByName("time")
    let tdivRef = document.getElementById("addtime")


    while(tdivRef.firstChild) {
        tdivRef.removeChild(tdivRef.firstChild)
    }

    for (let i = 0; i < fData[0].time.length ; i++) {
        handleTime();
    }

    console.log("fData11 bar", fData[0]);
    for (let i = 0; i < fData[0].time.length; i++) {
        console.log("fData11", fData[0].time[i]);
        mtime[i].value = fData[0].time[i]
    }

    fData.map((v, index) => {
        if (v.mid === i) {
            document.getElementById("movie").value = fData[0].mName;
            document.getElementById("decrpt").value = fData[0].decrpt;
            document.getElementById("imgP").value = fData[0].poster;

        }
    })


}

const handleUpdatedata = () => {
    let mArr = JSON.parse(localStorage.getItem("movie"));

    let name = document.getElementById("movie").value;
    let description = document.getElementById("decrpt").value;

    let ParentElem = document.getElementById("mData-" + vid);
    ParentElem.children[0].textContent = name;
    ParentElem.children[1].textContent = description;

    index = mArr.findIndex((obj => obj.mid === vid));
    mArr[index].name = name;
    mArr[index].description = description;

    update = false;
    vid = null;
    localStorage.setItem("movie", JSON.stringify(mArr));
    event.preventDefault();

}

const handlegetCinema = () => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get data111", getCinemaData);


    if (getCinemaData != null) {
        let mdisp = "";
        getCinemaData.map((v) => {
            mdisp += "<option value =" + v.cid + ">" + v.name + "</option>";
        });
        document.getElementById("cinemaN").innerHTML = mdisp;
    }

    let getlocalMvdata = JSON.parse(localStorage.getItem("movie"))
    console.log("window get data", getlocalMvdata);


    if (getlocalMvdata != null) {
        let mdisp = ''
        getlocalMvdata.map((m) => {
            mdisp += '<tr id= "mData-' + m.mid + ' ">'
            mdisp += '<td>' + m.mName + '</td>'
            mdisp += '<td>' + m.decrpt + '</td>'
            mdisp += '<td>' + m.Cname + '</td>'
            mdisp += '<td>' + m.time + '</td>'
            mdisp += '<td>' + m.poster + '</td>'
            mdisp += '<td>' + '<button onclick="handleRemove(' + m.mid + ')"> X </button>' + '</td>'
            mdisp += '<td>' + '<button onclick="handleEdit(' + m.mid + ')"> Edit </button>' + '</td>'
            mdisp += '</tr>'
        })
        document.getElementById("trMovie").innerHTML = mdisp
    }

 
}

const handleTime = () => {
    console.log("time");

    let timeRendm = Math.floor(Math.random() * 100);
    let divElm = document.createElement("div");
    divElm.setAttribute("id", "mtData-" + timeRendm);

    let inputElem = document.createElement("input");
    inputElem.setAttribute("name", "time");
    inputElem.setAttribute("type", "time")

    let plusBtn = document.createElement("button");
    let MinBtn = document.createElement("button");

    plusBtn.setAttribute("onclick", "handlePlsbtn()")
    MinBtn.setAttribute("onclick", "handleMinbtn(" + timeRendm + ")")

    let plasText = document.createTextNode("+")
    let minText = document.createTextNode("-")

    divElm.appendChild(inputElem)
    divElm.appendChild(plusBtn)
    divElm.appendChild(MinBtn)
    plusBtn.appendChild(plasText)
    MinBtn.appendChild(minText)

    let joinDiv = document.getElementById("addtime")
    joinDiv.appendChild(divElm)

    event.preventDefault();
}

const handlePlsbtn = () => {
    handleTime();

    event.preventDefault()
}

const handleMinbtn = (i) => {
    console.log("minus btn");

    let minus = document.getElementById("mtData-" + i)
    console.log(i);
    minus.remove()
    event.preventDefault()
}


const handleDisc = () => {
    if (update) {
        handleUpdatedata();
    } else {
        handleMovie();
    }
}

movieRef.addEventListener("submit", handleDisc);
window.onload = handlegetCinema;









let movieRef = document.getElementById("add_movie");

let arr = [];



const handleMovie = () => {
    let mvData = document.getElementById("movie").value;
    let decrptData = document.getElementById("decrpt").value;
    let cinemaData = document.getElementById("cinemaN").value;
    let timeData = document.getElementsByName("time");
    let pesterData = document.getElementById("imgP").value;

    let movieRnd = Math.floor(Math.random() * 100);

    let timeM = [];

    for (let i = 0; i < timeData.length; i++) {
        timeM.push(timeData[i].value);
    }

    arr.push({
        id: movieRnd,
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
    ebtnElm.setAttribute("onclick", "handleEdit("+ movieRnd +")");

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
        if (v.id === i) {
            arr.splice(index, 1)
        }
    })
   
    console.log(arr);
    removData.remove();

    localStorage.setItem("movie", JSON.stringify(arr))

}


const handleEdit = (i) => {
    let getlMdata = JSON.parse(localStorage.getItem("movie"))
    console.log("get movie data" ,getlMdata);




 // console.log(l);

//     // let getlocalMdata = JSON.parse(localStorage.getItem("moviee"))
//     // console.log("moviedata get", getlocalMdata);

//     // // for(i=0 ; i < getlocalMdata[l].length;i++){
//     // //     console.log(l);
//     // // }
//     // console.log(rm);
//     // mupdate = true;

//     // let mdata = getlocalMdata.filter((a) => a.id === rm)
//     // console.log(mdata);

//     // muid = rm

//     let divreff =  document.getElementById("plastime")

//     while (divreff.firstChild) {
//         divreff.removeChild(divreff.firstChild)
//     }
}

const handlegetCinema = () => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));

    console.log("get data", getCinemaData);

    if (getCinemaData != null) {
        let mdisp = "";
        getCinemaData.map((v) => {
            mdisp += "<option value =" + v.id + ">" + v.name + "</option>";
        });
        document.getElementById("cinemaN").innerHTML = mdisp;
    }


    let getlocalMvdata = JSON.parse(localStorage.getItem("movie"))
    console.log("window get data", getlocalMdata);
    

    if(getlocalMvdata != null){
        let mdisp = ''
        getlocalMvdata.map((m) => {
            mdisp += '<tr id"=mData-'+ m.id + ' ">'
            mdisp += '<td>' + m.mName + '</td>'
            mdisp += '<td>' + m.decrpt + '</td>'
            mdisp += '<td>' + m.Cname + '</td>'
            mdisp += '<td>' + m.time + '</td>'
            mdisp += '<td>' + m.poster + '</td>'
            mdisp += '<td>' +  '<button onclick="handleRemove(' + m.id + ')"> X </button>' + '</td>'
            mdisp += '<td>' +  '<button onclick="handleEdit(' + m.id + ')"> X </button>' + '</td>'
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

movieRef.addEventListener("submit", handleMovie);
window.onload = handlegetCinema;









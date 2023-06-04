

const handleCinemaName = () => {
    let getMName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(getMName);

    document.getElementById("mn1").innerHTML = getMName

    let getAllMovie = JSON.parse(localStorage.getItem("movie"))
    console.log(getAllMovie);

    let getCdata = JSON.parse(localStorage.getItem("cinema"))
    console.log(getCdata);

    let cname = getAllMovie.filter((v) => v.mName === getMName)
    console.log(cname);
    let temp1 = []
    let temp = []
    // let Cname1 = getCdata.filter((v) => v.name === cname[0].Cname)
    // console.log(Cname1);

    cname.map((v) => {

        temp.push({
            cid: v.cid
        })
        console.log(temp);

        getCdata.map((m) => {
            console.log(m.cid, v.cid);
            if (m.cid == v.cid) {
                console.log(m.cid == v.cid);

                temp1.push(m)
                console.log(temp1);
                if (temp1) {
                    let disp = ''
                    temp1.map((t) => {
                        disp += ' <div id="clImg"><img src=' + '../assets/images/' + t.imageC + '></div>'
                        disp += '<div>'
                        disp += ' <h1>' + "Cinema :" + t.name + '</h1>'
                        disp += '<button onclick="handleSelectTime(' + t.cid + ')">Show Time</button>'
                        disp += '<div id= "times-' + t.cid + '"> </div>'
                        disp += '<h3>' + "Location :" + t.location + '</h3>'
                        disp += '<h3>' + "Facility :" + t.facility + '</h3>'
                        disp += '</div>'
                    })
                    document.getElementById("cList").innerHTML = disp
                }
            }
        })
    })
}

const handleSelectTime = (cid) => {
    let timeA = []

    console.log(cid);
    let movieName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(movieName);
    let allMovieData = JSON.parse(localStorage.getItem("movie"))
    console.log(allMovieData);
//    let rndm = Math.floor(Math.random() * 1000)
    let tData = allMovieData.filter((t) => t.cid == cid && t.mName == movieName)
    console.log(tData);

    if (tData) {

        timeA.push({
            time: tData[0].time
        })
        console.log("timeA", timeA);
        if (timeA) {
            let disp = ''      
            for(let i = 0 ; i < timeA[0].time.length ; i++){
                let t = timeA[0].time[i]
                console.log('i' , i , timeA[0].time[i]);
                disp += `<div><button id="time-${ timeA[0].time[i]}"  onclick="handleTime(${cid},'${timeA[0].time[i] }')">${ timeA[0].time[i] }</button></div>`            
              }
            document.getElementById("times-"+cid).innerHTML = disp
        }
    }
 
    console.log(timeA);

    

}

const handleTime = ( cid, time ) => {
    console.log(cid, time);
   
    let getTime = JSON.parse(sessionStorage.getItem("time"))
 
  
    let allMovieData = JSON.parse(localStorage.getItem("movie"))
    console.log(allMovieData);
    let getmovieName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(allMovieData ,getmovieName);
    let allSeatData = JSON.parse(localStorage.getItem("seat"))
    console.log(allSeatData);
    // let selectSeat = allSeatData.filter((s) => s.cid == cid && s.mShow == getmovieName && s.time == getTime)
    // console.log(selectSeat );

    sessionStorage.setItem("cid" , JSON.stringify(cid))
    sessionStorage.setItem("stime" , JSON.stringify(time))
    
    window.location = "./seatlist.html"

}

window.onload = handleCinemaName
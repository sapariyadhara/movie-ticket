

const handleCinemaName = () => {
    let getMName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(getMName);
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
                        disp += '<div id="times"> </div>'
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

    let tData = allMovieData.filter((t) => t.cid == cid && t.mName == movieName)
    console.log(tData);

    if (tData) {

        timeA.push({
            time: tData[0].time
        })
        if (timeA) {
            let disp = ''
            timeA.map((v) => {
                disp += '<div>' + '<button>' + v.time + '</button>' + '</div>'
            })

            // disp += '<div>' +'<button>' + v.time[1] +'</button>'+ '</div>'
            // disp += '<div>' +'<button>' + v.time[2] +'</button>'+ '</div>'
            // disp += '<div>' + v.time[1] + '</div>'

            document.getElementById("times").innerHTML = disp
        }
    }

    console.log(timeA);

}

window.onload = handleCinemaName
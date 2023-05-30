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
            console.log(m.cid , v.cid);
            if (m.cid == v.cid) {
                console.log(m.cid == v.cid);
             
                temp1.push(m)
                console.log(temp1);
                if(temp1){
                    let disp = ''
                    temp1.map((t) => {
                        disp += ' <div id="clImg"><img src=' + '../assets/images/' + t.imageC + '></div>'
                        disp += '<div>'
                        disp += ' <h1>' + t.name + '</h1>'
                        disp += '<h3>' + t.location + '</h3>'
                        disp += '<h3>' + t.facility + '</h3>'
                        disp += '</div>'
                    })
                    document.getElementById("cList").innerHTML = disp
                }
               
               
            }

        })

    })
  

}

window.onload = handleCinemaName
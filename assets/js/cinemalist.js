const handleCinemaName = () => {
    let getMName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(getMName);
    let getAllMovie = JSON.parse(localStorage.getItem("movie"))
    console.log(getAllMovie);

    let getCdata = JSON.parse(localStorage.getItem("cinema"))
    console.log(getCdata);

    let cname = getAllMovie.filter((v) => v.mName === getMName)
    console.log(cname);

    let Cname1 = getCdata.filter((v) => v.name === cname[0].Cname)
    console.log(Cname1);

    cname.map((v) => {
       
       let temp = cname
       console.log(temp[0].cid);
       
        
    })
    // Cname1.map((v) => {
       
    //         let disp = ''
    //         Cname1.map((v) => {
    //             disp += ' <div id="cImg"><img src=' + '../assets/images/' + v.imageC + '></div>'
    //             disp += '<div>'
    //             disp += ' <h1>' + v.Cname + '</h1>'
    //             disp += ' <h3>' + v.location + '</h3>'
    //             disp += ' <p>' + v.facility + '</p>'
    //             disp += '</div>'
    //         })
    //         document.getElementById("cList").innerHTML = disp
     
    // })

}

window.onload = handleCinemaName
const handleCinemaDetails  = () => {

    let getCineD = JSON.parse(localStorage.getItem("cinema"))
    console.log(getCineD);

    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    console.log(getCid);
 

    let cData = getCineD.filter((v) => v.cid === getCid)
    console.log(cData);

    if (cData ) {

        let disp = ''
        cData.map((v) => {
            disp += ' <div id="cImg"><img src=' + '../assets/images/' + v.imageC + '></div>'
            disp += '<div>'
            disp += ' <h1>' + v.name + '</h1>'
            disp += ' <h3>' + v.location + '</h3>'
            disp += ' <p>' + v.facility + '</p>'
           
            disp += '<button> Book Ticket </button>'
            disp += '</div>'
        })
        document.getElementById("cinemaD").innerHTML = disp
    }
    
}


window.onload = handleCinemaDetails
const handleCinemaDetails  = () => {

    let getCineD = JSON.parse(localStorage.getItem("cinema"))
    console.log(getCineD);

    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    console.log(getCid);
 

    let cData = getCineD.filter((v) => v.cid === getCid)
    console.log(cData);

    // if (cData ) {

    //     let disp = ''
    //     cData.map((v) => {
    //         disp += ' <div id="cImg"><img src=' + '../assets/images/' + v.imageC + '></div>'
    //         disp += '<div>'
    //         disp += ' <h1>' + v.name + '</h1>'
    //         disp += ' <h3>' + v.location + '</h3>'
    //         disp += ' <p>' + v.facility + '</p>'
           
    //         disp += '<button> Book Ticket </button>'
    //         disp += '</div>'
    //     })
    //     document.getElementById("container1").innerHTML = disp
    // }

    if (cData ) {

        let disp = ''
        cData.map((v) => {
            disp += ' <div class="imgdata"><img src=' + '../assets/images/' + v.imageC + '></div>'
            disp += '<div class="data">'
            disp += ' <h1>' + v.name + '</h1>'
            disp += ' <h1>' + v.location + '</h1>'
            disp += ' <h3>' + 'Facility : ' + v.facility + '</h3>'
            disp += ' <p>' + ' <i class="fa-solid fa-star"></i>'+ ' 8.7/10 '+ '<span>'+ '50.30K Votes ' +'<i class="fa-solid fa-angle-right "></i>'  + '</span>'+'</p>'

            disp += '<button > 2D </button>'+'<button > 3D </button>' + '<button > Hindi </button>' + '<button > English </button>'
            disp += '</div>'
        })
        document.getElementById("container1").innerHTML = disp


    }
    
}


window.onload = handleCinemaDetails
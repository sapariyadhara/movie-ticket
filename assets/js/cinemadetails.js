const handleCinemaDetails  = () => {

    let getCineD = JSON.parse(localStorage.getItem("cinema"))
    console.log(getCineD);

    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    console.log(getCid);
 

    let cData = getCineD.filter((v) => v.cid === getCid)
    console.log(cData);

    let getMoveData = JSON.parse(localStorage.getItem("movie"))
    console.log(getMoveData);

    let mData = getMoveData.filter((v) => v.cid == getCid)
    console.log(mData);

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

    if(mData){

        let mdisp = ''
        mData.map((m) => {
            mdisp += ' <swiper-slide id="sdmo">' 
            mdisp += '<button id="mbtns" onclick="handleBtnClick('+ m.mid +')">'
            mdisp += ' <div class="imgmmm"><img src=' + '../assets/images/' + m.poster + '></div>'
            mdisp += '<div class="data">'
            mdisp += ' <h1>' + 'Movie : '  + m.mName + '</h1>'
            mdisp += '</div>'
            mdisp += '</button>'
            mdisp += '</swiper-slide>'
        })
        document.getElementById("sliderM").innerHTML = mdisp
    }
    
}

const handleBtnClick = (mid) => {
    console.log(mid);
    sessionStorage.setItem("mid" , JSON.stringify(mid))

    window.location = "./moviedetails.html"

}


window.onload = handleCinemaDetails
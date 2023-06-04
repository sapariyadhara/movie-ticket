let searchRef = document.getElementById("searchC")
let searchMRef = document.getElementById("searchM")

searchM

const getCMUserSide = (data) => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get cinema", getCinemaData);

    let getMovieData = JSON.parse(localStorage.getItem("movie"));
    console.log("get movie", getMovieData);

   


    if (getCinemaData != null) {
        let disp = ''
        getCinemaData.map((v) => {
            disp += '<button  onclick="handleCinemaDetails('+ v.cid +')" >'
            disp += ' <div id=' + "data-" + v.cid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div  class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div class="advisor_thumb"><img src=' + '../assets/images/' + v.imageC + '>'
            disp += ' <div  class="social-info">' + v.name + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.location + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.facility + '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</button>'
        })
        document.getElementById("trCine").innerHTML = disp
    }

    // if (getCinemaData != null) {
    //     let disp = ''
    //     getCinemaData.map((v) => {
    //         disp += ' <div  class="swiper mySwiper">'
    //            disp += ' <div id=' + "data-" + v.cid + ' class="swiper-wrapper">'
    //         // disp += '<button  onclick="handleCinemaDetails('+ v.cid +')" >'
    //         disp += '<div class="swiper-slide"> <img src=' + '../assets/images/' + v.imageC + '>'
    //         // disp += ' <div  class=" ">' + v.name + '</div>'
    //         // disp += ' <div class="">' + v.location + '</div>'
    //         // disp += ' <div class="">' + v.facility + '</div>'
    //         disp += '</div>'
    //         // disp += '</button>'
    //          disp += ' </div>'
    //          disp += '</div>'
    //     })
    //     document.getElementById("trCine").innerHTML = disp
    // }
  
    if (getMovieData != null) {
        let disp = ''
        getMovieData.map((v) => {
            disp += '<button  onclick="handleMovieDetails('+ v.mid +')" >'
            disp += ' <div id=' + "data-" + v.mid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div class="advisor_thumb"><img src=' + '../assets/images/' + v.poster + '>'
            disp += ' <div class="social-info">' + v.mName + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.Cname + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.decrpt + '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</button>'
        })
        document.getElementById("trMovie").innerHTML = disp
    }


}

const display = (data) => {

    if (data) {
        let disp = ''
        data.map((v) => {
            disp += ' <div id=' + "data-" + v.cid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div class="advisor_thumb"><img src=' + '../assets/images/' + v.imageC + '>'
            disp += ' <div class="social-info">' + v.name + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.location + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.facility + '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</div>'
        })
        document.getElementById("trCine").innerHTML = disp
    } else {
        let disp = ''
        data.map((v) => {
            disp += ' <div id=' + "data-" + v.cid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div class="advisor_thumb"><img src=' + '../assets/images/' + v.imageC + '>'
            disp += ' <div class="social-info">' + v.name + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.location + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.facility + '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</div>'
        })
        document.getElementById("trCine").innerHTML = disp
    }
}

const handleSearchCinema = () => {

    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get data111", getCinemaData);

    let input = document.getElementById('searchC').value

    console.log(input);

    let fData = getCinemaData.filter((v) =>
        v.name.toLowerCase().includes(input.toLowerCase()) ||
        v.location.toLowerCase().includes(input.toLowerCase()) ||
        v.facility.toLowerCase().includes(input.toLowerCase())
    )

    console.log(fData);


    display(fData);

}

const handleSearchMovie = () => {
    let getMovieData = JSON.parse(localStorage.getItem("movie"));
    console.log("get movie", getMovieData);

    let input = document.getElementById('searchM').value

    console.log(input);
    let mData = getMovieData.filter((v) =>
        v.mName.toLowerCase().includes(input.toLowerCase()) 
       
    )

    console.log(mData);


    display1(mData);


}

const display1 = (data1) => {
    if (data1) {
        let disp = ''
        data1.map((v) => {
            disp += ' <div id=' + "data-" + v.mid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div class="advisor_thumb"><img src=' + '../assets/images/' + v.poster + '>'
            disp += ' <div class="social-info">' + v.mName + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.Cname + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.decrpt + '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</div>'
        })
        document.getElementById("trMovie").innerHTML = disp
    } else {
        let disp = ''
        data1.map((v) => {
            disp += ' <div id=' + "data-" + v.mid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div class="advisor_thumb"><img src=' + '../assets/images/' + v.poster + '>'
            disp += ' <div class="social-info">' + v.mName + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.Cname + '</div>'
            disp += ' <div class="single_advisor_details_info">' + v.decrpt + '</div>'
            disp += '</div>'
            disp += '</div>'
            disp += '</div>'
        })
        document.getElementById("trMovie").innerHTML = disp
    }
}

const handleMovieDetails  = (mid) => {
  let mdet = JSON.parse(localStorage.getItem("movie"))
  console.log(mdet );
    // let movieName = JSON.parse()
  

    sessionStorage.setItem("mid" , JSON.stringify(mid))
  

    window.location = "./moviedetails.html"
}

const handleCinemaDetails = (cid) => {
    let cdet = JSON.parse(localStorage.getItem("cinema"))


    sessionStorage.setItem("cid" , JSON.stringify(cid))
    console.log(cdet , cid);

    window.location = "./cinemadetails.html"

}

searchRef.addEventListener("keyup", handleSearchCinema)
searchMRef.addEventListener("keyup", handleSearchMovie)
window.onload = getCMUserSide





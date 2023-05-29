let searchRef = document.getElementById("searchC")

const getCMUserSide = (data) => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get cinema", getCinemaData);

    let getMovieData = JSON.parse(localStorage.getItem("movie"));
    console.log("get movie", getMovieData);



    console.log(data);

    if(getCinemaData != null){
        let disp = ''
        getCinemaData.map((v) => {
            disp += ' <div id='+ "data-" + v.cid + ' class="col-12 col-sm-6 col-lg-3">'
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

    console.log(data);

    if(getMovieData != null){
        let disp = ''
        getMovieData.map((v) => {
            disp += ' <div id='+ "data-" + v.mid + ' class="col-12 col-sm-6 col-lg-3">'
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

const display = (data) => {

    if(data){
        let disp = ''
        data.map((v) => {
            disp += ' <div id='+ "data-" + v.cid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div  class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">'
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
            disp += ' <div id='+ "data-" + v.cid + ' class="col-12 col-sm-6 col-lg-3">'
            disp += ' <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" >'
            disp += ' <div  class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">'
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


searchRef.addEventListener("keyup" , handleSearchCinema)
window.onload = getCMUserSide





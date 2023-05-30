const handleMoviesDetails = () => {
    console.log("getMdetails");
    let getMoviD = JSON.parse(localStorage.getItem("movie"))
    let getMid = JSON.parse(sessionStorage.getItem("mid"))
    console.log(getMoviD , getMid);
 
   

    let mData = getMoviD.filter((v) => v.mid === getMid)
    console.log(mData);

    if (mData ) {

        let disp = ''
        mData.map((v) => {
            disp += ' <div id="mImg"><img src=' + '../assets/images/' + v.poster + '></div>'
            disp += '<div>'
            disp += ' <h1>' + v.mName + '</h1>'
            disp += ' <h3>' + v.Cname + '</h3>'
            disp += ' <p>' + v.decrpt + '</p>'
            disp += ' <p>' + v.time  + '</p>'
            disp += `<button onclick="handleCinemaData('${v.mName}')"> Book Ticket </button>`
            disp += '</div>'
        })
        document.getElementById("movieD").innerHTML = disp
    }

}

const handleCinemaData = (mName) => {
    console.log(mName);

    sessionStorage.setItem("mNames" , JSON.stringify(mName))

    
    window.location = "./cinemalist.html"
}



window.onload = handleMoviesDetails
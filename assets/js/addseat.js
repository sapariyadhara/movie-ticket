let cinemaNRef = document.getElementById("cinemaN")
let movieRef = document.getElementById("movieN")

let uid = null

const handleChangeCinema = () => {
    console.log("handleChangeCinema");

    let getMovieData = JSON.parse(localStorage.getItem("movie"))
    console.log("get movie", getMovieData);
    let mid = document.getElementById("cinemaN").value

    let sMovie = getMovieData.filter((v) => v.Cname == mid)
    console.log(sMovie);

    if (sMovie != null) {
        let disp = '<option value="0">  Select Movie   </option>'
        sMovie.map((v) => {
            disp += '<option value= '+ v.Cname + '>' + v.mName + '</option>'
        })
        document.getElementById("movieN").innerHTML = disp ;

    }

}

const handlegetCinema = () => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get data", getCinemaData);

    if (getCinemaData != null) {
        let mdisp = "";
        getCinemaData.map((v) => {
            mdisp += "<option value =" + v.cid + ">" + v.name + "</option>";

        });
        document.getElementById("cinemaN").innerHTML = mdisp;
    }

}

const handleChangeMovie = () => {
    let getMovieData = JSON.parse(localStorage.getItem("movie"))
    console.log(getMovieData);

    let tid = document.getElementById("movieN").value
    console.log(tid);


    let timeData = getMovieData.filter((v) => {
       console.log(" v.mid" ,  v.mid);
        // if(v.mid == tid){
      
        //     console.log('v.mid' , v.mid);
        // }
    }) 
    console.log(timeData);


}

cinemaNRef.addEventListener("change", handleChangeCinema)
movieRef/addEventListener("change" , handleChangeMovie)
window.onload = handlegetCinema
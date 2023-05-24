let  cinemaNRef = document.getElementById("cinemaN")

let uid = null

const handleChangeCinema = () => {
    console.log("handleChangeCinema");

    let getcinemaData = JSON.parse(localStorage.getItem("cinema"))
    console.log("get cinema", getcinemaData[0].cid);

    let getMovieData = JSON.parse(localStorage.getItem("movie"))
    console.log("get movie", getMovieData[0]);

 

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


    // if(cid === mid){
    //     let mdisp = "";
    //     getCinemaData.map((v) => {
    //         mdisp += "<option value =" + v.cid + ">" + v.name + "</option>";
         
    //     });
    //     document.getElementById("movieN").innerHTML = mdisp;
    // }

}
cinemaNRef.addEventListener("change" , handleChangeCinema)
window.onload = handlegetCinema
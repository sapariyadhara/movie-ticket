let  cinemaNRef = document.getElementById("cinemaN")

const handleChangeCinema = () => {
    console.log("handleChangeCinema");
}

const handlegetCinema = () => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get data", getCinemaData);

    if (getCinemaData != null) {
        let mdisp = "";
        getCinemaData.map((v) => {
            mdisp += "<option value =" + v.id + ">" + v.name + "</option>";
        });
        document.getElementById("cinemaN").innerHTML = mdisp;
    }

}
cinemaNRef.addEventListener("change" , handleChangeCinema)
window.onload = handlegetCinema
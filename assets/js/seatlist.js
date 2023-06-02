const handleShowSeat = () => {
    let getTime = JSON.parse(sessionStorage.getItem("stime"))
    console.log(getTime );
    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    console.log(getCid);
    let getmovieName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(getmovieName);
    let allSeatData = JSON.parse(localStorage.getItem("seat"))
    console.log(allSeatData[0].time ,allSeatData );

   
 
     let selectSeat = allSeatData.filter((s) => s.cid == getCid && s.mShow == getmovieName && s.time == getTime)

     
    console.log(selectSeat  );
}



window.onload = handleShowSeat
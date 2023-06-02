const handleShowSeat = () => {
    let getTime = JSON.parse(sessionStorage.getItem("stime"))
    console.log(getTime );
    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    console.log(getCid);
    let getmovieName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(getmovieName);
    let allSeatData = JSON.parse(localStorage.getItem("seat"))
    console.log(allSeatData[0].time ,allSeatData[0].cShow );

   
 
     let selectSeat = allSeatData.filter((s) => s.cid == getCid && s.mShow == getmovieName && s.time == getTime)

     
    console.log(selectSeat[0].tickets  );

   
   
    if (selectSeat) {
        let ss = -1
        let disp = ''  
        for(let i = 0 ; i < selectSeat[0].seat.length ; i++){

          ss = selectSeat[0].seat[i] + ss + 1
        //    console.log(ss ,selectSeat[0].seat);
         
            disp += `<div id="nBtn"><button id="st-${[i]}" onclick="handleBookSeat(${i} , '${selectSeat[0].seat}' , '${selectSeat[0].tickets}')">${ss}</button></div>`            
          }
        document.getElementById("sbtun").innerHTML = disp
    }

    document.getElementById("movieN").innerHTML = getmovieName

    if(selectSeat){
        let disp1 = ''
        selectSeat.map((v) => {
            disp1 += '<div>'+ v.cShow + '</div>'
        })
        document.getElementById("cinemaN").innerHTML = disp1
    }

}


const handleBookSeat = (i , seat ,tickets) => {
    // let tt = document.getElementById("st-"+[i]).value
    let getTickets = JSON.parse(localStorage.getItem("seat"))
    console.log(getTickets);
    console.log("book",i ,seat ,tickets);
   tickets = tickets 
  
    if(i){
      
        seat = 1
        console.log(seat);
        document.getElementById("st-"+[i]).innerHTML = seat
        document.getElementById("st-"+[i]).style.backgroundColor = "green"
        document.getElementById("st-"+[i]).style.color = "white"   
       
    }
    
}


window.onload = handleShowSeat
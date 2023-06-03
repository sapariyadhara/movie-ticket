let  checkDataRef = document.getElementById("check")
let seatArr = [];


const handleShowSeat = () => {
    let getBookT = JSON.parse(localStorage.getItem("bookT"))
    console.log(getBookT);

    let getTime = JSON.parse(sessionStorage.getItem("stime"))
    console.log(getTime );
    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    console.log(getCid);
    let getmovieName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(getmovieName);
    let allSeatData = JSON.parse(localStorage.getItem("seat"))
    console.log(allSeatData[0].time ,allSeatData[0].cShow );

    
 
     let selectSeat = allSeatData.filter((s) => s.cid == getCid && s.mShow == getmovieName && s.time == getTime)

     let bookData = selectSeat[0].tickets ==  getBookT[0].seat
     
    console.log(bookData);

   
   
    if (selectSeat[0].seat ) {
        console.log(selectSeat[0].seat );
        console.log(getBookT[0].seat);
        let ss = 0
        let disp = ''  
        for(let i = 0 ; i < selectSeat[0].seat.length ; i++){

          ss = selectSeat[0].seat[i] + ss + 1
        //    console.log(ss ,selectSeat[0].seat);
         
            disp += `<div id="nBtn"><button id="st-${[i]}" onclick="handleBookSeat(${i} , '${selectSeat[0].seat}' , '${selectSeat[0].tickets}')">${ss}</button></div>`            
          }
        document.getElementById("sbtun").innerHTML = disp
    } 


    // if(getBookT[0].seat){
    //     console.log(getBookT[0].seat);
    // }

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
    // let getBookT = JSON.parse(localStorage.getItem("bookT"))
    // console.log(getBookT);

    document.getElementById("st-"+[i]).disabled = true
    // console.log(tt);
    let getTickets = JSON.parse(localStorage.getItem("seat"))
    console.log(getTickets);
    console.log("book",i ,seat ,tickets);
    tickets = tickets 
    // let flag = false 


    let getTime = JSON.parse(sessionStorage.getItem("stime"))
    console.log(getTime );
    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    console.log(getCid);
    let getmovieName = JSON.parse(sessionStorage.getItem("mNames"))
    console.log(getmovieName);
    let allSeatData = JSON.parse(localStorage.getItem("seat"))
    console.log(allSeatData[0].time ,allSeatData[0].cShow );

   
 
     let selectSeat = allSeatData.filter((s) => s.cid == getCid && s.mShow == getmovieName && s.time == getTime)

     
 
    console.log(seatArr);
    

    if(i){

        console.log(selectSeat[0].seat );
        seatArr.push(i)
      
        seat = 1
        console.log(seat);
        
        document.getElementById("st-"+[i]).innerHTML = seat
        document.getElementById("st-"+[i]).style.backgroundColor = "green"
        document.getElementById("st-"+[i]).style.color = "white"   
       
        let mTick = tickets * seatArr.length
   
    document.getElementById("tt").innerHTML = "$" + mTick 
    } 
    // sessionStorage.setItem("seatArr" , JSON.stringify(seatArr))
    
}


const handleCheckOut = () => {
    console.log(seatArr);
    // let getindex = JSON.parse(sessionStorage.getItem("seatArr"))
    // console.log(getindex);
    let getTime = JSON.parse(sessionStorage.getItem("stime"))
    // console.log(getTime );
    let getCid = JSON.parse(sessionStorage.getItem("cid"))
    // console.log(getCid);
    let getmovieName = JSON.parse(sessionStorage.getItem("mNames"))
    // console.log(getmovieName);
    let allSeatData = JSON.parse(localStorage.getItem("seat"))
    console.log(allSeatData[0].time ,allSeatData );

   
 
    let selectSeat = allSeatData.filter((s) => s.cid == getCid && s.mShow == getmovieName && s.time == getTime)

    console.log(selectSeat[0].seat);    
 
    // for(let i = 0 ; i < selectSeat[0].seat.length ; i++){
    //     console.log(selectSeat[0].seat[0]);

    // }

    selectSeat[0].seat.map((v , i) => {
        // console.log(v , i);
        seatArr.map((l , k) => {
            // console.log(l , k);
            if(i == l){
              
                selectSeat[0].seat[i] = 1 
                console.log(selectSeat);
            }
        })
    })

    localStorage.setItem("bookT" , JSON.stringify(selectSeat))

    event.preventDefault()
}

checkDataRef.addEventListener("click" , handleCheckOut)
window.onload = handleShowSeat
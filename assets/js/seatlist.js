let  checkDataRef = document.getElementById("check")
let seatArr = [];


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

    

   
   
    if (selectSeat[0].seat ) {
        console.log(selectSeat[0].seat );
    
        let ss = 0
        let disp = ''  
        for(let i = 0 ; i < selectSeat[0].seat.length ; i++){     
          
          ss = selectSeat[0].seat[i] + ss + 1
        //    console.log(ss ,selectSeat[0].seat[i]);
         
            disp += `<div id="nBtn"><button id="st-${[i]}" onclick="handleBookSeat(${i} , '${selectSeat[0].seat}' , '${selectSeat[0].tickets}')">${i +1}</button></div>`            
          }
        document.getElementById("sbtun").innerHTML = disp
    } 

    for(let j = 0 ; j < selectSeat[0].seat.length ; j++){
        console.log(selectSeat[0].seat[j]);
          if(selectSeat[0].seat[j] == 1){
            document.getElementById("st-"+[j]).disabled = true
            document.getElementById("st-"+[j]).style.backgroundColor = "grey"
            document.getElementById("st-"+[j]).style.color = "white"  
            document.getElementById("st-"+[j]).style.border = "white"  

          }
       
        }

  

    document.getElementById("movieN").innerHTML = getmovieName

    if(selectSeat){
        console.log(selectSeat[0].cShow);
      
        document.getElementById("cinemaN").innerHTML = selectSeat[0].cShow
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
        
        // document.getElementById("st-"+[i]).innerHTML = seat
        document.getElementById("st-"+[i]).style.backgroundColor = "green"
        document.getElementById("st-"+[i]).style.color = "white"   
       
        let mTick = tickets * seatArr.length
   
    document.getElementById("tt").innerHTML = "Pay Rs." + mTick+".00" 
    document.getElementById("TTct").innerHTML = "TiCkets : " + seatArr.length  +"   Pay Rs.   " + mTick+".00"
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

    // let selectSeat[0].mShow 
    document.getElementById("exampleModalLabel").innerHTML = selectSeat[0].mShow
    document.getElementById("TTcShow").innerHTML = 'Cinema :' + selectSeat[0].cShow
    document.getElementById("TTtime").innerHTML = 'Time :' + selectSeat[0].time
  


    let seatF = selectSeat[0].seat

    console.log(seatF );    

    seatF.map((v , i) => {
        // console.log(v , i);
        seatArr.map((l , k) => {
            // console.log(l , k);
            if(i == l){
              
                seatF[i] = 1 
                
                
            }
        })
    })
    console.log(seatF);

   let seatupDate = allSeatData.map((v , i) => {

        if(v.sid === selectSeat[0].sid){
            console.log(v.sid == selectSeat[0].sid);
            allSeatData.push({
              seat : seatF
            })
            
           
        } else {
            return allSeatData
        }

    })
    console.log(allSeatData);
    localStorage.setItem("seat" , JSON.stringify(allSeatData))


    event.preventDefault()
}

checkDataRef.addEventListener("click" , handleCheckOut)
window.onload = handleShowSeat